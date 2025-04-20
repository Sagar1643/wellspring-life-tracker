
import { DashboardStats } from "@/components/DashboardStats";
import { MealTracker } from "@/components/MealTracker";
import { ExerciseTracker } from "@/components/ExerciseTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-purple-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Wellspring</h1>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MealTracker />
          <ExerciseTracker />
        </div>
      </div>
    </div>
  );
};

export default Index;
