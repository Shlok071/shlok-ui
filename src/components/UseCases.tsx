
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, BookOpen, UserCheck } from "lucide-react";

export const UseCases = () => {
  const useCases = [
    {
      icon: Briefcase,
      title: "Project Manager",
      description: "Organize bookmarks by client and project for efficient access",
      gradient: "from-[#3366FF] to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Member",
      description: "Collaborate with shared bookmark lists to maintain team alignment",
      gradient: "from-[#00C2A8] to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "Knowledge Manager",
      description: "Create comprehensive training libraries for onboarding and reference",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: UserCheck,
      title: "Client Facing",
      description: "Share project deliverables and resources professionally",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#2C2F36]/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-inter">
            Built for Professionals
          </h2>
          <p className="text-xl text-[#F9FAFB] max-w-2xl mx-auto font-inter">
            MarkBuddy isn't just for personal use. Select a role to see how it streamlines professional workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="bg-[#2C2F36]/50 border-gray-700/50 p-8 hover:bg-[#2C2F36]/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${useCase.gradient} p-4 mx-auto mb-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-inter">{useCase.title}</h3>
                <p className="text-[#F9FAFB] text-sm font-inter">{useCase.description}</p>
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
