import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Presentation, Edit, Quote } from "lucide-react";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      icon: Presentation,
      title: "Presentation Decks",
      description: "Slide decks from class projects and professional assignments that showcase strategic thinking and communication planning.",
      featured: {
        title: "Housing Crisis in Ontario – Public Engagement Strategy",
        subtitle: "COMS 4406 • Group Presentation",
        description: "A strategic communication plan to address Canada's housing crisis through public engagement. Includes audience segmentation, engagement tactics, and budget planning."
      }
    },
    {
      icon: Edit,
      title: "Writing Samples", 
      description: "Blog posts, press releases, and strategy documents that highlight storytelling, analysis, and persuasive messaging skills.",
      samples: [
        {
          title: "Crisis Communication Plan: Fyre Festival",
          subtitle: "Group Project • Crisis Communication Strategy"
        },
        {
          title: "Deconstructing the Silicon Valley Bank Collapse",
          subtitle: "COMS 4312 • Academic Analysis"
        },
        {
          title: "Solving Canada's Housing Crisis",
          subtitle: "COMS 4406 • Policy Strategy Document"
        }
      ]
    },
    {
      icon: Quote,
      title: "Testimonials",
      description: "Quotes from supervisors and colleagues highlighting strengths in communication and sales.",
      testimonial: {
        quote: "It was a pleasure working with Alex. He was extremely reliable and consistently delivered on expectations. I appreciated his professionalism and work ethic, and I'm confident he has a bright future ahead of him. Keep chasing your dreams!",
        author: "Adam Merchant",
        position: "District Sales Manager, Red Bull"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-redbull mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Case studies and work samples showcasing strategic communication and marketing campaigns. Portfolio content coming soon.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="card-hover" data-testid={`portfolio-item-${index}`}>
                <CardContent className="p-6">
                  <div className="bg-[hsl(0,77%,47%)]/10 rounded-lg p-4 mb-4 text-center">
                    <IconComponent className="h-8 w-8 text-[hsl(0,77%,47%)] mb-2 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  {/* Featured content for each type */}
                  {item.featured && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.featured.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{item.featured.subtitle}</p>
                      <p className="text-sm text-gray-600">{item.featured.description}</p>
                    </div>
                  )}
                  
                  {item.samples && (
                    <div className="space-y-3 mb-4">
                      {item.samples.map((sample, sampleIndex) => (
                        <div key={sampleIndex} className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-medium text-gray-900 text-sm mb-1">{sample.title}</h4>
                          <p className="text-xs text-gray-600">{sample.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {item.testimonial && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <blockquote className="text-sm text-gray-700 italic mb-3">
                        "{item.testimonial.quote}"
                      </blockquote>
                      <div className="border-t pt-3">
                        <p className="font-semibold text-gray-900 text-sm">{item.testimonial.author}</p>
                        <p className="text-xs text-gray-600">{item.testimonial.position}</p>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full bg-[hsl(0,77%,47%)]/10 text-[hsl(0,77%,47%)] hover:bg-[hsl(0,77%,47%)]/20 border-0"
                    data-testid={`portfolio-available-${index}`}
                  >
                    Available
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
