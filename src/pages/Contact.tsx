import { Navigation } from '@/components/Navigation';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend service
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message. We will respond within 24-48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content Area */}
      <main className="ml-0 lg:ml-[260px] min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <nav className="text-sm text-muted-foreground mb-2">
              <span>Home</span> <span className="mx-2">/</span> <span className="text-accent">Contact</span>
            </nav>
            <h1 className="text-4xl font-bold text-foreground mb-3">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our editorial team for questions, suggestions, or collaboration opportunities
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <p className="text-muted-foreground text-sm">editorial@worldoffinance.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Phone</h4>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        Financial District<br />
                        New York, NY 10004
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Response Time</h4>
                      <p className="text-muted-foreground text-sm">24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Editorial Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Content suggestions and topic requests</li>
                  <li>• Technical corrections and updates</li>
                  <li>• Partnership and collaboration inquiries</li>
                  <li>• Professional networking opportunities</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="content-suggestion">Content Suggestion</option>
                      <option value="technical-question">Technical Question</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry, suggestion, or question..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-xs text-muted-foreground">
                      * Required fields. We respect your privacy and will not share your information.
                    </p>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150 font-medium"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="bg-card border border-border rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">How often is content updated?</h4>
                    <p className="text-muted-foreground">
                      We publish new articles weekly and update existing content as regulations 
                      and market conditions change.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Can I suggest topics for future articles?</h4>
                    <p className="text-muted-foreground">
                      Absolutely! We welcome topic suggestions from our professional community. 
                      Use the form above or email us directly.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Do you offer collaboration opportunities?</h4>
                    <p className="text-muted-foreground">
                      Yes, we work with finance professionals and subject matter experts. 
                      Please contact us to discuss potential collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;