import { useState } from "react";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const UploadDPR = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload();
  };

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const proceedToAnalysis = () => {
    navigate("/analysis");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Upload DPR Document</h1>
            <p className="text-muted-foreground">
              Upload your Detailed Project Report for AI-powered quality assessment and risk analysis
            </p>
          </div>

          <div className="metric-card">
            {!uploadComplete ? (
              <>
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="gradient-primary p-4 rounded-2xl">
                      <Upload className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Drag & Drop Your DPR
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        or click to browse files
                      </p>
                      <Button onClick={handleFileUpload} disabled={isUploading}>
                        Browse Files
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: PDF, DOC, DOCX (Max 20MB)
                    </p>
                  </div>
                </div>

                {isUploading && (
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        Uploading DPR...
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {uploadProgress}%
                      </span>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-success/10 p-4 rounded-2xl">
                    <CheckCircle className="h-12 w-12 text-success" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Upload Successful!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your DPR has been uploaded and is ready for analysis
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" onClick={proceedToAnalysis}>
                    Start AI Analysis
                  </Button>
                  <Button variant="outline" onClick={() => setUploadComplete(false)}>
                    Upload Another File
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Upload Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="metric-card text-center">
              <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Document Quality</h3>
              <p className="text-sm text-muted-foreground">
                Ensure your DPR is complete with all required sections
              </p>
            </div>
            <div className="metric-card text-center">
              <CheckCircle className="h-8 w-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Format Check</h3>
              <p className="text-sm text-muted-foreground">
                AI will verify document structure and formatting
              </p>
            </div>
            <div className="metric-card text-center">
              <AlertCircle className="h-8 w-8 text-warning-foreground mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Risk Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive risk prediction across multiple dimensions
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadDPR;