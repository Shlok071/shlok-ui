
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Zap } from "lucide-react";

export const WhyChooseSection = () => {
  const benefits = [
    {
      icon: FileText,
      title: "End Link Dumps",
      description: "Share clean, organized bookmark files instead of messy lists",
      gradient: "from-[#3366FF] to-cyan-500"
    },
    {
      icon: Download,
      title: "Easy Migration",
      description: "Transfer your entire bookmark library between devices or browsers effortlessly",
      gradient: "from-[#00C2A8] to-emerald-500"
    },
    {
      icon: Zap,
      title: "Productivity Boost",
      description: "Spend less time searching and more time doing with efficient bookmark management",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-transparent to-[#2C2F36]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-inter">
            Why Choose MarkBuddy?
          </h2>
          <p className="text-xl text-[#F9FAFB] max-w-2xl mx-auto font-inter">
            Transform your bookmark management experience with these key benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="bg-[#2C2F36]/50 border-gray-700/50 p-8 hover:bg-[#2C2F36]/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} p-4 mx-auto mb-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-inter">{benefit.title}</h3>
                <p className="text-[#F9FAFB] font-inter">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#3366FF] hover:bg-[#3366FF]/90 text-white px-8 py-4 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get MarkBuddy for Chrome
          </Button>
        </div>
      </div>
    </div>
  );
};
