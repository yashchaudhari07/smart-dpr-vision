import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-subtle py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="gradient-primary p-4 rounded-2xl shadow-glow">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            AI-Powered DPR Quality Assessment
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced risk prediction and quality assessment system for MDoNER. 
            Monitor compliance, assess risks, and ensure data protection regulation adherence 
            with intelligent AI-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="px-8 py-3 text-lg">
              Access Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              View Analytics
              <BarChart3 className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="metric-card text-center">
              <div className="gradient-primary p-3 rounded-lg w-fit mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">98.5%</h3>
              <p className="text-muted-foreground">Compliance Rate</p>
            </div>
            
            <div className="metric-card text-center">
              <div className="gradient-accent p-3 rounded-lg w-fit mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1,247</h3>
              <p className="text-muted-foreground">Assessments</p>
            </div>
            
            <div className="metric-card text-center">
              <div className="bg-warning p-3 rounded-lg w-fit mx-auto mb-3">
                <AlertTriangle className="h-6 w-6 text-warning-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">12</h3>
              <p className="text-muted-foreground">Active Alerts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;