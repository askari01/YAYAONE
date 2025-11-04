import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import Slide1692 from "./imports/Slide1692";
import { StarCircleIcon, RadialIcon, CrosshairIcon, LargeStarIcon } from "./components/BrandIcons";
import NavBar from "./components/ui/header";
import logoStacked from '@/assets/YAYAONEStacked.png';

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 scale-[0.85] origin-top-left">
        <Slide1692 />
      </div>
    </div>
  );
}

// features section
function Features() {
  const features = [
    {
      Icon: StarCircleIcon,
      title: "Cloud Operations",
      description: "Seamless cloud infrastructure management that scales with your business needs."
    },
    {
      Icon: RadialIcon,
      title: "FinOps Excellence",
      description: "Optimize your cloud spending with clear insights and automated cost management."
    },
    {
      Icon: CrosshairIcon,
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined onboarding process."
    },
    {
      Icon: LargeStarIcon,
      title: "Expert Support",
      description: "Partner with a team that understands both technology and your business goals."
    }
  ];

  return (
    <section id="solutions" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#ff6431] text-5xl mb-4">What We Do</h2>
          <p className="text-[#2d4563] text-xl max-w-2xl mx-auto">
            We simplify complex technology so you can focus on growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                <feature.Icon className="w-full h-full" />
              </div>
              <h3 className="text-[#2d4563] mb-2">{feature.title}</h3>
              <p className="text-[#2d4563]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Cloud Optimization",
      description: "We audit your current cloud setup and identify opportunities to improve performance while reducing costs. Our approach combines technical expertise with business understanding.",
      benefits: ["Cost reduction", "Performance improvement", "Security enhancement"]
    },
    {
      title: "FinOps Strategy",
      description: "Transform your cloud financial management with clear, actionable insights. We help you understand where every dollar goes and how to maximize your cloud ROI.",
      benefits: ["Budget visibility", "Cost forecasting", "Resource optimization"]
    },
    {
      title: "Ongoing Partnership",
      description: "Think of us as an extension of your team. We provide continuous support, proactive monitoring, and strategic guidance as your business evolves.",
      benefits: ["24/7 monitoring", "Proactive alerts", "Strategic consulting"]
    }
  ];

  return (
    <section id="services" className="px-6 py-24 bg-[#faf8ed]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#ff6431] text-5xl mb-4">Our Services</h2>
          <p className="text-[#2d4563] text-xl max-w-2xl mx-auto">
            Comprehensive solutions designed to lift your business up
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#ff6431] mb-4">{service.title}</h3>
              <p className="text-[#2d4563] mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-[#2d4563]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6431] mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#ff6431] text-5xl mb-6">Ready to Transform Your Cloud Operations?</h2>
        <p className="text-[#2d4563] text-xl mb-8 max-w-2xl mx-auto">
          Let's talk about how we can help you focus on what lights you up while we handle the technical flow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#ff6431] hover:bg-[#ff6431]/90 text-white px-8 py-6 rounded-xl">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-[#ff6431] text-[#ff6431] hover:bg-[#faf8ed] px-8 py-6 rounded-xl" onClick={() => window.open("https://calendly.com/kivajohn5/30min", '_blank', 'noopener')}>
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 bg-[#2d4563]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
              <img src={logoStacked} alt="YAYA ONE" className="h-16 md:h-20" />
            <p className="text-white/80">
              Technology made simple. Business made stronger.
            </p>
          </div>
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Cloud Operations</li>
              <li>FinOps Management</li>
              <li>Cost Optimization</li>
              <li>Strategic Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 YAYA ONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const handleSectionChange = (section: string) => {
    console.log(`Navigation to section: ${section}`);
    // Add any additional logic here
  };

  return (
    <div className="min-h-screen">
      <NavBar onSectionChange={handleSectionChange} />
      <Hero />
      <Features />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
