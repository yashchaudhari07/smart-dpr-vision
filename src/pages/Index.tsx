import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainDashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MainDashboard />
      </main>
    </div>
  );
};

export default Index;
