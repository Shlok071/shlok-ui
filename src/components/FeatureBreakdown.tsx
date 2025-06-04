
import { Card } from "@/components/ui/card";
import { Zap, Search, Trash2, Download, RotateCcw, Moon } from "lucide-react";

export const FeatureBreakdown = () => {
  const features = [
    {
      icon: Zap,
      title: "Zero Setup",
      description: "Works out of the box — no onboarding.",
      gradient: "from-[#00C2A8] to-emerald-500"
    },
    {
      icon: Search,
      title: "Smart Search", 
      description: "Filter by keyword, tag, or date.",
      gradient: "from-[#3366FF] to-cyan-500"
    },
    {
      icon: Trash2,
      title: "One-Click Cleanup",
      description: "Delete cluttered bookmarks fast.",
      gradient: "from-[#FF3B30] to-red-500"
    },
    {
      icon: Download,
      title: "Easy Export",
      description: "Save your data in .txt or .mrk.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: RotateCcw,
      title: "Seamless Migration",
      description: "Chrome, Brave, Edge — all supported.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Moon,
      title: "Dark Mode",
      description: "Clean, focus-friendly interface.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div id="features" className="py-20 bg-gradient-to-b from-[#2C2F36]/50 to-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-inter">
            A Feature for Every Need
          </h2>
          <p className="text-xl text-[#F5F5F5] max-w-2xl mx-auto font-inter">
            Smart, privacy-first tools that make your bookmarks behave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-[#2C2F36] border-gray-700/50 p-6 hover:bg-[#2C2F36]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm animate-fade-in rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-6 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-inter">{feature.title}</h3>
                <p className="text-[#F5F5F5] font-inter leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
