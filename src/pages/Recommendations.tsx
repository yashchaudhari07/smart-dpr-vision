import { TrendingUp, Shield, DollarSign, Clock, Lightbulb, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

interface Recommendation {
  id: string;
  category: "financial" | "technical" | "timeline" | "compliance";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  confidence: number;
  effort: "low" | "medium" | "high";
  timeframe: string;
}

const Recommendations = () => {
  const navigate = useNavigate();

  const recommendations: Recommendation[] = [
    {
      id: "1",
      category: "timeline",
      title: "Implement Agile Milestone Framework",
      description: "Break down the project into smaller, manageable sprints with 2-week iterations to improve timeline predictability and reduce schedule risk.",
      impact: "high",
      confidence: 89,
      effort: "medium",
      timeframe: "2-3 weeks"
    },
    {
      id: "2",
      category: "financial",
      title: "Establish Cost Escalation Buffers",
      description: "Add 15-20% contingency buffers for material costs and implement dynamic pricing agreements with suppliers to mitigate cost escalation risks.",
      impact: "high",
      confidence: 92,
      effort: "low",
      timeframe: "1 week"
    },
    {
      id: "3",
      category: "technical",
      title: "Create Technical Integration Roadmap",
      description: "Develop a detailed integration testing strategy with phased rollout to identify and resolve technical dependencies early in the project lifecycle.",
      impact: "medium",
      confidence: 84,
      effort: "high",
      timeframe: "4-6 weeks"
    },
    {
      id: "4",
      category: "compliance",
      title: "Enhance Documentation Standards",
      description: "Implement automated documentation review processes and standardized templates to ensure consistent quality and regulatory compliance.",
      impact: "medium",
      confidence: 87,
      effort: "medium",
      timeframe: "2 weeks"
    },
    {
      id: "5",
      category: "technical",
      title: "Resource Skill Assessment & Training",
      description: "Conduct comprehensive skill gap analysis and implement targeted training programs to ensure team readiness for technical challenges.",
      impact: "high",
      confidence: 91,
      effort: "medium",
      timeframe: "3-4 weeks"
    },
    {
      id: "6",
      category: "financial",
      title: "Implement Real-time Budget Tracking",
      description: "Deploy automated budget monitoring dashboard with early warning systems for cost overruns and spending pattern analysis.",
      impact: "medium",
      confidence: 86,
      effort: "low",
      timeframe: "1-2 weeks"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "financial":
        return DollarSign;
      case "technical":
        return Shield;
      case "timeline":
        return Clock;
      case "compliance":
        return CheckCircle;
      default:
        return Lightbulb;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "financial":
        return "bg-green-500";
      case "technical":
        return "bg-blue-500";
      case "timeline":
        return "bg-orange-500";
      case "compliance":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning-foreground";
      case "low":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-warning/10 text-warning-foreground";
      case "low":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">AI-Generated Recommendations</h1>
            <p className="text-muted-foreground">
              Intelligent suggestions to improve project success and mitigate identified risks
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="metric-card text-center">
              <div className="text-2xl font-bold text-foreground">{recommendations.length}</div>
              <p className="text-sm text-muted-foreground">Total Recommendations</p>
            </div>
            <div className="metric-card text-center">
              <div className="text-2xl font-bold text-destructive">
                {recommendations.filter(r => r.impact === "high").length}
              </div>
              <p className="text-sm text-muted-foreground">High Impact</p>
            </div>
            <div className="metric-card text-center">
              <div className="text-2xl font-bold text-primary">
                {Math.round(recommendations.reduce((sum, r) => sum + r.confidence, 0) / recommendations.length)}%
              </div>
              <p className="text-sm text-muted-foreground">Avg Confidence</p>
            </div>
            <div className="metric-card text-center">
              <div className="text-2xl font-bold text-success">
                {recommendations.filter(r => r.effort === "low").length}
              </div>
              <p className="text-sm text-muted-foreground">Quick Wins</p>
            </div>
          </div>

          {/* Recommendations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {recommendations.map((rec) => {
              const IconComponent = getCategoryIcon(rec.category);
              return (
                <div key={rec.id} className="metric-card hover:shadow-elegant transition-smooth">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getCategoryColor(rec.category)}`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <p className="text-sm text-muted-foreground capitalize">{rec.category}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getEffortColor(rec.effort)}`}>
                      {rec.effort} effort
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">AI Confidence</span>
                      <span className="text-sm text-primary font-medium">{rec.confidence}%</span>
                    </div>
                    <Progress value={rec.confidence} className="h-2" />
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="text-muted-foreground">Impact:</span>
                        <span className={`font-medium capitalize ${getImpactColor(rec.impact)}`}>
                          {rec.impact}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{rec.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" onClick={() => navigate("/approval")}>
              <TrendingUp className="mr-2 h-4 w-4" />
              Proceed to Approval
            </Button>
            <Button variant="outline" onClick={() => navigate("/reports")}>
              Generate Implementation Plan
            </Button>
            <Button variant="outline" onClick={() => navigate("/dashboard")}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recommendations;