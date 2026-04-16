import { useState, useEffect, useCallback } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const categories = ['All', 'Meta Ads', 'AI', 'Growth', 'Case Studies'];

const staticBlogPosts = [
  {
    id: 1,
    slug: 'the-future-of-meta-ads',
    category: 'Meta Ads',
    image: '/blog/blog1.png',
    title: 'The Future of Meta Ads: What Changes in 2024',
    excerpt: 'Deep dive into the algorithmic updates pushing Meta Ads towards automation.',
    author: 'Kuldeep H.',
    read_time: '6 min read'
  },
  {
    id: 2,
    slug: 'ai-in-b2b-marketing',
    category: 'AI',
    image: '/blog/blog2.png',
    title: 'How AI Automation is Transforming B2B Lead Gen',
    excerpt: 'Learn how AI-powered chatbots and scoring models are automating B2B funnels entirely.',
    author: 'Growth Team',
    read_time: '5 min read'
  },
  {
    id: 3,
    slug: 'scaling-d2c-growth',
    category: 'Growth',
    image: '/blog/blog3.png',
    title: 'Scaling D2C Growth: From ₹0 to ₹1Cr MRR',
    excerpt: 'A comprehensive playbook on moving past the initial scaling threshold and maximizing LTV:CAC.',
    author: 'Kuldeep H.',
    read_time: '10 min read'
  },
  {
    id: 4,
    slug: 'ai-lead-generation-playbook',
    category: 'Growth',
    image: '/blog/blog1.png',
    title: 'Lowering CPL and Scaling Revenue: The AI Marketing Playbook',
    excerpt: 'Stop wasting capital on unqualified leads. Learn how AI pre-screening pipelines are drastically lowering acquisition costs.',
    author: 'Kuldeep H.',
    read_time: '7 min read'
  },
  {
    id: 5,
    slug: 'automated-customer-acquisition',
    category: 'AI',
    image: '/blog/blog4.png',
    title: 'The Death of Cold Calling: How Automated Acquisition Systems Are Taking Over',
    excerpt: 'Cold outreach is dead. Learn how intent-driven AI pipelines are instantly qualifying leads and scaling revenue without massive sales teams.',
    author: 'Kuldeep H.',
    read_time: '6 min read'
  }
];

export default function Blog() {
  useDocumentTitle('Blog — Growth Insights & Strategies');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`${API}/blog`, {
        params: activeCategory !== 'All' ? { category: activeCategory } : {}
      });
      if (response.data && response.data.length > 0) {
        setPosts(response.data);
      } else {
        throw new Error("No data returned");
      }
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      // Replace dynamic fetch with static blog data smoothly
      const fallbackData = activeCategory === 'All' 
        ? staticBlogPosts 
        : staticBlogPosts.filter(post => post.category === activeCategory);
      setPosts(fallbackData);
      // Not setting error = true to ensure UI renders blog cards without breaking
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="pt-20" data-testid="blog-page">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        
        <div className="container-custom mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              Growth Insights
              <br />
              <span className="gradient-text">& Strategies</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Actionable tips, case studies, and industry insights to help you scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-[#0A0A0C] border-y border-white/5 sticky top-20 z-40">
        <div className="container-custom mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                }`}
                data-testid={`blog-category-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#050505]">
        <div className="container-custom mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video rounded-xl bg-white/5 mb-4" />
                  <div className="h-4 bg-white/5 rounded mb-2 w-24" />
                  <div className="h-6 bg-white/5 rounded mb-2" />
                  <div className="h-4 bg-white/5 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <p className="text-red-400 mb-4">Failed to load blog posts. Please try again.</p>
              <button
                onClick={fetchPosts}
                className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zinc-500">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="blog-card group"
                >
                  <Link to={`/blog/${post.slug}`} data-testid={`blog-post-${post.slug}`}>
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover blog-image"
                        onError={(e) => { e.currentTarget.src = '/blog/blog1.png'; }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.read_time}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
