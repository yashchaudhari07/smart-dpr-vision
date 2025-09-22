import { Download, FileText, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";

const Reports = () => {
  const riskDistributionData = [
    { name: "Low Risk", value: 35, color: "#22c55e" },
    { name: "Medium Risk", value: 45, color: "#f59e0b" },
    { name: "High Risk", value: 20, color: "#ef4444" }
  ];

  const categoryRiskData = [
    { category: "Financial", low: 2, medium: 3, high: 1 },
    { category: "Technical", low: 3, medium: 2, high: 1 },
    { category: "Timeline", low: 1, medium: 2, high: 2 },
    { category: "Compliance", low: 4, medium: 1, high: 0 }
  ];

  const qualityTrendsData = [
    { month: "Jan", score: 78 },
    { month: "Feb", score: 82 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 87 },
    { month: "May", score: 89 },
    { month: "Jun", score: 87 }
  ];

  const handleDownloadReport = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'DPR_Assessment_Report.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Assessment Reports</h1>
              <p className="text-muted-foreground">
                Comprehensive analytics and insights from DPR quality assessments
              </p>
            </div>
            <Button variant="hero" onClick={handleDownloadReport}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF Report
            </Button>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="metric-card text-center">
              <div className="gradient-primary p-3 rounded-lg w-fit mx-auto mb-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1,247</h3>
              <p className="text-muted-foreground">Total Assessments</p>
              <p className="text-sm text-success">+12% this month</p>
            </div>
            
            <div className="metric-card text-center">
              <div className="gradient-accent p-3 rounded-lg w-fit mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">87%</h3>
              <p className="text-muted-foreground">Avg Quality Score</p>
              <p className="text-sm text-success">+3% improvement</p>
            </div>
            
            <div className="metric-card text-center">
              <div className="bg-warning p-3 rounded-lg w-fit mx-auto mb-3">
                <AlertTriangle className="h-6 w-6 text-warning-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">23</h3>
              <p className="text-muted-foreground">High Risk Projects</p>
              <p className="text-sm text-destructive">-8% reduction</p>
            </div>
            
            <div className="metric-card text-center">
              <div className="bg-success p-3 rounded-lg w-fit mx-auto mb-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">94%</h3>
              <p className="text-muted-foreground">Approval Rate</p>
              <p className="text-sm text-success">+2% this quarter</p>
            </div>
          </div>

          {/* Visual Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Risk Distribution */}
            <div className="metric-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Risk Distribution</h3>
              <div className="space-y-4">
                {riskDistributionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-foreground font-medium">{item.value}%</span>
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${item.value}%`, 
                            backgroundColor: item.color 
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Trends */}
            <div className="metric-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quality Score Trends</h3>
              <div className="space-y-3">
                {qualityTrendsData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{item.month}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-foreground">{item.score}%</span>
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-primary" 
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Risk Analysis */}
          <div className="metric-card mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Risk Analysis by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoryRiskData.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-foreground">{category.category}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-success">Low ({category.low})</span>
                      <Progress value={(category.low / 6) * 100} className="w-16 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-warning-foreground">Med ({category.medium})</span>
                      <Progress value={(category.medium / 6) * 100} className="w-16 h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-destructive">High ({category.high})</span>
                      <Progress value={(category.high / 6) * 100} className="w-16 h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="metric-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Assessments</h3>
              <div className="space-y-3">
                {[
                  { project: "Smart City Infrastructure", score: 89, status: "approved", date: "2024-01-15" },
                  { project: "Renewable Energy Hub", score: 76, status: "changes", date: "2024-01-14" },
                  { project: "Digital Healthcare Platform", score: 92, status: "approved", date: "2024-01-13" },
                  { project: "Transportation Network", score: 68, status: "review", date: "2024-01-12" },
                  { project: "Education Technology Suite", score: 85, status: "approved", date: "2024-01-11" }
                ].map((assessment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">{assessment.project}</p>
                      <p className="text-sm text-muted-foreground">{assessment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{assessment.score}%</p>
                      <p className={`text-xs px-2 py-1 rounded ${
                        assessment.status === 'approved' ? 'bg-success/10 text-success' :
                        assessment.status === 'changes' ? 'bg-warning/10 text-warning-foreground' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {assessment.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="metric-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">System Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Processing Speed</span>
                    <span className="text-sm text-muted-foreground">4.2 min avg</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Accuracy Rate</span>
                    <span className="text-sm text-muted-foreground">96.8%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "97%" }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">System Uptime</span>
                    <span className="text-sm text-muted-foreground">99.9%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">User Satisfaction</span>
                    <span className="text-sm text-muted-foreground">4.7/5.0</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "94%" }} />
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

export default Reports;