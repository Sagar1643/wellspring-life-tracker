
import { Activity, ChartBar, Scale } from "lucide-react";
import { Card } from "./ui/card";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-4 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Scale className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Current Weight</p>
            <h3 className="text-2xl font-semibold">150 lbs</h3>
          </div>
        </div>
      </Card>
      
      <Card className="p-4 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <ChartBar className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Calories Today</p>
            <h3 className="text-2xl font-semibold">1,200 / 2,000</h3>
          </div>
        </div>
      </Card>
      
      <Card className="p-4 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Active Minutes</p>
            <h3 className="text-2xl font-semibold">45 min</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};
