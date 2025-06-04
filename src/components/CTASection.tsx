
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#2C2F36]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-inter">
            Ready to Clean Up Your Bookmarks?
          </h2>
          <p className="text-xl text-[#F5F5F5] mb-8 font-inter">
            MarkBuddy works instantly — no setup, 100% private.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#00C2A8] hover:bg-[#00C2A8]/90 text-white px-8 py-4 text-lg font-semibold font-inter transition-all duration-300 transform hover:scale-105 shadow-xl rounded-3xl"
            >
              Try the Demo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold font-inter transition-all duration-300 rounded-3xl"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
