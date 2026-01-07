import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See It in Action</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how the Academic RAG Chatbot retrieves and generates accurate answers from lecture materials
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-border/50 shadow-lg">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted flex items-center justify-center">
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-foreground/5" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-muted-foreground font-medium">Click to play demo video</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
          This demonstration shows the chatbot processing a question about lecture content and generating an accurate,
          sourced response in real-time.
        </p>
      </div>
    </section>
  )
}
