import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Target } from 'lucide-react';

const serviceData = {
  icon: Target,
  title: 'Meta Ads',
  subtitle: 'Lead Generation',
  headline: 'Generate Qualified Leads at Unbeatable CPL',
  description: 'We don\'t just run ads. We build lead generation machines that consistently deliver high-quality prospects while crushing your cost per lead.',
  heroImage: 'https://static.prod-images.emergentagent.com/jobs/8c4132bc-810e-4df6-9699-cde94efb21c2/images/4d3a8f16541c17c8c1e65f59dc567421c582060c218ef0817f2a65df5bd08a8d.png',
  
  problem: {
    title: 'The Problem',
    description: 'Most businesses burn money on Meta Ads because they lack proper strategy, creative testing, and optimization. The result? High CPL, low-quality leads, and wasted budget.',
    points: [
      'High cost per lead (₹200+ for most industries)',
      'Leads that never convert to customers',
      'No systematic approach to creative testing',
      'Poor audience targeting and segmentation',
      'No clear attribution or ROI tracking',
    ],
  },
  
  solution: {
    title: 'Our Solution',
    description: 'We build comprehensive lead generation systems powered by data-driven strategies and AI-enhanced creative production.',
    points: [
      {
        title: 'Audience Intelligence',
        description: 'Deep audience research using Facebook\'s data combined with our proprietary tools to identify high-intent buyers.',
      },
      {
        title: 'Creative Factory',
        description: 'AI-powered creative production that generates dozens of ad variations for rapid testing and optimization.',
      },
      {
        title: 'Funnel Optimization',
        description: 'High-converting landing pages designed specifically for Meta Ads traffic, with continuous A/B testing.',
      },
      {
        title: 'Real-Time Optimization',
        description: '24/7 monitoring and optimization to maximize ROAS and minimize wasted spend.',
      },
    ],
  },
  
  process: [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current setup, competitors, and market to identify opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom campaign structure, audience segments, and creative strategy tailored to your goals.',
    },
    {
      step: '03',
      title: 'Creative Production',
      description: 'AI-powered creative generation and production of high-performing ad assets.',
    },
    {
      step: '04',
      title: 'Launch & Test',
      description: 'Structured launch with A/B testing across audiences, creatives, and placements.',
    },
    {
      step: '05',
      title: 'Optimize & Scale',
      description: 'Continuous optimization based on data. Scale winners, kill losers.',
    },
  ],
  
  results: [
    { metric: '₹200-250', label: 'Average CPL', description: 'For real estate leads' },
    { metric: '100+', label: 'Leads/Month', description: 'Consistent delivery' },
    { metric: '3-5x', label: 'ROAS', description: 'Return on ad spend' },
    { metric: '15%', label: 'Conversion Rate', description: 'Lead to customer' },
  ],
  
  faqs: [
    {
      question: 'What industries do you work with?',
      answer: 'We specialize in real estate, D2C brands, restaurants, coaches, edtech, and service businesses. Our strategies are adaptable to most B2C and high-ticket B2B industries.',
    },
    {
      question: 'What\'s the minimum budget required?',
      answer: 'We recommend a minimum ad spend of ₹50,000/month plus our management fee. This allows for proper testing and optimization.',
    },
    {
      question: 'How quickly can we expect results?',
      answer: 'Most clients see initial results within 2-3 weeks. However, optimal performance is typically achieved after 4-6 weeks of testing and optimization.',
    },
    {
      question: 'Do you work on a performance basis?',
      answer: 'We offer both retainer and performance-based models depending on the client and campaign type. Let\'s discuss what works best for your situation.',
    },
  ],
};

export default function MetaAds() {
  return <ServicePageTemplate data={serviceData} />;
}
