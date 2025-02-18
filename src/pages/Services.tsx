import React, { useEffect, useRef } from 'react';
import { 
  BarChart3, 
  MonitorSmartphone, 
  ScrollText, 
  Lightbulb,
  ClipboardList,
  Network,
  Cpu
} from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

function Services({ setCurrentPage }: ServicesProps) {
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Initial fade-in animation for the entire services section
    const servicesSection = servicesRef.current;
    if (servicesSection) {
      setTimeout(() => {
        servicesSection.style.opacity = '1';
        servicesSection.style.transform = 'translateY(0)';
      }, 500);
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all service cards
    document.querySelectorAll('.service-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: "Marketing",
      description: "We craft data-driven marketing strategies tailored to your business needs. From social media management and paid ads to SEO and brand development, we help you attract and retain customers effectively.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
    },
    {
      icon: ScrollText,
      title: "Accounting & Bookkeeping",
      description: "Keep your finances in order with our professional bookkeeping and accounting services. We handle everything from transaction tracking and reconciliation to financial reporting, ensuring accuracy and compliance.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800"
    },
    {
      icon: MonitorSmartphone,
      title: "Website Development",
      description: "Build a strong online presence with a custom website designed for your business. Our team creates responsive, high-performing websites optimized for user experience, speed, and conversions.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800"
    },
    {
      icon: Lightbulb,
      title: "Business Consulting",
      description: "Get expert guidance on scaling and optimizing your business. We provide strategic insights, financial planning, and operational improvements to help you achieve sustainable growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
    },
    {
      icon: ClipboardList,
      title: "Administrative Services",
      description: "Streamline your operations with our administrative support services. We handle document preparation, data entry, scheduling, and other essential tasks, allowing you to focus on growing your business.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white page-transition">
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative">
          <h1 className="text-5xl font-bold mb-6 text-center animate-fade-in">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center animate-fade-in animation-delay-200">
            Comprehensive business solutions tailored to drive your success. We combine expertise with innovation to deliver exceptional results.
          </p>
          <div className="mt-8 text-center">
            <button 
              onClick={handleGetStarted}
              className="cta-button px-6 py-3 rounded-full text-white font-medium inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <Network className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" ref={servicesRef} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease-out' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 opacity-0 translate-y-4"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                  <service.icon className="absolute bottom-4 right-4 w-12 h-12 text-accent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <service.icon className="w-6 h-6 mr-3 text-accent" />
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                  <button 
                    onClick={handleGetStarted}
                    className="mt-6 text-accent hover:text-accent-light flex items-center transition-colors duration-200"
                  >
                    Get Started
                    <Network className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Let's discuss how our services can help you achieve your business goals and drive growth.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-accent hover:bg-accent-light px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-all duration-200 animate-fade-in animation-delay-400 hover:transform hover:scale-105"
          >
            <span>Get Started</span>
            <Cpu className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;