
import { Card } from "@/components/ui/card";
import { Shield, Eye, Database } from "lucide-react";

export const PrivacySection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#2C2F36]/50 to-[#2C2F36]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="h-16 w-16 text-[#00C2A8] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-['Inter']">
            Privacy Promise
          </h2>
          <p className="text-xl text-[#F9FAFB] max-w-2xl mx-auto font-['Inter']">
            Your data is yours. Period.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#00C2A8]/10 border-[#00C2A8]/20 p-8 text-center">
            <Eye className="h-12 w-12 text-[#00C2A8] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4 font-['Inter']">No Tracking</h3>
            <p className="text-[#00C2A8] font-['Inter']">
              MarkBuddy doesn't track you. Ever. No analytics, no telemetry, no data collection.
            </p>
          </Card>

          <Card className="bg-[#3366FF]/10 border-[#3366FF]/20 p-8 text-center">
            <Database className="h-12 w-12 text-[#3366FF] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4 font-['Inter']">Local Storage</h3>
            <p className="text-[#3366FF] font-['Inter']">
              Your data never leaves your device. Everything is stored locally on your machine.
            </p>
          </Card>

          <Card className="bg-purple-500/10 border-purple-500/20 p-8 text-center">
            <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4 font-['Inter']">Open Source</h3>
            <p className="text-purple-300 font-['Inter']">
              Full transparency. You can verify exactly what MarkBuddy does with your data.
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-[#3366FF] hover:text-[#3366FF]/80 underline transition-colors duration-300 font-['Inter']"
          >
            Read our full Privacy Policy →
          </a>
        </div>
      </div>
    </div>
  );
};
