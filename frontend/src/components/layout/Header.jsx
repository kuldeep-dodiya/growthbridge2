import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Logo URL
const LOGO_URL = "https://customer-assets.emergentagent.com/job_ai-growth-system-6/artifacts/xhhkl5ea_logo3.png";

const services = [
  { name: 'Meta Ads (Lead Gen)', href: '/services/meta-ads', description: 'High-performance paid campaigns' },
  { name: 'AI Automation', href: '/services/ai-automation', description: 'Automate your growth systems' },
  { name: 'AI Creative Production', href: '/services/ai-creative-production', description: 'AI-powered creative at scale' },
  { name: 'Funnel / Landing Pages', href: '/services/funnel-landing-pages', description: 'High-converting pages' },
  { name: 'Influencer Marketing', href: '/services/influencer-marketing', description: 'Authentic reach & engagement' },
  { name: 'Growth Consulting', href: '/services/growth-consulting', description: 'Strategic growth guidance' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass" data-testid="header">
      <nav className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
            <img 
              src={LOGO_URL} 
              alt="Growth Bridge Logo" 
              className="w-11 h-11 lg:w-14 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-black tracking-tight text-white leading-none">
                Growth<span className="gradient-text">Bridge</span>
              </span>
              <span className="hidden lg:block text-[10px] text-zinc-500 tracking-wide">
                Performance Marketing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive('/') ? 'text-white' : 'text-zinc-400'
              }`}
              data-testid="nav-home"
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive('/about') ? 'text-white' : 'text-zinc-400'
              }`}
              data-testid="nav-about"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-sm font-medium text-zinc-400 hover:text-white bg-transparent data-[state=open]:bg-transparent"
                    data-testid="nav-services-trigger"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 bg-[#0A0A0C] border border-white/10 rounded-xl">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5"
                              data-testid={`nav-service-${service.href.split('/').pop()}`}
                            >
                              <div className="text-sm font-medium text-white">{service.name}</div>
                              <p className="text-xs text-zinc-500 mt-1">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="border-t border-white/10 pt-2 mt-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5 text-blue-400 text-sm font-medium"
                            data-testid="nav-all-services"
                          >
                            View All Services →
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive('/case-studies') ? 'text-white' : 'text-zinc-400'
              }`}
              data-testid="nav-case-studies"
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive('/blog') ? 'text-white' : 'text-zinc-400'
              }`}
              data-testid="nav-blog"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive('/contact') ? 'text-white' : 'text-zinc-400'
              }`}
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
              data-testid="header-whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-white font-medium py-2"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block text-zinc-400 py-2 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block text-blue-400 py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-white font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <a
                href="https://wa.me/919313070872?text=Hi%20Growth%20Bridge!%20I%27d%20like%20to%20discuss%20my%20growth%20goals."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-center font-semibold py-3 rounded-full mt-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
