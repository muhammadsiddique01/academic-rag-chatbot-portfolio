import { FileText, Brain, MessageSquare } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Retrieve",
    description:
      "The system retrieves relevant content from your uploaded PDFs and PowerPoint presentations using semantic search.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Process",
    description:
      "Retrieved context is sent to LLaMA via the Groq API for fast, intelligent processing and understanding.",
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Generate",
    description: "The AI generates accurate, contextual academic answers grounded in your actual lecture materials.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple three-step process to get accurate answers from your lecture materials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
