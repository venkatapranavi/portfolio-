
import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, Instagram, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-ghibli-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              Have a project in mind or just want to say hello? I'd love to hear from you! Fill out the form, and I'll get back to you as soon as possible.
            </p>
            
            <div className="flex items-center gap-3 text-foreground/80">
              <Mail className="text-ghibli-blue" size={20} />
              <span>hello@ghibliportfolio.com</span>
            </div>
            
            <div className="flex items-center gap-3 text-foreground/80">
              <MessageSquare className="text-ghibli-green" size={20} />
              <span>Available for freelance projects</span>
            </div>
            
            <div className="pt-6">
              <h3 className="font-serif text-xl mb-4">Follow me</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-ghibli-blue/30 flex items-center justify-center text-foreground hover:bg-ghibli-blue hover:text-white transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-ghibli-blue/30 flex items-center justify-center text-foreground hover:bg-ghibli-blue hover:text-white transition-colors duration-300"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
            
            {/* Decorative illustration */}
            <div className="relative mt-8 w-full max-w-sm mx-auto md:mx-0">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Scenic landscape" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-serif text-sm">Let's make something magical together</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-ghibli-cream border-4 border-white flex items-center justify-center">
                <Mail className="text-ghibli-blue" size={24} />
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Contact form */}
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-lg shadow-lg p-8 relative z-10"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-ghibli-blue/30 focus:ring-2 focus:ring-ghibli-blue focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-ghibli-blue/30 focus:ring-2 focus:ring-ghibli-blue focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-ghibli-blue/30 focus:ring-2 focus:ring-ghibli-blue focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full ghibli-btn flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ghibli-green/20 rounded-full blur-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-ghibli-blue/20 rounded-full blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
