interface RiskIndicatorProps {
  level: "low" | "medium" | "high" | "critical";
  score: number;
  label: string;
  description?: string;
}

const RiskIndicator = ({ level, score, label, description }: RiskIndicatorProps) => {
  const getRiskStyles = () => {
    switch (level) {
      case "low":
        return {
          bg: "bg-success/10",
          text: "text-success",
          indicator: "bg-success",
          border: "border-success/20"
        };
      case "medium":
        return {
          bg: "bg-warning/10",
          text: "text-warning-foreground",
          indicator: "bg-warning",
          border: "border-warning/20"
        };
      case "high":
        return {
          bg: "bg-orange-500/10",
          text: "text-orange-700",
          indicator: "bg-orange-500",
          border: "border-orange-500/20"
        };
      case "critical":
        return {
          bg: "bg-destructive/10",
          text: "text-destructive",
          indicator: "bg-destructive",
          border: "border-destructive/20"
        };
      default:
        return {
          bg: "bg-muted",
          text: "text-muted-foreground",
          indicator: "bg-muted-foreground",
          border: "border-muted"
        };
    }
  };

  const styles = getRiskStyles();

  return (
    <div className={`rounded-lg p-4 border ${styles.bg} ${styles.border} transition-smooth`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className={`status-indicator ${styles.indicator}`}></div>
          <span className="font-medium text-foreground">{label}</span>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-foreground">{score}%</div>
          <div className={`text-xs uppercase font-medium ${styles.text}`}>
            {level} risk
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default RiskIndicator;