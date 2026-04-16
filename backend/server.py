from contextlib import asynccontextmanager
from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import Annotated, List, Optional
import uuid
from datetime import datetime, timezone

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'growthbridge')
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Lifespan handler (replaces deprecated on_event)
@asynccontextmanager
async def lifespan(app):
    # Startup
    yield
    # Shutdown
    client.close()

# Create the main app
app = FastAPI(title="Growth Bridge API", version="1.0.0", lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactFormSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    business: str
    email: EmailStr
    phone: Optional[str] = None
    budget: Annotated[str, Field(min_length=1)]
    goal: str
    source: str = "contact_form"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactFormCreate(BaseModel):
    name: str
    business: str
    email: EmailStr
    phone: Optional[str] = None
    budget: Annotated[str, Field(min_length=1)]
    goal: str

class BlogPost(BaseModel):
    id: str
    slug: str
    title: str
    excerpt: str
    category: str
    author: str
    date: str
    read_time: str
    image: str
    content: str

class CaseStudy(BaseModel):
    id: str
    slug: str
    client_type: str
    title: str
    problem: str
    strategy: str
    execution: str
    results: List[str]
    metrics: dict
    image: str

# API Routes
@api_router.get("/")
async def root():
    return {"message": "Growth Bridge API", "status": "running"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(form_data: ContactFormCreate):
    """Submit a contact form lead"""
    logger.info(f"New contact form submission from: {form_data.email} ({form_data.business})")
    submission = ContactFormSubmission(**form_data.model_dump())
    
    # Convert to dict for MongoDB
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    doc['_id'] = doc.pop('id')
    
    try:
        await db.leads.insert_one(doc)
        logger.info(f"Lead saved successfully: {submission.id}")
    except Exception as e:
        logger.error(f"Failed to save lead to MongoDB: {e}")
        raise HTTPException(status_code=500, detail="Failed to save submission")
    
    return submission

@api_router.get("/leads", response_model=List[ContactFormSubmission])
async def get_leads():
    """Get all leads (for admin purposes)"""
    leads = await db.leads.find({}).to_list(1000)
    
    for lead in leads:
        lead['id'] = str(lead.pop('_id'))
        if isinstance(lead.get('created_at'), str):
            lead['created_at'] = datetime.fromisoformat(lead['created_at'])
    
    return leads

# Blog posts data (static for now)
BLOG_POSTS = [
    {
        "id": "1",
        "slug": "meta-ads-real-estate-leads",
        "title": "How We Generated 100+ Real Estate Leads at ₹50 CPL",
        "excerpt": "A deep dive into our Meta Ads strategy that crushed it for a real estate developer in Mumbai.",
        "category": "Meta Ads",
        "author": "Growth Bridge Team",
        "date": "2024-12-15",
        "read_time": "5 min read",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        "content": "# How We Generated 100+ Real Estate Leads at ₹50 CPL\n\nThe real estate market is brutal. Every developer is fighting for attention. Here's how we cut through the noise.\n\n## The Challenge\n\nOur client was spending ₹200+ per lead with zero quality control. Most leads were time-wasters.\n\n## Our Strategy\n\n1. **Audience Segmentation**: We identified high-intent buyers using custom audiences\n2. **Creative Testing**: 20+ ad variations tested in the first week\n3. **Funnel Optimization**: Landing page conversion rate went from 8% to 24%\n\n## The Results\n\n- 100+ qualified leads in 30 days\n- ₹50-70 CPL (down from ₹200+)\n- 15% conversion to site visits\n\nWant similar results? Let's talk."
    },
    {
        "id": "2",
        "slug": "ai-automation-business-growth",
        "title": "5 AI Automations Every Business Needs in 2025",
        "excerpt": "Stop wasting time on repetitive tasks. These AI automations will 10x your productivity.",
        "category": "AI",
        "author": "Growth Bridge Team",
        "date": "2024-12-10",
        "read_time": "7 min read",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        "content": "# 5 AI Automations Every Business Needs in 2025\n\nAI isn't the future. It's NOW. Here are 5 automations you need today.\n\n## 1. Lead Qualification Bot\n\nAutomate your first response. Qualify leads 24/7.\n\n## 2. Content Generation Pipeline\n\nGenerate social media content at scale.\n\n## 3. Customer Support AI\n\nHandle 80% of queries without human intervention.\n\n## 4. Data Analysis Automation\n\nReal-time insights from your marketing data.\n\n## 5. Email Sequence Automation\n\nPersonalized follow-ups that convert."
    },
    {
        "id": "3",
        "slug": "restaurant-revenue-growth",
        "title": "From ₹10K to ₹50K Daily: A Restaurant Success Story",
        "excerpt": "How strategic marketing and AI-powered campaigns 5x'd a restaurant's daily revenue.",
        "category": "Case Studies",
        "author": "Growth Bridge Team",
        "date": "2024-12-05",
        "read_time": "6 min read",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        "content": "# From ₹10K to ₹50K Daily: A Restaurant Success Story\n\nThis restaurant was struggling. Now they're fully booked every night.\n\n## The Starting Point\n\n- Daily revenue: ₹10,000\n- No online presence\n- Zero digital marketing\n\n## What We Did\n\n1. Built a stunning social media presence\n2. Launched targeted Meta Ads campaigns\n3. Implemented a loyalty program\n4. Partnered with food influencers\n\n## The Transformation\n\n- Daily revenue: ₹50,000 (5x growth)\n- 10,000+ Instagram followers\n- 200+ Google reviews (4.8 stars)"
    },
    {
        "id": "4",
        "slug": "d2c-brand-scaling-strategies",
        "title": "The D2C Playbook: Scaling to ₹1Cr ARR",
        "excerpt": "Learn the exact framework we use to scale D2C brands from zero to crores.",
        "category": "Growth",
        "author": "Growth Bridge Team",
        "date": "2024-11-28",
        "read_time": "8 min read",
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        "content": "# The D2C Playbook: Scaling to ₹1Cr ARR\n\nD2C is hard. But with the right system, it's predictable.\n\n## Phase 1: Foundation (0-10L)\n\n- Product-market fit validation\n- Core audience identification\n- Initial creative testing\n\n## Phase 2: Traction (10L-50L)\n\n- Scaling winning creatives\n- Influencer partnerships\n- Email marketing setup\n\n## Phase 3: Scale (50L-1Cr)\n\n- Omnichannel expansion\n- Retention optimization\n- Brand building"
    },
    {
        "id": "5",
        "slug": "landing-page-conversion-tips",
        "title": "7 Landing Page Hacks That Doubled Our Conversion Rate",
        "excerpt": "Simple tweaks that took our client's landing page from 5% to 12% conversion.",
        "category": "Growth",
        "author": "Growth Bridge Team",
        "date": "2024-11-20",
        "read_time": "5 min read",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "content": "# 7 Landing Page Hacks That Doubled Our Conversion Rate\n\nYour landing page is leaking money. Fix it.\n\n## 1. Single CTA Focus\n\nOne page. One goal. Remove distractions.\n\n## 2. Social Proof Above the Fold\n\nShow results immediately.\n\n## 3. Speed Optimization\n\nEvery second of load time costs conversions.\n\n## 4. Mobile-First Design\n\n70% of traffic is mobile. Design for it.\n\n## 5. Compelling Headlines\n\nOutcome-focused, not feature-focused.\n\n## 6. Trust Elements\n\nLogos, testimonials, guarantees.\n\n## 7. Exit Intent Popups\n\nCapture leaving visitors with offers."
    },
    {
        "id": "6",
        "slug": "influencer-marketing-roi",
        "title": "Influencer Marketing: Getting 10x ROI in 2025",
        "excerpt": "The influencer game has changed. Here's how to win.",
        "category": "Meta Ads",
        "author": "Growth Bridge Team",
        "date": "2024-11-15",
        "read_time": "6 min read",
        "image": "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
        "content": "# Influencer Marketing: Getting 10x ROI in 2025\n\nInfluencer marketing is NOT dead. Bad influencer marketing is.\n\n## Finding the Right Influencers\n\n- Engagement rate > follower count\n- Audience quality analysis\n- Content style alignment\n\n## Negotiation Strategies\n\n- Performance-based deals\n- Long-term partnerships\n- Content rights\n\n## Measuring Success\n\n- Unique tracking links\n- Promo codes\n- Brand lift studies"
    }
]

CASE_STUDIES = [
    {
        "id": "1",
        "slug": "real-estate-lead-generation",
        "client_type": "Real Estate Developer",
        "title": "100+ Leads at ₹50-70 CPL",
        "problem": "High cost per lead (₹200+) with poor quality. Marketing budget being wasted on unqualified prospects.",
        "strategy": "Implemented hyper-targeted Meta Ads with custom audiences based on income levels, property interests, and location. Created compelling video ads showcasing the property.",
        "execution": "Launched 20+ ad variations in week one. A/B tested landing pages. Implemented lead scoring system to prioritize follow-ups.",
        "results": ["100+ qualified leads in 30 days", "₹50-70 CPL achieved", "15% site visit conversion", "3 bookings worth ₹2Cr+"],
        "metrics": {"leads": "100+", "cpl": "₹50-70", "conversion": "15%", "revenue": "₹2Cr+"},
        "image": "https://images.unsplash.com/photo-1770914627852-17ab3a4c8c1b?w=800"
    },
    {
        "id": "2",
        "slug": "restaurant-revenue-growth",
        "client_type": "Restaurant Chain",
        "title": "₹10K to ₹50K Daily Revenue",
        "problem": "Struggling restaurant with minimal footfall. No digital presence. Daily revenue stuck at ₹10,000.",
        "strategy": "Built comprehensive social media strategy. Launched location-based Meta Ads. Partnered with local food influencers for authentic content.",
        "execution": "Created 30+ pieces of content monthly. Ran weekday specials campaigns. Implemented review generation system.",
        "results": ["5x revenue growth", "10,000+ Instagram followers", "200+ Google reviews", "Fully booked weekends"],
        "metrics": {"revenue": "5x", "followers": "10K+", "reviews": "200+", "rating": "4.8"},
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
    },
    {
        "id": "3",
        "slug": "d2c-soap-brand-growth",
        "client_type": "D2C Soap Brand",
        "title": "0 to ₹50L Monthly Revenue",
        "problem": "New D2C brand with no market presence. Competing against established players with limited budget.",
        "strategy": "Focused on niche positioning (organic, sustainable). Built community through educational content. Leveraged micro-influencers for authentic reach.",
        "execution": "Created brand storytelling content. Launched referral program. Optimized website for conversions. Email automation for retention.",
        "results": ["₹50L monthly revenue in 6 months", "40% repeat customer rate", "8x ROAS on ads", "5,000+ loyal customers"],
        "metrics": {"revenue": "₹50L/month", "repeat_rate": "40%", "roas": "8x", "customers": "5K+"},
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
    }
]

@api_router.get("/blog", response_model=List[dict])
async def get_blog_posts(category: Optional[str] = None):
    """Get all blog posts, optionally filtered by category"""
    posts = BLOG_POSTS
    if category and category != "All":
        posts = [p for p in posts if p["category"] == category]
    return posts

@api_router.get("/blog/{slug}", response_model=dict)
async def get_blog_post(slug: str):
    """Get a single blog post by slug"""
    for post in BLOG_POSTS:
        if post["slug"] == slug:
            return post
    raise HTTPException(status_code=404, detail="Blog post not found")

@api_router.get("/case-studies", response_model=List[dict])
async def get_case_studies():
    """Get all case studies"""
    return CASE_STUDIES

@api_router.get("/case-studies/{slug}", response_model=dict)
async def get_case_study(slug: str):
    """Get a single case study by slug"""
    for study in CASE_STUDIES:
        if study["slug"] == slug:
            return study
    raise HTTPException(status_code=404, detail="Case study not found")

# Build CORS origins list, filtering out empty strings
_cors_extra = [o.strip() for o in os.environ.get('CORS_ORIGINS', '').split(',') if o.strip()]
_cors_origins = ["http://localhost:3000", "http://127.0.0.1:3000"] + _cors_extra

# Add CORS middleware BEFORE including routes
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=_cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the router in the main app
app.include_router(api_router)

