import React from 'react';
import { Building2, Target, Users, Award, Rocket, BookOpen } from 'lucide-react';

function About() {
  const teamMembers = [
    {
      name: "Sarah Anderson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
      description: "With over 15 years of experience in technology leadership, Sarah drives our vision forward."
    },
    {
      name: "Michael Zhang",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      description: "A pioneer in cloud architecture and AI, Michael leads our technical innovation."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400",
      description: "Emily brings products from concept to reality with a focus on user experience."
    },
    {
      name: "David Kim",
      role: "Director of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      description: "David ensures smooth execution of our services and client satisfaction."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in technology."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Your success is our success. We work as an extension of your team."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white page-transition">
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="flex items-center justify-center mb-8">
            <Building2 className="h-20 w-20 text-accent animate-gentle-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-center">Our Story</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 text-center leading-relaxed">
              Success in business isn't about luck—it's about strategy, execution, and adaptability. TW Solutions was founded in 2024 to help businesses scale smarter and faster. We combine proven marketing techniques, automation, and financial insights to drive sustainable growth. Whether you're a startup looking for traction or an established business ready to expand, we're here to provide the tools, strategy, and expertise you need to reach new heights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At TW Solutions, we're driven by a singular purpose: to empower businesses 
                through innovative technology solutions. We believe that every organization 
                deserves access to enterprise-grade technology that can transform their operations 
                and drive growth.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of experts combines deep technical knowledge with industry expertise 
                to deliver solutions that make a real difference. We're not just service 
                providers – we're partners in your success journey.
              </p>
              <div className="flex items-center space-x-4">
                <Rocket className="w-12 h-12 text-accent" />
                <div>
                  <h3 className="font-semibold mb-1">Forward Thinking</h3>
                  <p className="text-gray-400">Always ahead of the technology curve</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team Collaboration"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-lg shadow-xl">
                <BookOpen className="w-12 h-12 text-accent mb-2" />
                <p className="font-semibold">10+ Years Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-primary p-8 rounded-lg text-center">
                <value.icon className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary rounded-lg overflow-hidden group">
                <div className="relative h-64">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;