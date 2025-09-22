import { Bell, Search, User, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="gradient-primary p-2 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">DPR Quality System</h1>
              <p className="text-sm text-muted-foreground">MDoNER Risk Assessment</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#assessment" className="text-muted-foreground hover:text-primary transition-colors">
              Assessment
            </a>
            <a href="#analytics" className="text-muted-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#reports" className="text-muted-foreground hover:text-primary transition-colors">
              Reports
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search assessments..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;