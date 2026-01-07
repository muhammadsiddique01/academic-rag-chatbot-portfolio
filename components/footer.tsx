import { BrainCircuit } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">Academic RAG Chatbot</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <p className="mb-1">
              Developed by <span className="font-medium text-foreground">Muhammad Siddique</span> &{" "}
              <span className="font-medium text-foreground">Muhammad Waseeq Khan</span>
            </p>
            <p>Academic RAG Chatbot Portfolio</p>
          </div>

          <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
