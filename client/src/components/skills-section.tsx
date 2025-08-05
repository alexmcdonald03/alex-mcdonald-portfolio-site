import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Languages, 
  Handshake, 
  Mic, 
  Cloud, 
  Globe, 
  TrendingUp, 
  Search 
} from "lucide-react";

export default function SkillsSection() {
  const coreSkills = [
    { icon: MessageCircle, name: "Strategic Communication & Messaging" },
    { icon: Languages, name: "Bilingual Communication (English/French)" },
    { icon: Handshake, name: "Stakeholder Engagement & Relationship Building" },
    { icon: Mic, name: "Public Speaking & Professional Writing" },
    { icon: Cloud, name: "Salesforce CRM (Certified)" },
    { icon: Globe, name: "Cross-Cultural Collaboration" },
    { icon: TrendingUp, name: "Media and Policy Analysis" },
    { icon: Search, name: "Qualitative & Quantitative Research" }
  ];

  const certifications = [
    {
      title: "Content Marketing Foundations",
      provider: "LinkedIn Learning",
      date: "June 2025",
      skills: ["Content Marketing"]
    },
    {
      title: "Digital Marketing Professional Certificate",
      provider: "Content Marketing Institute", 
      date: "June 2025",
      skills: ["SEO", "Digital Marketing", "Email Marketing"]
    },
    {
      title: "Salesforce Essential Training",
      provider: "LinkedIn Learning",
      date: "May 2025", 
      skills: ["Salesforce.com", "CRM"]
    },
    {
      title: "Strategic Thinking",
      provider: "LinkedIn Learning",
      date: "May 2025",
      skills: ["Strategic Communications", "Strategic Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Certifications</h2>
          <div className="w-24 h-1 bg-redbull mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-white px-4 py-3 rounded-lg shadow-sm border-l-4 border-[hsl(0,77%,47%)] flex items-center"
                    data-testid={`skill-${index}`}
                  >
                    <IconComponent className="h-5 w-5 text-[hsl(0,77%,47%)] mr-3 flex-shrink-0" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover" data-testid={`certification-${index}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{cert.provider}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-[hsl(0,77%,47%)]/10 text-[hsl(0,77%,47%)] hover:bg-[hsl(0,77%,47%)]/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
