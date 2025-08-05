import { Card, CardContent } from "@/components/ui/card";
import { Check, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const mainExperience = {
    title: "Sales Trainee",
    company: "Red Bull Distribution",
    location: "Ottawa, ON",
    period: "Apr 2024 – Aug 2024",
    responsibilities: [
      "Supported product sell-in and route coverage across 500+ retail accounts in Eastern Ontario, strengthening store relationships and securing premium shelf placement.",
      "Executed national/global marketing initiatives (Wings for Life, Red Bull Soapbox Race, Red Bull Racing) via retail activations in 100+ stores.",
      "Coordinated with regional teams to tailor messaging, ensuring brand consistency and enhanced retail engagement."
    ]
  };

  const otherExperiences = [
    {
      title: "Sales Associate",
      company: "Ritchie's Feed & Seed",
      location: "Richmond, ON",
      period: "Apr 2022 – Aug 2023",
      responsibilities: [
        "Delivered tailored seasonal product recommendations",
        "Managed high-volume sales with personalized service", 
        "Supported inventory fulfillment with high accuracy"
      ]
    },
    {
      title: "Hardware Associate",
      company: "Lowe's",
      location: "Kanata, ON",
      period: "Jun 2021 – Sept 2021",
      responsibilities: [
        "Assisted customers with product selection",
        "Maintained organized displays",
        "Provided phone support for enhanced experience"
      ]
    },
    {
      title: "E-Commerce Sales Associate",
      company: "Walmart Supercentre",
      location: "Kanata, ON",
      period: "Jun 2019 – Sept 2019",
      responsibilities: [
        "Processed online orders and managed logistics",
        "Handled returns and customer service inquiries",
        "Improved fulfillment accuracy"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-redbull mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {/* Featured Red Bull Experience */}
          <Card className="card-hover" data-testid="main-experience-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{mainExperience.title}</h3>
                  <h4 className="text-lg text-[hsl(0,77%,47%)] font-medium mb-2">{mainExperience.company}</h4>
                </div>
                <div className="text-gray-600 font-medium flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {mainExperience.location} | {mainExperience.period}
                </div>
              </div>
              <ul className="text-gray-600 space-y-2">
                {mainExperience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[hsl(0,77%,47%)] mt-0.5 mr-3 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Other Experiences */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherExperiences.map((experience, index) => (
              <Card key={index} className="card-hover" data-testid={`experience-card-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{experience.title}</h3>
                  <h4 className="text-md text-[hsl(0,77%,47%)] font-medium mb-2">{experience.company}</h4>
                  <div className="text-sm text-gray-600 mb-3">{experience.location} | {experience.period}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>• {responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
