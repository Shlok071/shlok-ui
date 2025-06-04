
import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#2C2F36] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 font-inter">MarkBuddy</h3>
          <p className="text-[#F5F5F5] mb-6 font-inter">
            Zero-friction bookmark management. 100% local.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-inter">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-inter">
              Contact
            </a>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="font-inter">&copy; 2024 MarkBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
