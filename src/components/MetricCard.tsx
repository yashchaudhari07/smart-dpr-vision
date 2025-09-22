import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  description?: string;
}

const MetricCard = ({ title, value, change, trend, icon: Icon, description }: MetricCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="gradient-primary p-2 rounded-lg">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
        {change && (
          <div className={`text-sm font-medium ${getTrendColor()}`}>
            {change}
          </div>
        )}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export default MetricCard;