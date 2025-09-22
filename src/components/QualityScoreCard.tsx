interface QualityScoreCardProps {
  title: string;
  score: number;
  maxScore: number;
  categories: {
    name: string;
    score: number;
    maxScore: number;
  }[];
}

const QualityScoreCard = ({ title, score, maxScore, categories }: QualityScoreCardProps) => {
  const percentage = (score / maxScore) * 100;

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return "text-success";
    if (percentage >= 70) return "text-warning-foreground";
    if (percentage >= 50) return "text-orange-700";
    return "text-destructive";
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-success";
    if (percentage >= 70) return "bg-warning";
    if (percentage >= 50) return "bg-orange-500";
    return "bg-destructive";
  };

  return (
    <div className="metric-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="flex items-end space-x-2">
          <span className={`text-3xl font-bold ${getScoreColor(percentage)}`}>
            {score}
          </span>
          <span className="text-lg text-muted-foreground">/ {maxScore}</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-smooth ${getProgressColor(percentage)}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {categories.map((category, index) => {
          const catPercentage = (category.score / category.maxScore) * 100;
          return (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{category.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground">
                  {category.score}/{category.maxScore}
                </span>
                <div className="w-16 bg-muted rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full ${getProgressColor(catPercentage)}`}
                    style={{ width: `${catPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QualityScoreCard;