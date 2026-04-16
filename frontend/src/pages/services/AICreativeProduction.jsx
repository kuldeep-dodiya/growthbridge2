import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Sparkles } from 'lucide-react';

const serviceData = {
  icon: Sparkles,
  title: 'AI Creative Production',
  subtitle: 'Content at Scale',
  headline: 'Create More. Spend Less. Convert Better.',
  description: 'Generate high-quality creative assets at scale using AI-powered tools. From ad creatives to social content, we produce more in a week than most agencies do in a month.',
  heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  
  problem: {
    title: 'The Problem',
    description: 'Traditional creative production is slow, expensive, and doesn\'t scale. By the time you\'ve created one ad, trends have moved on.',
    points: [
      'High creative production costs',
      'Slow turnaround times',
      'Not enough variations for testing',
      'Creative fatigue kills performance',
      'Can\'t keep up with content demands',
    ],
  },
  
  solution: {
    title: 'Our Solution',
    description: 'We combine AI tools with human creativity to produce content at unprecedented speed and scale.',
    points: [
      {
        title: 'AI Ad Creatives',
        description: 'Generate dozens of ad variations in hours, not weeks. Test more, find winners faster.',
      },
      {
        title: 'Video Production',
        description: 'AI-assisted video editing, scripting, and production for social and ads.',
      },
      {
        title: 'Social Content',
        description: 'Consistent, on-brand social media content that builds your presence.',
      },
      {
        title: 'Copy & Scripts',
        description: 'AI-generated copy that converts, refined by human editors.',
      },
    ],
  },
  
  process: [
    {
      step: '01',
      title: 'Brand Immersion',
      description: 'We learn your brand voice, visual identity, and target audience inside out.',
    },
    {
      step: '02',
      title: 'Content Strategy',
      description: 'Plan content themes, formats, and distribution channels.',
    },
    {
      step: '03',
      title: 'AI Generation',
      description: 'Use AI tools to generate initial concepts, copy, and visuals at scale.',
    },
    {
      step: '04',
      title: 'Human Refinement',
      description: 'Our creative team refines, polishes, and ensures brand consistency.',
    },
    {
      step: '05',
      title: 'Deliver & Iterate',
      description: 'Regular content delivery with performance-based iteration.',
    },
  ],
  
  results: [
    { metric: '10x', label: 'Content Output', description: 'More assets produced' },
    { metric: '70%', label: 'Cost Savings', description: 'vs. traditional production' },
    { metric: '48hrs', label: 'Turnaround', description: 'For most requests' },
    { metric: '3x', label: 'Test Variations', description: 'More A/B tests' },
  ],
  
  faqs: [
    {
      question: 'Will the content look AI-generated?',
      answer: 'No. We use AI as a tool, not a replacement. All content is refined by human creatives to ensure quality and authenticity.',
    },
    {
      question: 'What types of content can you produce?',
      answer: 'Ad creatives, social media posts, video content, email templates, landing page copy, blog posts, and more.',
    },
    {
      question: 'How do you ensure brand consistency?',
      answer: 'We create detailed brand guidelines and AI prompts that maintain your visual and verbal identity across all content.',
    },
    {
      question: 'What\'s the typical turnaround time?',
      answer: 'Most content requests are delivered within 48 hours. Rush delivery is available for urgent needs.',
    },
  ],
};

export default function AICreativeProduction() {
  return <ServicePageTemplate data={serviceData} />;
}
