
import { Card } from "@/components/ui/card";
import { MessageSquare, Bookmark, Globe, Search, FolderX } from "lucide-react";

export const SoundFamiliar = () => {
  const problems = [
    {
      icon: MessageSquare,
      text: "I DM myself links because bookmarks are a mess.",
      color: "text-[#FF3B30]"
    },
    {
      icon: Globe,
      text: "I open one tab and end up with 30.",
      color: "text-yellow-400"
    },
    {
      icon: FolderX,
      text: "My bookmarks are buried in folders I never revisit.",
      color: "text-orange-400"
    },
    {
      icon: Search,
      text: "I can't find that one link I just saved.",
      color: "text-purple-400"
    },
    {
      icon: Bookmark,
      text: "Too many tools. None feel simple.",
      color: "text-[#00C2A8]"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#2C2F36]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-inter">
            Sound Familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="bg-[#2C2F36]/50 border-gray-700/50 p-6 hover:bg-[#2C2F36]/70 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <Icon className={`h-8 w-8 ${problem.color} mt-1 flex-shrink-0`} />
                  <p className="text-[#F5F5F5] font-inter text-lg leading-relaxed">
                    "{problem.text}"
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
