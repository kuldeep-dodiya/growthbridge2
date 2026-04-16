import { useState, useEffect } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const CALENDLY_URL = "https://calendly.com/growthbriidge/30min";

const budgetOptions = [
  '₹30K - ₹50K',
  '₹50K - ₹1L',
  '₹1L - ₹3L',
  '₹3L+',
];

export default function Contact() {
  useDocumentTitle('Contact Us');
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    budget: '',
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('form');

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.budget) {
      toast.error('Please select a monthly budget range.');
      return;
    }
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      setFormData({ name: '', business: '', email: '', phone: '', budget: '', goal: '' });
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 lg:pt-28" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        
        <div className="container-custom mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-mono text-blue-400 mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              Let's Build Your
              <br />
              <span className="gradient-text">Growth System</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Ready to scale? Drop us a message or book a call. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-[#0A0A0C]">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Form or Calendly */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Tab Selector */}
              <div className="flex gap-2 mb-8 p-1.5 bg-white/5 rounded-full w-fit">
                <button
                  onClick={() => setActiveTab('form')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === 'form'
                      ? 'bg-white text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  data-testid="tab-form"
                >
                  Send Message
                </button>
                <button
                  onClick={() => setActiveTab('calendly')}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === 'calendly'
                      ? 'bg-white text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  data-testid="tab-calendly"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </button>
              </div>

              {activeTab === 'form' ? (
                /* Contact Form */
                isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#050505] border border-green-500/20 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-zinc-400 mb-6">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <a
                      href="https://wa.me/919313070872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#1da851]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Or Chat Now on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Your Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="bg-[#050505] border-white/10 text-white placeholder:text-zinc-600 focus:border-blue-500 h-12"
                          data-testid="contact-name-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Business Name *
                        </label>
                        <Input
                          name="business"
                          value={formData.business}
                          onChange={handleChange}
                          required
                          placeholder="Your Company"
                          className="bg-[#050505] border-white/10 text-white placeholder:text-zinc-600 focus:border-blue-500 h-12"
                          data-testid="contact-business-input"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="bg-[#050505] border-white/10 text-white placeholder:text-zinc-600 focus:border-blue-500 h-12"
                          data-testid="contact-email-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Phone (Optional)
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="bg-[#050505] border-white/10 text-white placeholder:text-zinc-600 focus:border-blue-500 h-12"
                          data-testid="contact-phone-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-3">
                        Monthly Budget *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: option })}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              formData.budget === option
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-[#050505] border border-white/10 text-zinc-400 hover:border-blue-500/50 hover:text-white'
                            }`}
                            data-testid={`budget-option-${option.replace(/[₹\s+-]/g, '')}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        What's your goal? *
                      </label>
                      <Textarea
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your business and what you want to achieve..."
                        className="bg-[#050505] border-white/10 text-white placeholder:text-zinc-600 focus:border-blue-500 resize-none"
                        data-testid="contact-goal-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.budget}
                      className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="contact-form-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )
              ) : (
                /* Calendly Inline Embed */
                <div className="rounded-2xl overflow-hidden bg-[#050505] border border-white/5">
                  <div 
                    className="calendly-inline-widget" 
                    data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=050505&text_color=ffffff&primary_color=3b82f6`}
                    style={{ minWidth: '320px', height: '650px' }}
                  />
                </div>
              )}
            </motion.div>

            {/* Right Column - Contact Info & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Actions */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Prefer to talk?</h3>
                <p className="text-zinc-400 mb-6">
                  WhatsApp is the fastest way to reach us. We typically respond within minutes during business hours.
                </p>
                
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:bg-[#1da851] hover:scale-[1.02]"
                    data-testid="contact-whatsapp-btn"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-4 rounded-full transition-all duration-300 hover:bg-gray-200"
                    data-testid="contact-calendly-direct-btn"
                  >
                    <Calendar className="w-5 h-5" />
                    Open Calendly in New Tab
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-8 rounded-2xl bg-[#050505] border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">+91 93130 70872</p>
                      <p className="text-sm text-zinc-500">WhatsApp preferred • Instant response</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">growthbriidge@gmail.com</p>
                      <p className="text-sm text-zinc-500">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">India • Remote-First</p>
                      <p className="text-sm text-zinc-500">Serving clients globally</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Note */}
              <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-zinc-400 text-sm">
                  We respond to all inquiries within <span className="text-white font-semibold">24 hours</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
