import { Mail, Phone, MapPin, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for support, questions, or collaboration opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-muted-foreground">devops.dynamos@mdoner.gov.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 11 2345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="gradient-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Ministry of New and Renewable Energy<br />
                      Block 14, CGO Complex, Lodhi Road<br />
                      New Delhi - 110003, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Information */}
              <div className="metric-card">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  DevOps Dynamos Team
                </h3>
                <p className="text-muted-foreground mb-4">
                  We are a dedicated team of developers, data scientists, and domain experts 
                  working to revolutionize project assessment through AI-powered solutions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-sm text-foreground">SIH 2025 Participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="text-sm text-foreground">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="metric-card">
              <h2 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input placeholder="Your organization name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your query or feedback..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">About the System</h3>
                <p className="text-sm text-muted-foreground">
                  AI-Powered DPR Quality Assessment and Risk Prediction System developed 
                  for Smart India Hackathon 2025 (SIH25185) to enhance project evaluation efficiency.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/upload" className="hover:text-primary transition-colors">Upload DPR</a></li>
                  <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                  <li><a href="/reports" className="hover:text-primary transition-colors">Reports</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>System Status</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
              <p>&copy; 2025 DevOps Dynamos. Developed for Smart India Hackathon 2025.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Contact;