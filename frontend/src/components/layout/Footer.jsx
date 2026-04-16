import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Shield, Clock, Award } from 'lucide-react';

// Logo URL
const LOGO_URL = "https://customer-assets.emergentagent.com/job_ai-growth-system-6/artifacts/xhhkl5ea_logo3.png";

const services = [
  { name: 'Meta Ads', href: '/services/meta-ads' },
  { name: 'AI Automation', href: '/services/ai-automation' },
  { name: 'AI Creative Production', href: '/services/ai-creative-production' },
  { name: 'Funnel / Landing Pages', href: '/services/funnel-landing-pages' },
  { name: 'Influencer Marketing', href: '/services/influencer-marketing' },
  { name: 'Growth Consulting', href: '/services/growth-consulting' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const trustBadges = [
  { icon: Shield, text: 'Money-Back Guarantee' },
  { icon: Clock, text: '24hr Response Time' },
  { icon: Award, text: '10+ Happy Clients' },
];

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5" data-testid="footer">
      {/* Trust Bar */}
      <div className="border-b border-white/5">
        <div className="container-custom mx-auto py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-zinc-300 font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-custom mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img 
                src={LOGO_URL} 
                alt="Growth Bridge Logo" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  Growth<span className="gradient-text">Bridge</span>
                </span>
                <span className="text-xs text-zinc-500 block">Scale Smarter. Grow Faster.</span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              AI-powered performance marketing agency. We don't run ads—
              <span className="text-white font-medium">we build growth systems</span> that 
              generate qualified leads and scale revenue.
            </p>
            
            {/* CTA in Footer */}
            <a
              href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20discuss%20growing%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
              data-testid="footer-whatsapp-cta"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start a Conversation
            </a>

            <div className="flex gap-3">
              <a
                href="https://wa.me/919313070872"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all group"
                data-testid="footer-whatsapp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@growthbridge.agency"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all group"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {service.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">+91 93130 70872</p>
                  <p className="text-zinc-500 text-xs">WhatsApp preferred • Instant response</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">growthbriidge@gmail.com</p>
                  <p className="text-zinc-500 text-xs">We reply within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">India • Remote-First</p>
                  <p className="text-zinc-500 text-xs">Serving clients globally</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Growth Bridge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-zinc-500 text-sm">
                Projects start from <span className="text-white font-semibold">₹30,000</span>
              </p>
              <div className="h-4 w-px bg-white/10" />
              <p className="text-zinc-500 text-sm flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Accepting new clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
