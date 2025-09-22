import { useState } from "react";
import { CheckCircle, XCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const ApprovalFeedback = () => {
  const [selectedAction, setSelectedAction] = useState<"approve" | "changes" | "reject" | null>(null);
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!selectedAction) {
      toast({
        title: "Action Required",
        description: "Please select an action before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    
    toast({
      title: "Feedback Submitted",
      description: `Your ${selectedAction} decision has been recorded successfully.`,
    });

    // Navigate based on action
    if (selectedAction === "approve") {
      navigate("/reports");
    } else {
      navigate("/");
    }
  };

  const getActionStyle = (action: string) => {
    const baseStyle = "p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-card";
    
    if (selectedAction === action) {
      switch (action) {
        case "approve":
          return `${baseStyle} border-success bg-success/10`;
        case "changes":
          return `${baseStyle} border-warning bg-warning/10`;
        case "reject":
          return `${baseStyle} border-destructive bg-destructive/10`;
      }
    }
    
    return `${baseStyle} border-border hover:border-primary/50`;
  };

  const projectSummary = {
    title: "Smart City Infrastructure Development",
    score: 87,
    highRisks: 2,
    mediumRisks: 4,
    recommendations: 6
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Project Approval & Feedback</h1>
            <p className="text-muted-foreground">
              Review the AI assessment and provide your evaluation decision
            </p>
          </div>

          {/* Project Summary */}
          <div className="metric-card mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Assessment Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">{projectSummary.score}%</div>
                <p className="text-sm text-muted-foreground">Quality Score</p>
              </div>
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <div className="text-2xl font-bold text-destructive">{projectSummary.highRisks}</div>
                <p className="text-sm text-muted-foreground">High Risks</p>
              </div>
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <div className="text-2xl font-bold text-warning-foreground">{projectSummary.mediumRisks}</div>
                <p className="text-sm text-muted-foreground">Medium Risks</p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-lg">
                <div className="text-2xl font-bold text-accent-foreground">{projectSummary.recommendations}</div>
                <p className="text-sm text-muted-foreground">Recommendations</p>
              </div>
            </div>
          </div>

          {/* Decision Actions */}
          <div className="metric-card mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Evaluation Decision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div
                className={getActionStyle("approve")}
                onClick={() => setSelectedAction("approve")}
              >
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-success mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Approve</h3>
                  <p className="text-sm text-muted-foreground">
                    Project meets all requirements and can proceed
                  </p>
                </div>
              </div>

              <div
                className={getActionStyle("changes")}
                onClick={() => setSelectedAction("changes")}
              >
                <div className="text-center">
                  <Clock className="h-8 w-8 text-warning-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Request Changes</h3>
                  <p className="text-sm text-muted-foreground">
                    Project needs modifications before approval
                  </p>
                </div>
              </div>

              <div
                className={getActionStyle("reject")}
                onClick={() => setSelectedAction("reject")}
              >
                <div className="text-center">
                  <XCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Reject</h3>
                  <p className="text-sm text-muted-foreground">
                    Project does not meet standards for approval
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="metric-card mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Evaluator Comments</h2>
            <Textarea
              placeholder="Provide detailed feedback, specific concerns, or recommendations for improvement..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="min-h-[120px] mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Your comments will be shared with the project team and included in the final report.
            </p>
          </div>

          {/* Quick Feedback Options */}
          {selectedAction && (
            <div className="metric-card mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {selectedAction === "approve" && "Approval Notes"}
                {selectedAction === "changes" && "Required Changes"}
                {selectedAction === "reject" && "Rejection Reasons"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedAction === "approve" && [
                  "Project demonstrates strong technical approach",
                  "Risk mitigation strategies are adequate",
                  "Budget allocation is reasonable",
                  "Timeline is realistic and achievable"
                ].map((note, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-foreground">{note}</span>
                  </label>
                ))}

                {selectedAction === "changes" && [
                  "Budget justification needs more detail",
                  "Risk assessment requires enhancement",
                  "Timeline needs adjustment",
                  "Technical specifications unclear"
                ].map((change, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-foreground">{change}</span>
                  </label>
                ))}

                {selectedAction === "reject" && [
                  "Insufficient budget justification",
                  "High-risk factors not addressed",
                  "Technical approach not viable",
                  "Does not meet compliance standards"
                ].map((reason, index) => (
                  <label key={index} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-foreground">{reason}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              onClick={handleSubmit}
              disabled={!selectedAction || isSubmitting}
              className="px-8"
            >
              {isSubmitting ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Evaluation
                </>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApprovalFeedback;