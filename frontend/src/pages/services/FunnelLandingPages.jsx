import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Layout } from 'lucide-react';

const serviceData = {
  icon: Layout,
  title: 'Funnel / Landing Pages',
  subtitle: 'Convert Traffic',
  headline: 'Turn Visitors Into Customers',
  description: 'High-converting landing pages designed to capture leads and drive sales. Every element optimized for maximum conversion.',
  heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
  
  problem: {
    title: 'The Problem',
    description: 'Most landing pages are pretty but don\'t convert. They\'re designed by designers, not marketers who understand conversion psychology.',
    points: [
      'Low conversion rates (industry avg: 2-5%)',
      'No clear value proposition',
      'Confusing user journeys',
      'Poor mobile experience',
      'No testing or optimization',
    ],
  },
  
  solution: {
    title: 'Our Solution',
    description: 'Conversion-focused landing pages built on psychology, data, and proven frameworks.',
    points: [
      {
        title: 'Conversion Architecture',
        description: 'Pages structured around proven conversion frameworks and psychological triggers.',
      },
      {
        title: 'Mobile-First Design',
        description: '70% of traffic is mobile. We design for mobile first, desktop second.',
      },
      {
        title: 'Speed Optimization',
        description: 'Lightning-fast load times. Every second matters for conversion.',
      },
      {
        title: 'Continuous Testing',
        description: 'A/B testing to continuously improve conversion rates over time.',
      },
    ],
  },
  
  process: [
    {
      step: '01',
      title: 'Research & Strategy',
      description: 'Understand your audience, competitors, and conversion goals.',
    },
    {
      step: '02',
      title: 'Wireframe & Copy',
      description: 'Structure the page and craft compelling copy that converts.',
    },
    {
      step: '03',
      title: 'Design & Build',
      description: 'Create stunning designs and develop fast, responsive pages.',
    },
    {
      step: '04',
      title: 'Tracking Setup',
      description: 'Implement analytics, heatmaps, and conversion tracking.',
    },
    {
      step: '05',
      title: 'Test & Optimize',
      description: 'Launch with A/B testing and continuous optimization.',
    },
  ],
  
  results: [
    { metric: '12%+', label: 'Conversion Rate', description: 'Average for our pages' },
    { metric: '<2s', label: 'Load Time', description: 'Fast on all devices' },
    { metric: '2.5x', label: 'Improvement', description: 'vs. original pages' },
    { metric: '100%', label: 'Mobile Optimized', description: 'Perfect on any device' },
  ],
  
  faqs: [
    {
      question: 'What platforms do you build on?',
      answer: 'We build on Webflow, Framer, custom HTML/CSS, or your existing CMS. We choose the best tool for your needs.',
    },
    {
      question: 'Do you write the copy?',
      answer: 'Yes, our team includes conversion copywriters who craft compelling, persuasive copy.',
    },
    {
      question: 'How long does a landing page take?',
      answer: 'Standard landing pages take 2-3 weeks. Complex funnels may take 4-6 weeks.',
    },
    {
      question: 'Do you offer ongoing optimization?',
      answer: 'Yes, we offer monthly optimization packages that include A/B testing and continuous improvement.',
    },
  ],
};

export default function FunnelLandingPages() {
  return <ServicePageTemplate data={serviceData} />;
}
