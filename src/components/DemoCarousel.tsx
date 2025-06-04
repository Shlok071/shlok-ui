
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Plus, Search, Tag, Trash2, Download, RotateCcw, Play } from "lucide-react";

export const DemoCarousel = () => {
  const demoCards = [
    {
      icon: Plus,
      title: "Add Bookmark Instantly",
      media: "/assets/add-bookmark.gif",
      caption: "One-click save. No setup.",
      gradient: "from-[#00C2A8] to-emerald-500"
    },
    {
      icon: Search,
      title: "Smart Search",
      media: "/assets/search-bookmark.gif", 
      caption: "Find by tag, keyword, or date.",
      gradient: "from-[#3366FF] to-cyan-500"
    },
    {
      icon: Tag,
      title: "Organize with Tags",
      media: "/assets/tags.gif",
      caption: "Group links, don't bury them.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Trash2,
      title: "One-Click Cleanup", 
      media: "/assets/delete.gif",
      caption: "Delete stale links effortlessly.",
      gradient: "from-[#FF3B30] to-red-500"
    },
    {
      icon: Download,
      title: "Export Easily",
      media: "/assets/export.gif",
      caption: ".txt or .mrk for clean sharing.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: RotateCcw,
      title: "Migrate Seamlessly",
      media: "/assets/import.gif",
      caption: "Chrome/Brave imports preserved.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div id="demo" className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white font-inter">
            See MarkBuddy in Action
          </h2>
          <p className="text-xl text-[#F5F5F5] font-inter">
            Simple. Fast. Calm.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {demoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-[#2C2F36] border-gray-700/50 overflow-hidden h-full hover:bg-[#2C2F36]/80 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      {/* Demo Visual Placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.gradient} p-4 shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <Play className="h-6 w-6 text-white/60" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2 font-inter">
                          {card.title}
                        </h3>
                        <p className="text-[#F5F5F5] text-sm font-inter">
                          {card.caption}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-[#2C2F36] border-gray-600 text-white hover:bg-[#3366FF]" />
            <CarouselNext className="bg-[#2C2F36] border-gray-600 text-white hover:bg-[#3366FF]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
