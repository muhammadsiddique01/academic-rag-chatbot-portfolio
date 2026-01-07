import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            Powered by RAG Technology
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Academic RAG Chatbot
          </h1>

          <p className="text-xl md:text-2xl font-medium text-primary mb-4">Your Smart Study Partner</p>

          <p className="text-lg text-muted-foreground max-w-2xl mb-10 text-pretty">
            An AI-powered academic assistant that retrieves answers directly from lecture PDFs and PowerPoint slides
            using Retrieval-Augmented Generation (RAG).
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 px-8 py-6 text-base font-medium">
              View Live Chatbot
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-base font-medium bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
