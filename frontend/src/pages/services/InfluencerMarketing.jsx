import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Users } from 'lucide-react';

const serviceData = {
  icon: Users,
  title: 'Influencer Marketing',
  subtitle: 'Authentic Reach',
  headline: 'Real Influence. Real Results.',
  description: 'Strategic influencer partnerships that drive authentic engagement and reach your target audience where they actually pay attention.',
  heroImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800',
  
  problem: {
    title: 'The Problem',
    description: 'Most influencer campaigns fail because brands chase follower counts instead of actual influence. The result? High costs, low ROI.',
    points: [
      'Fake followers and inflated metrics',
      'Poor audience alignment',
      'No clear ROI tracking',
      'One-off posts with no strategy',
      'Overpaying for vanity metrics',
    ],
  },
  
  solution: {
    title: 'Our Solution',
    description: 'Data-driven influencer selection with performance-focused campaign management.',
    points: [
      {
        title: 'Influencer Vetting',
        description: 'Deep analysis of engagement rates, audience quality, and brand alignment.',
      },
      {
        title: 'Campaign Strategy',
        description: 'Multi-touchpoint campaigns designed for maximum impact and conversion.',
      },
      {
        title: 'Performance Tracking',
        description: 'Unique tracking links, promo codes, and attribution to measure real ROI.',
      },
      {
        title: 'Long-Term Partnerships',
        description: 'Build ongoing relationships with influencers who become true brand advocates.',
      },
    ],
  },
  
  process: [
    {
      step: '01',
      title: 'Strategy & Goals',
      description: 'Define campaign objectives, target audience, and success metrics.',
    },
    {
      step: '02',
      title: 'Influencer Discovery',
      description: 'Find and vet influencers who align with your brand and audience.',
    },
    {
      step: '03',
      title: 'Outreach & Negotiation',
      description: 'Manage outreach, contracts, and pricing negotiations.',
    },
    {
      step: '04',
      title: 'Campaign Execution',
      description: 'Brief influencers, review content, and coordinate posting.',
    },
    {
      step: '05',
      title: 'Report & Optimize',
      description: 'Track performance, report results, and optimize future campaigns.',
    },
  ],
  
  results: [
    { metric: '10x', label: 'ROI', description: 'Average campaign return' },
    { metric: '5%+', label: 'Engagement', description: 'Real engagement rates' },
    { metric: '100+', label: 'Influencers', description: 'In our network' },
    { metric: '90%', label: 'Success Rate', description: 'Campaigns hit targets' },
  ],
  
  faqs: [
    {
      question: 'What types of influencers do you work with?',
      answer: 'We work with nano (1K-10K), micro (10K-100K), and macro (100K+) influencers depending on your goals and budget.',
    },
    {
      question: 'How do you vet influencers?',
      answer: 'We analyze engagement rates, audience demographics, content quality, past brand partnerships, and check for fake followers.',
    },
    {
      question: 'Can you guarantee results?',
      answer: 'We can\'t guarantee viral content, but we structure campaigns with clear KPIs and performance-based elements when possible.',
    },
    {
      question: 'What\'s the minimum budget?',
      answer: 'Effective influencer campaigns start at ₹50,000/month. This allows for working with multiple micro-influencers.',
    },
  ],
};

export default function InfluencerMarketing() {
  return <ServicePageTemplate data={serviceData} />;
}
