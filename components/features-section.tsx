import { Card, CardContent } from "@/components/ui/card"
import { Database, FileCheck, ShieldAlert, GraduationCap, Cloud } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Combines the power of retrieval systems with generative AI for accurate, source-based responses.",
  },
  {
    icon: FileCheck,
    title: "Document-Based Academic Answers",
    description: "Answers are derived directly from your uploaded lecture materials, not generic web content.",
  },
  {
    icon: ShieldAlert,
    title: "No AI Hallucinations",
    description: "Grounded responses eliminate fabricated information, ensuring reliable academic assistance.",
  },
  {
    icon: GraduationCap,
    title: "Designed for University Students",
    description: "Tailored specifically for academic use cases, exam preparation, and coursework support.",
  },
  {
    icon: Cloud,
    title: "Deployed on Streamlit Cloud",
    description: "Accessible anywhere with a web browser, no installation required for end users.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with cutting-edge technology to provide the best academic assistance experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
