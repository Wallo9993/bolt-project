{/* Previous App.tsx content with fixed input value */}
import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Users2, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  X, 
  Star, 
  Quote, 
  Menu,
  Shield,
  Zap,
  Send
} from 'lucide-react';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

type Message = {
  id: string;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'bot',
          content: 'Hi, welcome to TW Solutions Inc.! How can I assist you today?',
          options: [
            'Explore Marketing Services',
            'Schedule Consultation',
            'What Makes You Different'
          ]
        }
      ]);
    }
  }, [isChatOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleOptionClick = (option: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'user',
      content: option
    }]);

    setIsTyping(true);

    switch (option) {
      case 'Explore Marketing Services':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'Our comprehensive marketing services include:\n\n• Lead Generation & Nurturing\n• Social Media Marketing\n• Content Strategy & Creation\n• SEO & Digital Marketing\n• Email Marketing Campaigns\n• Analytics & Reporting',
            options: ['Pricing Information', 'Schedule Consultation', 'Learn More About a Service']
          }]);
        }, 1500);
        break;

      case 'Learn More About a Service':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'Which service would you like to learn more about?',
            options: [
              'Lead Generation',
              'Social Media Marketing',
              'Content Strategy',
              'SEO Services'
            ]
          }]);
        }, 1000);
        break;

      case 'Pricing Information':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'We offer flexible pricing packages tailored to your business needs:\n\n• Starter Package: Basic marketing essentials\n• Growth Package: Comprehensive marketing suite\n• Enterprise: Custom solutions\n\nWould you like to discuss which package best fits your needs?',
            options: ['Schedule Pricing Call', 'Request Pricing PDF', 'Talk to Sales']
          }]);
        }, 1500);
        break;

      case 'Schedule Consultation':
      case 'Schedule Pricing Call':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'Great! Let\'s schedule your free 30-minute consultation with one of our marketing specialists. When would you prefer?',
            options: ['Next 24 Hours', 'This Week', 'Next Week', 'View Calendar']
          }]);
        }, 1000);
        break;

      case 'Talk to Sales':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'I\'ll connect you with our sales team. How would you prefer to connect?',
            options: ['Call Now', 'Schedule Call', 'Email Sales Team']
          }]);
        }, 1000);
        break;

      case 'What Makes You Different':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'TW Solutions stands out through:\n\n• Data-driven strategies\n• Proven ROI track record\n• Custom-tailored solutions\n• Dedicated success manager\n• Regular performance reviews\n\nWould you like to see some of our success stories?',
            options: ['View Case Studies', 'Schedule Consultation', 'Learn More']
          }]);
        }, 1500);
        break;

      case 'Get Started':
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'I\'ll help you get started with TW Solutions. First, let\'s understand your goals. What\'s your primary marketing objective?',
            options: [
              'Increase Lead Generation',
              'Improve Brand Awareness',
              'Boost Online Sales',
              'Not Sure - Need Guidance'
            ]
          }]);
        }, 1000);
        break;

      default:
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'bot',
            content: 'Would you like to learn more about how we can help grow your business?',
            options: ['Explore Marketing Services', 'Schedule Consultation', 'What Makes You Different']
          }]);
        }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = userInput.toLowerCase();
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'user',
      content: userInput
    }]);

    setUserInput('');
    setIsTyping(true);

    // Handle common queries
    if (userMessage.includes('pricing') || userMessage.includes('cost') || userMessage.includes('package')) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          content: 'I\'d be happy to discuss our pricing options. We offer flexible packages tailored to your needs:',
          options: ['View Pricing Packages', 'Schedule Pricing Call', 'Talk to Sales']
        }]);
      }, 1500);
    } else if (userMessage.includes('consultation') || userMessage.includes('meeting') || userMessage.includes('call')) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          content: 'I\'d be happy to help you schedule a consultation with one of our marketing specialists.',
          options: ['Schedule Now', 'Learn More First', 'View Available Times']
        }]);
      }, 1500);
    } else if (userMessage.includes('service') || userMessage.includes('help') || userMessage.includes('offer')) {
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          content: 'We offer a full range of marketing services. What area are you most interested in?',
          options: [
            'Lead Generation',
            'Social Media Marketing',
            'Content Strategy',
            'SEO Services'
          ]
        }]);
      }, 1500);
    } else {
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: 'bot',
          content: 'Thank you for your message. To better assist you, would you like to:',
          options: ['Schedule a Consultation', 'Explore Our Services', 'Talk to a Specialist']
        }]);
      }, 1500);
    }
  };

  const GetStartedButton = ({ className = "", isMobile = false }) => (
    <button 
      onClick={() => {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
      }}
      className={`cta-button px-4 sm:px-6 py-2 rounded-full 
        text-white font-medium
        ${className} ${isMobile ? 'w-full justify-center' : ''}`}
    >
      <span className="inline-flex items-center space-x-2 animate-gentle-pulse">
        <span className="text-sm sm:text-base">Get Started</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[100svh] radial-background">
              {/* Background Image Container with Parallax */}
              <div 
                className="absolute inset-0 will-change-transform"
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000"
                  alt="Background"
                  className="w-full h-[120%] object-cover object-center"
                  style={{
                    marginTop: '-10%',
                  }}
                />
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary"></div>
              </div>
              <div className="container mx-auto px-4 sm:px-6 min-h-[100svh] flex items-center relative">
                <div className="max-w-3xl mx-auto text-center pt-20 px-4">
                  <h1 className="hero-content font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white shadow-hero">
                    Transforming Business Through Technology
                  </h1>
                  <p className="hero-content font-montserrat text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-white/90 shadow-hero max-w-2xl mx-auto">
                    We deliver innovative solutions that drive growth and efficiency for forward-thinking enterprises.
                  </p>
                  <div className="hero-content">
                    <GetStartedButton className="mx-auto text-base sm:text-lg" />
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section className="section-transition py-16 sm:py-24 radial-background">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">Why Choose Us</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
                  <div className="glass-card p-6 sm:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                    <BarChart3 className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Data-Driven Marketing</h3>
                    <p className="text-gray-300">Transform campaign performance with real-time analytics and actionable insights. Our data-first approach ensures maximum ROI on every marketing initiative.</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Advanced Analytics Dashboard
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Real-time Performance Metrics
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        ROI-focused Strategies
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-6 sm:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                    <Brain className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-4">AI-Powered Growth</h3>
                    <p className="text-gray-300">Leverage cutting-edge AI technology to optimize campaigns, automate outreach, and drive unprecedented growth for your business.</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Smart Campaign Optimization
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Automated Lead Generation
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Predictive Analytics
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-6 sm:p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                    <Users2 className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Client-Centric Solutions</h3>
                    <p className="text-gray-300">Tailored marketing strategies that align with your unique business goals, focusing on sustainable growth and long-term success.</p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Customized Strategy Design
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Dedicated Success Manager
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Regular Performance Reviews
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-transition-secondary py-16 sm:py-24 bg-secondary radial-background">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">What Our Clients Say</h2>
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                  {/* Testimonial 1 */}
                  <div className="bg-primary p-6 sm:p-8 rounded-lg relative group hover:transform hover:scale-[1.02] transition-all duration-300">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-accent opacity-50" />
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6">"TW Solutions transformed our business operations with their innovative technology solutions. The results exceeded our expectations."</p>
                      <div className="border-t border-gray-700 pt-4">
                        <p className="font-semibold">Sarah Johnson</p>
                        <p className="text-sm text-gray-400">CEO, Tech Innovators</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-primary p-6 sm:p-8 rounded-lg relative group hover:transform hover:scale-[1.02] transition-all duration-300">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-accent opacity-50" />
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6">"The team's expertise in data analytics helped us make informed decisions that drove our growth strategy."</p>
                      <div className="border-t border-gray-700 pt-4">
                        <p className="font-semibold">Michael Chen</p>
                        <p className="text-sm text-gray-400">CTO, Data Dynamics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white flex flex-col">
      {/* Floating Header */}
      <header className={`fixed w-full top-0 sm:top-4 left-0 z-50 transition-all duration-300 ${isScrolled ? 'sm:top-0' : 'sm:top-4'}`}>
        <div className="max-w-[95%] mx-auto">
          <nav id="mobile-nav" className={`rounded-none sm:rounded-full backdrop-blur-[4px] border-b sm:border border-white/5 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/[0.08] py-2 shadow-lg' 
              : 'bg-white/[0.05] py-3 sm:py-4'
          }`}>
            <div className="px-4 sm:px-8 md:px-12 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                <span className="text-lg sm:text-xl font-bold text-white">TW Solutions Inc.</span>
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {['home', 'services', 'about', 'contact'].map((page) => (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative py-2 group transition-colors duration-200 ${
                      currentPage === page ? 'text-accent' : 'text-white hover:text-accent'
                    }`}
                  >
                    <span className="capitalize text-sm lg:text-base font-medium">{page}</span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-200 ${
                      currentPage === page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </button>
                ))}
                <GetStartedButton />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div 
              className={`md:hidden transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 pt-2 border-t border-white/10">
                <div className="flex flex-col space-y-2">
                  {['home', 'services', 'about', 'contact'].map((page) => (
                    <button 
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-2 px-4 rounded-full transition-colors duration-200 text-sm ${
                        currentPage === page 
                          ? 'bg-accent text-white' 
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="capitalize font-medium">{page}</span>
                    </button>
                  ))}
                  <div className="pt-2">
                    <GetStartedButton isMobile={true} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {renderPage()}

      {/* Footer */}
      <footer className="bg-secondary mt-auto">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-accent" />
                <span className="font-bold">TW Solutions Inc.</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering businesses with innovative technology solutions since 2024.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-accent transition-colors duration-200">Home</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-accent transition-colors duration-200">Services</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-accent transition-colors duration-200">About</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-accent transition-colors duration-200">Contact</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>contact@twsolutions.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>123 Tech Way, Innovation City</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              © 2024 TW Solutions Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">Terms of Service</a>
              <button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-accent transition-colors duration-200">Contact</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="bg-secondary rounded-lg shadow-xl w-[90vw] sm:w-96 mb-4 mx-4 sm:mx-0">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span className="font-semibold">Chat with us</span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-96 flex flex-col">
              <div className="flex-grow p-4 space-y-4 overflow-y-auto scrollbar-thin">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${
                      message.type === 'bot' 
                        ? 'bg-primary' 
                        : 'bg-accent ml-auto'
                    } p-3 rounded-lg max-w-[80%]`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-3 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-primary p-3 rounded-lg max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-accent/50 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow p-2 rounded-lg bg-primary border border- gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-accent hover:bg-accent-light transition-colors duration-200"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-accent/90 hover:bg-accent w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;