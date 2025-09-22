import { 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Users,
  Clock,
  FileText
} from "lucide-react";
import MetricCard from "./MetricCard";
import RiskIndicator from "./RiskIndicator";
import QualityScoreCard from "./QualityScoreCard";

const Dashboard = () => {
  const qualityData = {
    title: "Overall Quality Score",
    score: 87,
    maxScore: 100,
    categories: [
      { name: "Data Integrity", score: 92, maxScore: 100 },
      { name: "Security Compliance", score: 88, maxScore: 100 },
      { name: "Process Adherence", score: 84, maxScore: 100 },
      { name: "Documentation", score: 85, maxScore: 100 },
    ]
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">System Dashboard</h2>
          <p className="text-muted-foreground">Real-time monitoring and assessment overview</p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Assessments"
            value="1,247"
            change="+12.5%"
            trend="up"
            icon={FileText}
            description="This month"
          />
          <MetricCard
            title="Compliance Score"
            value="98.5%"
            change="+2.1%"
            trend="up"
            icon={Shield}
            description="Average across all departments"
          />
          <MetricCard
            title="Active Users"
            value="342"
            change="+5.8%"
            trend="up"
            icon={Users}
            description="Currently monitoring"
          />
          <MetricCard
            title="Avg. Processing Time"
            value="4.2min"
            change="-15%"
            trend="up"
            icon={Clock}
            description="Per assessment"
          />
        </div>

        {/* Risk Assessment and Quality Score */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-4">Risk Assessment Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RiskIndicator
                level="low"
                score={15}
                label="Data Security"
                description="All security protocols are functioning properly"
              />
              <RiskIndicator
                level="medium"
                score={35}
                label="Compliance Gaps"
                description="Minor documentation updates required"
              />
              <RiskIndicator
                level="low"
                score={8}
                label="System Performance"
                description="All systems operating within normal parameters"
              />
              <RiskIndicator
                level="medium"
                score={42}
                label="Process Efficiency"
                description="Some workflow optimizations recommended"
              />
            </div>
          </div>

          <div>
            <QualityScoreCard {...qualityData} />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="metric-card">
          <h3 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                icon: CheckCircle,
                text: "Quality assessment completed for Project Alpha",
                time: "2 minutes ago",
                status: "success"
              },
              {
                icon: AlertTriangle,
                text: "Medium risk detected in data processing workflow",
                time: "15 minutes ago",
                status: "warning"
              },
              {
                icon: TrendingUp,
                text: "Compliance score improved by 3.2% this week",
                time: "1 hour ago",
                status: "success"
              },
              {
                icon: BarChart3,
                text: "Monthly risk assessment report generated",
                time: "3 hours ago",
                status: "neutral"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className={`p-2 rounded-lg ${
                  activity.status === 'success' ? 'bg-success/10 text-success' :
                  activity.status === 'warning' ? 'bg-warning/10 text-warning-foreground' :
                  'bg-primary/10 text-primary'
                }`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;