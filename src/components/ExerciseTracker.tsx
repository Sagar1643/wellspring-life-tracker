
import { Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const ExerciseTracker = () => {
  return (
    <Card className="p-6 bg-white/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Exercise Log</h2>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Exercise
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-accent/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Morning Run</h3>
              <p className="text-sm text-muted-foreground">30 minutes • 3.2 miles</p>
            </div>
            <p className="text-sm font-medium">320 cal</p>
          </div>
        </div>
        
        <div className="p-4 rounded-lg bg-accent/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Weight Training</h3>
              <p className="text-sm text-muted-foreground">15 minutes</p>
            </div>
            <p className="text-sm font-medium">150 cal</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
