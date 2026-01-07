import { Card, CardContent } from "@/components/ui/card"

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "Streamlit", icon: "⚡" },
  { name: "RAG", icon: "🔍" },
  { name: "LLaMA", icon: "🦙" },
  { name: "Groq API", icon: "⚙️" },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with modern, production-ready technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <CardContent className="flex items-center gap-3 py-4 px-6">
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-semibold text-foreground">{tech.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
