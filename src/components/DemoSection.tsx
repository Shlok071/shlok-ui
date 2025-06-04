
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, FolderPlus, Download, Trash2, Share2, Filter, ArrowDownToLine, RotateCcw } from "lucide-react";

export const DemoSection = () => {
  const demoVideos = [
    { icon: Plus, title: "Adding a Bookmark", description: "See how easy it is to save bookmarks" },
    { icon: FolderPlus, title: "Creating a New Category", description: "Organize with custom categories" },
    { icon: Download, title: "Exporting Bookmarks", description: "Export in multiple formats" },
    { icon: Trash2, title: "Deleting Bookmarks", description: "Clean up unwanted links" },
    { icon: Share2, title: "Sharing Curated Data", description: "Share collections with others" },
    { icon: Filter, title: "Filtering and Downloading", description: "Advanced filtering options" },
    { icon: ArrowDownToLine, title: "Filtering and Deleting", description: "Bulk management tools" },
    { icon: RotateCcw, title: "Full Migration Process", description: "Complete data migration" }
  ];

  return (
    <div id="demo" className="py-20 bg-gradient-to-b from-transparent to-[#2C2F36]/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white font-inter">
            See MarkBuddy in Action
          </h2>
          <p className="text-xl text-[#F9FAFB] font-inter">
            Watch how MarkBuddy transforms your bookmark management experience.
          </p>
        </div>

        {/* Demo Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {demoVideos.map((video, index) => {
            const Icon = video.icon;
            return (
              <Card 
                key={index}
                className="bg-[#2C2F36]/50 border-gray-700/50 p-6 hover:bg-[#2C2F36]/70 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3366FF] to-[#00C2A8] rounded-lg p-3 mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 font-inter">{video.title}</h3>
                  <p className="text-xs text-[#F9FAFB] font-inter">{video.description}</p>
                  <div className="mt-3">
                    <Play className="h-4 w-4 text-[#00C2A8] mx-auto" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Demo Window */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-[#2C2F36] to-gray-800 border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#FF3B30] rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-[#00C2A8] rounded-full"></div>
              </div>
              <Badge variant="secondary" className="bg-[#3366FF]/20 text-[#3366FF] font-inter">
                MarkBuddy Demo
              </Badge>
            </div>
            
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#2C2F36]/50 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#3366FF] rounded"></div>
                    <span className="text-white font-inter">Project Resources</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-inter">15 links</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#2C2F36]/50 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#00C2A8] rounded"></div>
                    <span className="text-white font-inter">Client Materials</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-inter">8 links</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#2C2F36]/50 rounded-lg border border-gray-600/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-white font-inter">Training Library</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-inter">22 links</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Demo Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-[#3366FF] hover:bg-[#3366FF]/90 text-white px-8 py-3 font-semibold font-inter transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Full Demo
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#00C2A8]/30 text-[#00C2A8] hover:bg-[#00C2A8]/10 px-8 py-3 font-semibold font-inter transition-all duration-300"
          >
            Get MarkBuddy for Chrome
          </Button>
        </div>
      </div>
    </div>
  );
};
