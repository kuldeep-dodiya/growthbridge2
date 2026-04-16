import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Layout Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

// Service Pages
import MetaAds from "@/pages/services/MetaAds";
import AIAutomation from "@/pages/services/AIAutomation";
import AICreativeProduction from "@/pages/services/AICreativeProduction";
import FunnelLandingPages from "@/pages/services/FunnelLandingPages";
import InfluencerMarketing from "@/pages/services/InfluencerMarketing";
import GrowthConsulting from "@/pages/services/GrowthConsulting";

function App() {
  return (
    <div className="App min-h-screen bg-[#050505]">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/meta-ads" element={<MetaAds />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/ai-creative-production" element={<AICreativeProduction />} />
            <Route path="/services/funnel-landing-pages" element={<FunnelLandingPages />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/growth-consulting" element={<GrowthConsulting />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div className="pt-20 min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-black text-white mb-4">404</h1>
                <p className="text-xl text-zinc-400 mb-8">Page not found</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                  Go Home
                </Link>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
