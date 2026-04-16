import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { Bot } from 'lucide-react';

const serviceData = {
  icon: Bot,
  title: 'AI Automation',
  subtitle: 'Scale Operations',
  headline: 'Automate Growth. Multiply Results.',
  description: 'Stop doing repetitive tasks manually. Our AI automation systems handle lead qualification, customer support, content creation, and more—24/7.',
  heroImage: 'https://static.prod-images.emergentagent.com/jobs/8c4132bc-810e-4df6-9699-cde94efb21c2/images/0c8153f4589992217e524d7025546e230c9c13ca6b2df216e50ce1a0ea6f2d30.png',
  
  problem: {
    title: 'The Problem',
    description: 'Businesses waste countless hours on repetitive tasks that could be automated. Manual processes lead to delays, inconsistencies, and missed opportunities.',
    points: [
      'Hours spent on manual lead follow-ups',
      'Inconsistent customer response times',
      'Data entry and reporting bottlenecks',
      'Scaling requires hiring more people',
      'Human error in repetitive tasks',
    ],
  },
  
  solution: {
    title: 'Our Solution',
    description: 'We implement intelligent automation systems that work 24/7, handling tasks that previously required human intervention.',
    points: [
      {
        title: 'Lead Qualification Bots',
        description: 'AI-powered chatbots that qualify leads, answer FAQs, and book calls—automatically.',
      },
      {
        title: 'Customer Support AI',
        description: 'Handle 80% of support queries without human intervention. Escalate complex issues intelligently.',
      },
      {
        title: 'Content Automation',
        description: 'Generate social media posts, email sequences, and marketing content at scale.',
      },
      {
        title: 'Data Pipelines',
        description: 'Automated reporting, CRM updates, and data analysis that runs in the background.',
      },
    ],
  },
  
  process: [
    {
      step: '01',
      title: 'Process Audit',
      description: 'We map your current workflows and identify automation opportunities.',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom automation architecture designed for your specific needs and tech stack.',
    },
    {
      step: '03',
      title: 'Build & Integrate',
      description: 'Development and integration with your existing tools and systems.',
    },
    {
      step: '04',
      title: 'Test & Refine',
      description: 'Rigorous testing and refinement to ensure reliability and accuracy.',
    },
    {
      step: '05',
      title: 'Deploy & Monitor',
      description: 'Launch with continuous monitoring and optimization.',
    },
  ],
  
  results: [
    { metric: '80%', label: 'Tasks Automated', description: 'Reduced manual work' },
    { metric: '24/7', label: 'Response Time', description: 'Always-on support' },
    { metric: '10x', label: 'Productivity', description: 'Team efficiency' },
    { metric: '50%', label: 'Cost Reduction', description: 'Operational savings' },
  ],
  
  faqs: [
    {
      question: 'What tools do you use for automation?',
      answer: 'We work with a variety of tools including Make (Integromat), Zapier, custom Python scripts, GPT APIs, and various no-code/low-code platforms depending on your needs.',
    },
    {
      question: 'Will this integrate with our existing systems?',
      answer: 'Yes, we design automations to work with your existing tech stack—CRMs, email tools, databases, and more.',
    },
    {
      question: 'How long does implementation take?',
      answer: 'Simple automations can be deployed in 1-2 weeks. Complex systems may take 4-8 weeks depending on scope.',
    },
    {
      question: 'What about maintenance?',
      answer: 'We offer ongoing maintenance packages to ensure your automations continue running smoothly and adapt to changes.',
    },
  ],
};

export default function AIAutomation() {
  return <ServicePageTemplate data={serviceData} />;
}
