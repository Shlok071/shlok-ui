
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Play } from "lucide-react";

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-[#1A1A1A]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3366FF]/10 via-[#00C2A8]/5 to-[#3366FF]/10 animate-pulse" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-8 bg-[#3366FF]/10 border-[#3366FF]/20 text-[#3366FF] hover:bg-[#3366FF]/20 transition-all duration-300 font-inter">
            🧪 Under Chrome Web Store Review - Live Demo Available
          </Badge>

          {/* Main Headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold font-inter bg-gradient-to-r from-white via-[#3366FF] to-[#00C2A8] bg-clip-text text-transparent animate-fade-in">
              Tame Your Link Chaos in One Click
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-[#F5F5F5] mb-12 font-inter animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
            A zero-friction, privacy-first bookmark manager that works instantly — no setup, no clutter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={scrollToDemo}
              className="bg-[#00C2A8] hover:bg-[#00C2A8]/90 text-white px-8 py-6 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-3xl"
            >
              Try the Demo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToDemo}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 rounded-3xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch It in Action
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-[#3366FF]/20 to-[#00C2A8]/20 p-1 rounded-2xl backdrop-blur-sm">
              <div className="bg-[#2C2F36]/80 rounded-xl p-8 border border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-[#FF3B30] rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#00C2A8] rounded-full"></div>
                  </div>
                  <Badge variant="secondary" className="bg-[#3366FF]/20 text-[#3366FF] font-jetbrains">
                    Ctrl + Q
                  </Badge>
                </div>
                <div className="text-left space-y-3">
                  <div className="text-gray-400 text-sm font-inter">MarkBuddy Dashboard</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-[#3366FF] to-transparent rounded w-3/4"></div>
                    <div className="h-2 bg-gradient-to-r from-[#00C2A8] to-transparent rounded w-1/2"></div>
                    <div className="h-2 bg-gradient-to-r from-[#3366FF] to-transparent rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <ArrowDown className="mx-auto h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
