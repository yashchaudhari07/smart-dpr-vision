import { DollarSign, Clock, Settings, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import RiskIndicator from "@/components/RiskIndicator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const riskData = [
    {
      category: "Financial Risk",
      icon: DollarSign,
      risks: [
        {
          level: "medium" as const,
          score: 35,
          label: "Budget Overrun Risk",
          description: "Current budget estimates may exceed by 15-20%"
        },
        {
          level: "low" as const,
          score: 12,
          label: "Funding Availability",
          description: "Adequate funding sources identified"
        },
        {
          level: "high" as const,
          score: 68,
          label: "Cost Escalation",
          description: "Material costs showing upward trend"
        }
      ]
    },
    {
      category: "Technical Risk",
      icon: Settings,
      risks: [
        {
          level: "low" as const,
          score: 18,
          label: "Technology Readiness",
          description: "Well-established technologies selected"
        },
        {
          level: "medium" as const,
          score: 42,
          label: "Integration Complexity",
          description: "Multiple system integration required"
        },
        {
          level: "medium" as const,
          score: 38,
          label: "Resource Availability",
          description: "Skilled personnel may be limited"
        }
      ]
    },
    {
      category: "Timeline Risk",
      icon: Clock,
      risks: [
        {
          level: "high" as const,
          score: 72,
          label: "Schedule Delays",
          description: "Aggressive timeline with limited buffer"
        },
        {
          level: "medium" as const,
          score: 45,
          label: "Dependency Management",
          description: "Multiple critical path dependencies"
        },
        {
          level: "low" as const,
          score: 22,
          label: "Milestone Clarity",
          description: "Clear milestones and deliverables defined"
        }
      ]
    }
  ];

  const getOverallRisk = (risks: any[]) => {
    const avgScore = risks.reduce((sum, risk) => sum + risk.score, 0) / risks.length;
    if (avgScore < 25) return { level: "Low", color: "text-success", bg: "bg-success/10" };
    if (avgScore < 50) return { level: "Medium", color: "text-warning-foreground", bg: "bg-warning/10" };
    return { level: "High", color: "text-destructive", bg: "bg-destructive/10" };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Risk Prediction Dashboard</h1>
            <p className="text-muted-foreground">
              AI-powered risk analysis across financial, technical, and timeline dimensions
            </p>
          </div>

          {/* Risk Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {riskData.map((category, index) => {
              const overall = getOverallRisk(category.risks);
              return (
                <div key={index} className="metric-card">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="gradient-primary p-3 rounded-lg">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                        <p className="text-sm text-muted-foreground">Overall Risk Assessment</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full ${overall.bg}`}>
                      <span className={`text-sm font-medium ${overall.color}`}>
                        {overall.level}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.risks.map((risk, riskIndex) => (
                      <RiskIndicator
                        key={riskIndex}
                        level={risk.level}
                        score={risk.score}
                        label={risk.label}
                        description={risk.description}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Risk Summary and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Risk Summary */}
            <div className="metric-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">Risk Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <span className="font-medium text-foreground">High Risk Items</span>
                  </div>
                  <span className="text-destructive font-bold">2</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-warning-foreground" />
                    <span className="font-medium text-foreground">Medium Risk Items</span>
                  </div>
                  <span className="text-warning-foreground font-bold">4</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="font-medium text-foreground">Low Risk Items</span>
                  </div>
                  <span className="text-success font-bold">3</span>
                </div>
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="metric-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">Immediate Actions</h3>
              <div className="space-y-3">
                <div className="p-3 border border-destructive/20 rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Critical: Timeline Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Schedule delays pose significant risk. Immediate timeline reassessment needed.
                  </p>
                </div>
                <div className="p-3 border border-warning/20 rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">High: Cost Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement enhanced cost tracking for material escalation.
                  </p>
                </div>
                <div className="p-3 border border-warning/20 rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Medium: Resource Planning</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure additional technical resources to mitigate integration risks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" onClick={() => navigate("/recommendations")}>
              <TrendingUp className="mr-2 h-4 w-4" />
              Get Detailed Recommendations
            </Button>
            <Button variant="outline" onClick={() => navigate("/reports")}>
              Generate Risk Report
            </Button>
            <Button variant="outline" onClick={() => navigate("/approval")}>
              Submit for Approval
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;