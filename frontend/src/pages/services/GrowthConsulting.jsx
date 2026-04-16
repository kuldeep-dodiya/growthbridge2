import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Lightbulb } from 'lucide-react';

const serviceData = {
  icon: Lightbulb,
  title: 'Growth Consulting',
  subtitle: 'Strategic Guidance',
  headline: 'Unlock Your Next Level of Growth',
  description: 'Expert guidance to identify bottlenecks, optimize systems, and unlock your next phase of growth. Strategy sessions, audits, and actionable roadmaps.',
  heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
  
  problem: {
    title: 'The Problem',
    description: 'You\'re stuck. Growth has plateaued and you\'re not sure what\'s holding you back. You need an outside perspective.',
    points: [
      'Growth has plateaued',
      'Not sure where to invest next',
      'Team lacks strategic direction',
      'Too many options, no clear path',
      'Need experienced guidance',
    ],
  },
  
  solution: {
    title: 'Our Solution',
    description: 'Hands-on strategic consulting that identifies your biggest opportunities and creates a clear path forward.',
    points: [
      {
        title: 'Marketing Audits',
        description: 'Comprehensive analysis of your marketing stack, funnels, and campaigns.',
      },
      {
        title: 'Growth Strategy',
        description: 'Custom growth roadmap with prioritized initiatives and expected impact.',
      },
      {
        title: '1:1 Consulting',
        description: 'Regular strategy sessions with direct access to growth experts.',
      },
      {
        title: 'Team Training',
        description: 'Upskill your team with workshops on performance marketing and AI tools.',
      },
    ],
  },
  
  process: [
    {
      step: '01',
      title: 'Deep Dive Session',
      description: 'We learn everything about your business, goals, and challenges.',
    },
    {
      step: '02',
      title: 'Comprehensive Audit',
      description: 'Analyze your marketing stack, data, funnels, and competitive landscape.',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Create a prioritized roadmap with specific, actionable recommendations.',
    },
    {
      step: '04',
      title: 'Presentation & Discussion',
      description: 'Walk through findings and recommendations in detail.',
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: 'Optional ongoing advisory to support implementation.',
    },
  ],
  
  results: [
    { metric: '50+', label: 'Audits Completed', description: 'Across industries' },
    { metric: '2-3x', label: 'Growth Unlocked', description: 'Post-implementation' },
    { metric: '100%', label: 'Actionable', description: 'Every recommendation' },
    { metric: '30 Days', label: 'To Results', description: 'Quick wins identified' },
  ],
  
  faqs: [
    {
      question: 'Who are these sessions for?',
      answer: 'Founders, marketing leaders, and teams who want expert guidance on growth strategy, marketing optimization, or AI implementation.',
    },
    {
      question: 'What does an audit include?',
      answer: 'A comprehensive review of your marketing channels, funnels, creative, data/analytics setup, and competitive positioning with specific recommendations.',
    },
    {
      question: 'Do you implement the recommendations?',
      answer: 'We can. Many clients engage us for implementation after seeing the audit recommendations. But the audit is valuable standalone.',
    },
    {
      question: 'How long does consulting typically last?',
      answer: 'Audits are one-time deliverables (2-3 weeks). Ongoing consulting is typically 3-6 month engagements with monthly strategy sessions.',
    },
  ],
};

export default function GrowthConsulting() {
  return <ServicePageTemplate data={serviceData} />;
}
