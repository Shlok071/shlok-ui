
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Image, FileText, Zap, Github, Bell } from "lucide-react";

export const ComingSoon = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborative bookmarking",
      status: "In Development"
    },
    {
      icon: Image,
      title: "Link previews",
      status: "Coming Soon"
    },
    {
      icon: FileText,
      title: "Text snippet saving",
      status: "Planned"
    },
    {
      icon: Zap,
      title: "Shortcuts for power users",
      status: "In Development"
    },
    {
      icon: Github,
      title: "GitHub-friendly exports",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-transparent to-[#2C2F36]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-['Inter']">
            🚀 Coming soon
          </h2>
          <p className="text-xl text-[#F9FAFB] max-w-2xl mx-auto font-['Inter']">
            We're just getting started. Here's what's in the pipeline to make MarkBuddy even better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const statusColors = {
              "In Development": "bg-[#00C2A8]/20 text-[#00C2A8] border-[#00C2A8]/30",
              "Coming Soon": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
              "Planned": "bg-[#3366FF]/20 text-[#3366FF] border-[#3366FF]/30"
            };
            
            return (
              <Card 
                key={index}
                className="bg-[#2C2F36]/30 border-gray-700/30 p-6 hover:bg-[#2C2F36]/50 transition-all duration-300 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-8 w-8 text-[#3366FF]" />
                  <Badge 
                    variant="outline" 
                    className={`text-xs font-['Inter'] ${statusColors[feature.status as keyof typeof statusColors]}`}
                  >
                    {feature.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-['Inter']">{feature.title}</h3>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#3366FF]/10 to-[#00C2A8]/10 border-[#3366FF]/20 p-8 max-w-2xl mx-auto">
            <Bell className="h-12 w-12 text-[#3366FF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 font-['Inter']">
              Don't miss the updates
            </h3>
            <p className="text-[#F9FAFB] mb-6 font-['Inter']">
              Be the first to know when new features drop and get early access to beta releases.
            </p>
            <Button 
              size="lg"
              className="bg-[#3366FF] hover:bg-[#3366FF]/90 text-white px-8 py-3 font-semibold font-['Inter'] transition-all duration-300 transform hover:scale-105"
            >
              Get Notified
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
