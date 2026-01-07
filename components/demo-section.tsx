import { Card, CardContent } from "@/components/ui/card"

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See It in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how the Academic RAG Chatbot retrieves and generates accurate
            answers from lecture PDFs and PowerPoint slides using RAG.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-border/50 shadow-lg">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <video
                src="/demo.mp4"
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
          This demo showcases document retrieval, contextual understanding, and
          accurate academic answer generation using Retrieval-Augmented
          Generation (RAG).
        </p>
      </div>
    </section>
  )
}
