import { Card, CardContent } from "@/components/ui/card";
import headshotImage from "@assets/IMG_7123_1754427373270.jpeg";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Retail Accounts" },
    { number: "100+", label: "Store Activations" },
    { number: "2", label: "Languages" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-redbull mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="prose prose-lg text-gray-600 mb-8 space-y-4">
              <p>
                Hi, I'm Alex McDonald- a strategic communicator and soon-to-be graduate from Carleton University with a BA in Communication & Media Studies (graduating December 2025).
              </p>
              <p>
                I recently completed an academic exchange in Vienna, where I deepened my global perspective on media, marketing, and storytelling. Before that, I worked with Red Bull, supporting product sell-in and marketing activations across 500+ retail accounts in Ontario. That experience sharpened my skills in brand execution, strategic storytelling, and relationship-building, and taught me how to bring a brand to life at scale.
              </p>
              <p>
                I'm passionate about crafting communication strategies that connect, engage, and deliver measurable results, with authenticity and sustainability at the core. Now, I'm excited to bring my blend of real-world experience and fresh perspective to a full-time role in strategic communications, marketing, or sales, ideally within a fast-moving, mission-driven team.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={headshotImage} 
                alt="Alex McDonald during his academic exchange with Mediterranean coastal cityscape background"
                className="w-full h-full object-cover"
                data-testid="about-headshot"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-hover" data-testid={`stat-card-${index}`}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[hsl(0,77%,47%)] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
