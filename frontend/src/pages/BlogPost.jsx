import { useState, useEffect } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar as CalendarIcon, MessageCircle, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import CalendlyModal from '@/components/shared/CalendlyModal';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const staticBlogPosts = [
  {
    slug: 'the-future-of-meta-ads',
    category: 'Meta Ads',
    image: '/blog/blog1.png',
    title: 'The Future of Meta Ads: What Changes in 2024',
    author: 'Kuldeep H.',
    date: '2024-01-15T00:00:00Z',
    read_time: '6 min read',
    content: `
# The Meta Ads Ecosystem is evolving rapidly. 
If you simply launch campaigns hoping the manual targeting of 2019 works, you are burning capital.

### 1. Automation over Manual Tars
The introduction of Advantage+ systems means Facebook algorithms outperform manual interest selection 9/10 times. You need to focus intensely on your *creatives* instead of audience toggles.

### 2. UGC and Lo-Fi Creatives
Polished, hyper-produced videos are dying. Users want authenticity. Test raw user-generated content directly into broad audiences and let the Facebook pixel sort the buyers from the browsers.
`
  },
  {
    slug: 'ai-in-b2b-marketing',
    category: 'AI',
    image: '/blog/blog2.png',
    title: 'How AI Automation is Transforming B2B Lead Gen',
    author: 'Growth Team',
    date: '2024-02-10T00:00:00Z',
    read_time: '5 min read',
    content: `
# The Traditional SDR Model is Inefficient.
Sales development reps spending thousands of hours cold emailing lists built from Apollo are seeing diminishing returns. 

### Why AI Automation?
AI handles the top of the funnel instantly. By scraping intent data across LinkedIn and triggering hyper-personalized cold outreach via AI language models, B2B companies are booking 3x more appointments without expanding their SDR constraints.

### Next Steps
Deploy an automation sequence using GPT-4 trained on your specific product objections to pre-qualify inbound traffic instantly.
`
  },
  {
    slug: 'scaling-d2c-growth',
    category: 'Growth',
    image: '/blog/blog3.png',
    title: 'Scaling D2C Growth: From ₹0 to ₹1Cr MRR',
    author: 'Kuldeep H.',
    date: '2024-03-05T00:00:00Z',
    read_time: '10 min read',
    content: `
# The D2C Grind. 
Scaling a Direct-to-Consumer business involves battling rising CAC thresholds. 

### Step 1: Nailing Your Offer
If your offer isn't irresistible, no amount of performance marketing wizardry will make it profitable. Bundle products to increase Average Order Value (AOV).

### Step 2: The E-mail Retention Loop
Acquiring a customer is expensive; keeping them should be cheap. Map out a robust 30-day post-purchase Klaviyo flow.

### Step 3: Scaling Spend
Only scale your daily budgets when your LTV (Lifetime Value) to CAC ratio comfortably crosses **3:1**.
`
  },
  {
    slug: 'ai-lead-generation-playbook',
    category: 'Growth',
    image: '/blog/blog1.png',
    title: 'Lowering CPL and Scaling Revenue: The AI Marketing Playbook',
    author: 'Kuldeep H.',
    date: '2026-04-10T00:00:00Z',
    read_time: '7 min read',
    content: `
# The Real Cost of Traditional Lead Generation

Most businesses today are caught in a cycle of diminishing returns. Advertising costs are rising across Meta and Google, yet the quality of inbound leads continues to drastically decline.

The standard approach of launching broad ads and hoping for CRM form fills is no longer viable. Without a strict qualification layer, companies inevitably burn capital on users who will never convert.

Founders and marketing teams must shift away from volume-driven vanity metrics and transition toward structured, intent-driven acquisition engines.

### The Problem with CPL Metrics

The industry average Cost Per Lead (CPL) is skyrocketing, but the conversion rate from lead to paying customer is dropping. Why?

Tire-kickers and low-intent prospects click on ads out of curiosity. They fill up your CRM, heavily wasting your sales team's time and resources. 

If your marketing pipeline stops at capturing a phone number, you are simply paying a major premium to acquire noise.

### Building an Intent-Driven Qualification System

Lead generation is merely the top of the funnel. True scaling occurs when you combine highly targeted traffic with rapid, automated pre-screening software.

Instead of directing ad traffic to a static landing page, route your prospects through an AI-powered conversational funnel. 

This mechanism acts as an immediate filter. It engages leads instantly and eliminates the unqualified before your sales team ever executes a phone call.

### Real-World Application and Metrics

When this systemic framework is applied properly, you transition away from asking "how many leads did we get" to "what is our true acquisition cost."

* By restructuring Meta campaigns to target strict behavioral intent and deploying automated pre-screening chatbots, we have seen real estate developers aggressively drop their acquisition costs from inflated industry averages down to a highly efficient **₹200–₹250 CPL**.
* Similarly, hyper-local ad strategies combined with automated retention systems yield massive stability. A restaurant chain implementing these exact methods scaled their revenue predictably from **₹20K to ₹1.5L per month**.

### Shifting from Curiosity to Intent

Your ad creatives must evolve. Curiosity generates cheap clicks; intent generates paying customers.

Stop optimizing for the lowest Cost Per Click. Instead, optimize for the highest conversion probability by directly calling out the ideal customer profile and their core pain points within the first three seconds of your advertising material.

### The Path to Predictable Scale

Focusing on quality over quantity requires an underlying, automated system. By implementing AI pre-screening, aggressive intent-focused advertising, and seamless follow-up sequences, your customer acquisition costs will plummet.

If your business is ready to stop wasting advertising capital on unqualified leads, it's time to build a highly predictable growth infrastructure tailored explicitly to your industry. 
`
  },
  {
    slug: 'automated-customer-acquisition',
    category: 'AI',
    image: '/blog/blog4.png',
    title: 'The Death of Cold Calling: How Automated Acquisition Systems Are Taking Over',
    author: 'Kuldeep H.',
    date: '2026-04-10T00:00:00Z',
    read_time: '6 min read',
    content: `
# The Traditional Scaling Problem

For decades, the math behind business growth was simple but grueling: if you want more revenue, you need more volume. This meant hiring larger teams of SDRs, making more cold calls, and aggressively spending capital on wide-net advertising. 

Today, this strategy is mathematically flawed.

Advertising costs across meta-platforms are soaring. Consumer attention spans are at an all-time low. If you rely on manual qualification to filter out the noise, you are bleeding capital on inefficiencies.

### Artificial Intelligence is the New Qualification Engine

The modern customer acquisition playbook relies heavily on intent rather than raw volume. 

The goal isn't to get 1,000 leads and hope 10 convert. The goal is to deploy an AI-driven behavioral net that filters out 990 tire-kickers instantly, allowing your sales team to only speak with the 10 intent-driven buyers.

By injecting automated conversational funnels (smart chatbots, algorithmic pre-screening) between the digital ad and the sales call, you eliminate the single most expensive bottleneck in business: human qualification time.

### Proven Metrics Across Industries

When businesses shift from a manual-volume approach to an automated-intent system, the unit economics shift dramatically.

* In high-ticket spaces like Real Estate, developers abandoning broad lead forms in favor of AI-qualified funnels are slashing acquisition costs. We frequently see them stabilize at **₹200–₹250 CPL**, pulling directly from high-intent demographics while bypassing the massive pool of unqualified scrollers.
* In retail and local commerce, the effects of localized automation compound rapidly. A restaurant chain struggling with weekday foot traffic deployed an automated SMS/WhatsApp retention loop tied to their local Meta ad stack. This structured automation scaled their revenue reliably from **₹20K to ₹1.5L** per month without hiring a single new manager.

### The Shift You Must Make Today

Stop throwing bodies at a data problem. If your sales team is complaining about lead quality, the fault lies within your acquisition funnel, not their closing abilities.

You must optimize your pipelines globally. From the very first split-second of your advertising material—which must call out the core pain points of your buyer profile directly—down to the AI layer processing the click, every touchpoint must prioritize intent.

If you scale your ad spend without scaling your automatic qualification process, you simply scale your failure rate.

### Next Steps for Founders

The tools to build out these intelligent, high-converting pipelines are fully accessible. The challenge is execution. 

A high-quality growth system seamlessly blends aggressive performance marketing with frictionless automated qualifications. If you are ready to stop burning capital on cold outreach and tire-kickers, step into the modern era of acquisition.
`
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCalendly, setShowCalendly] = useState(false);
  useDocumentTitle(post ? post.title : 'Loading...');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API}/blog/${slug}`);
        if(response.data) {
          setPost(response.data);
        } else {
          throw new Error("No data returned");
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        // Fallback robustly by finding string-matched slug from mock data
        const staticMatch = staticBlogPosts.find(item => item.slug === slug);
        if(staticMatch) {
          setPost(staticMatch);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-400 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20" data-testid="blog-post-page">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = '/blog/blog1.png'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent" />
        
        <div className="container-custom mx-auto relative z-10 pb-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors"
            data-testid="back-to-blog"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.read_time}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#050505]">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="markdown-content"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.article>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Implement These Strategies?
              </h3>
              <p className="text-zinc-400 mb-6">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%20just%20read%20your%20blog%20and%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#1da851]"
                  data-testid="blog-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-200"
                  data-testid="blog-book-call-btn"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </div>
  );
}
