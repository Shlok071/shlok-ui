
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Bookmark, Globe } from "lucide-react";

export const ProblemSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-20 bg-gradient-to-b from-transparent to-[#2C2F36]/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white font-['Inter']">
            Sound familiar?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-[#FF3B30]/10 border-[#FF3B30]/20 p-6 hover:bg-[#FF3B30]/20 transition-all duration-300 transform hover:scale-105">
              <MessageSquare className="h-12 w-12 text-[#FF3B30] mx-auto mb-4" />
              <p className="text-[#FF3B30] font-semibold font-['Inter']">You DM yourself links</p>
            </Card>
            
            <Card className="bg-yellow-500/10 border-yellow-500/20 p-6 hover:bg-yellow-500/20 transition-all duration-300 transform hover:scale-105">
              <Bookmark className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-yellow-300 font-semibold font-['Inter']">Your bookmarks are buried</p>
            </Card>
            
            <Card className="bg-orange-500/10 border-orange-500/20 p-6 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-105">
              <Globe className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <p className="text-orange-300 font-semibold font-['Inter']">You have 15 tabs open right now</p>
            </Card>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-[#F9FAFB] font-['Inter']">
              So did I.
            </p>
            <p className="text-2xl font-bold text-white font-['Inter']">
              That's why I built <span className="text-[#3366FF]">MarkBuddy</span>.
            </p>
          </div>

          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToFeatures}
            className="mt-8 border-[#3366FF]/30 text-[#3366FF] hover:bg-[#3366FF]/10 px-8 py-3 font-semibold font-['Inter'] transition-all duration-300"
          >
            See What It Does ↓
          </Button>
        </div>
      </div>
    </div>
  );
};
