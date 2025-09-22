import { CheckCircle, XCircle, AlertTriangle, FileText, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

interface QualityCheckItem {
  category: string;
  checks: {
    name: string;
    status: "pass" | "fail" | "warning";
    description: string;
  }[];
}

const AnalysisPage = () => {
  const navigate = useNavigate();

  const qualityChecks: QualityCheckItem[] = [
    {
      category: "Guideline Compliance",
      checks: [
        {
          name: "Project Objectives Clarity",
          status: "pass",
          description: "Clear and measurable project objectives defined"
        },
        {
          name: "Stakeholder Identification",
          status: "pass",
          description: "All key stakeholders properly identified"
        },
        {
          name: "Risk Assessment Framework",
          status: "warning",
          description: "Risk assessment section needs more detail"
        },
        {
          name: "Budget Justification",
          status: "fail",
          description: "Detailed budget breakdown missing"
        }
      ]
    },
    {
      category: "Document Structure",
      checks: [
        {
          name: "Executive Summary",
          status: "pass",
          description: "Comprehensive executive summary present"
        },
        {
          name: "Technical Specifications",
          status: "pass",
          description: "Detailed technical specifications provided"
        },
        {
          name: "Implementation Timeline",
          status: "warning",
          description: "Timeline could be more detailed"
        },
        {
          name: "Appendices & References",
          status: "pass",
          description: "All required appendices included"
        }
      ]
    },
    {
      category: "Formatting Standards",
      checks: [
        {
          name: "Document Layout",
          status: "pass",
          description: "Professional layout and structure"
        },
        {
          name: "Table & Figure Numbering",
          status: "pass",
          description: "Consistent numbering throughout"
        },
        {
          name: "Citation Format",
          status: "warning",
          description: "Some citations need formatting correction"
        },
        {
          name: "Page Numbering",
          status: "pass",
          description: "Proper page numbering maintained"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "fail":
        return <XCircle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning-foreground" />;
      default:
        return null;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "pass":
        return "bg-success/10 border-success/20";
      case "fail":
        return "bg-destructive/10 border-destructive/20";
      case "warning":
        return "bg-warning/10 border-warning/20";
      default:
        return "bg-muted border-border";
    }
  };

  const overallScore = qualityChecks
    .flatMap(category => category.checks)
    .reduce((acc, check) => {
      if (check.status === "pass") return acc + 1;
      if (check.status === "warning") return acc + 0.5;
      return acc;
    }, 0);

  const totalChecks = qualityChecks.flatMap(category => category.checks).length;
  const scorePercentage = Math.round((overallScore / totalChecks) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">AI Quality Analysis</h1>
            <p className="text-muted-foreground">
              Comprehensive DPR quality assessment results
            </p>
          </div>

          {/* Overall Score */}
          <div className="metric-card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <div className="text-center">
                  <div className="gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{scorePercentage}%</h3>
                  <p className="text-muted-foreground">Overall Quality Score</p>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">
                      {qualityChecks.flatMap(c => c.checks).filter(c => c.status === "pass").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Passed</p>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning-foreground">
                      {qualityChecks.flatMap(c => c.checks).filter(c => c.status === "warning").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Warnings</p>
                  </div>
                  <div className="text-center p-4 bg-destructive/10 rounded-lg">
                    <div className="text-2xl font-bold text-destructive">
                      {qualityChecks.flatMap(c => c.checks).filter(c => c.status === "fail").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Failed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Check Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {qualityChecks.map((category, categoryIndex) => (
              <div key={categoryIndex} className="metric-card">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  {categoryIndex === 0 && <Users className="h-5 w-5 mr-2 text-primary" />}
                  {categoryIndex === 1 && <FileText className="h-5 w-5 mr-2 text-primary" />}
                  {categoryIndex === 2 && <Calendar className="h-5 w-5 mr-2 text-primary" />}
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.checks.map((check, checkIndex) => (
                    <div
                      key={checkIndex}
                      className={`p-3 rounded-lg border ${getStatusStyle(check.status)}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{check.name}</span>
                        {getStatusIcon(check.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">{check.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" onClick={() => navigate("/dashboard")}>
              View Risk Dashboard
            </Button>
            <Button variant="outline" onClick={() => navigate("/recommendations")}>
              Get Recommendations
            </Button>
            <Button variant="outline" onClick={() => navigate("/upload")}>
              Upload New DPR
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalysisPage;