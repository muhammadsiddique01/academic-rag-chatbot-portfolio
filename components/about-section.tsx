import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ShieldCheck, FileSearch } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About the Project</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project implements a Retrieval-Augmented Generation (RAG) based academic chatbot designed to assist
            university students with their studies. Unlike traditional AI assistants that rely solely on pre-trained
            knowledge, our chatbot retrieves information directly from your uploaded lecture materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Document-Based Answers</h3>
              <p className="text-muted-foreground text-sm">
                Responses are grounded in your actual lecture content, ensuring accuracy and relevance to your
                coursework.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No AI Hallucinations</h3>
              <p className="text-muted-foreground text-sm">
                By retrieving from source documents, the system eliminates made-up information and provides trustworthy
                answers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Academic Focus</h3>
              <p className="text-muted-foreground text-sm">
                Purpose-built for university students to enhance learning and improve exam preparation efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
