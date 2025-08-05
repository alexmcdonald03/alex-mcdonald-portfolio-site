import { Button } from "@/components/ui/button";
import headshotImage from "@assets/IMG_7123_1754427373270.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-bg text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Alex McDonald
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
              Strategic Communications & Marketing Professional
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Soon-to-be graduate from Carleton University with hands-on experience supporting 500+ retail accounts at Red Bull. Passionate about crafting communication strategies that connect, engage, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-redbull hover:bg-redbull-dark text-white px-8 py-3 text-center"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('experience')}
                className="border-white/30 hover:bg-white/10 text-white px-8 py-3 text-center"
                data-testid="button-view-experience"
              >
                View Experience
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-full overflow-hidden backdrop-blur-sm ring-4 ring-white/20">
              <img 
                src={headshotImage} 
                alt="Alex McDonald professional headshot"
                className="w-full h-full object-cover"
                data-testid="hero-headshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
