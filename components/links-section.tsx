import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Instagram, Facebook } from "lucide-react"

const links = [
  {
    name: "Live Chatbot",
    href: "https://academic-rag-chatbot-wbtrq9pwrqdwdilwvheywf.streamlit.app/",
    icon: ExternalLink,
    primary: true,
  },
  {
    name: "GitHub Repository",
    href: "https://github.com/muhammadsiddique01/academic-rag-chatbot-portfolio",
    icon: Github,
    primary: false,
  },
  {
    name: "Instagram Page",
    href: "https://www.instagram.com/academicragchatbot/",
    icon: Instagram,
    primary: false,
  },
  {
    name: "Facebook Page",
    href: "https://www.facebook.com/AcademicRAGChatbot",
    icon: Facebook,
    primary: false,
  },
]

export function LinksSection() {
  return (
    <section id="links" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Try the live chatbot, explore the code, or follow us on social media
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {links.map((link, index) => (
            <Button
              key={index}
              variant={link.primary ? "default" : "outline"}
              size="lg"
              className="gap-2 px-6"
              asChild
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </a>
            </Button>
          ))}
        </div>

      </div>
    </section>
  )
}
