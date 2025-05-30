import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              UI/UX Designer <br />
              <span className="text-primary">Creating Delightful Experiences</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              I design intuitive and engaging user interfaces that solve real problems.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Designer portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                Hello! My name is Ian  I am a passionate UI/UX designer focused on creating beautiful, functional, and user-centered
                digital experiences. With a background in design thinking and a keen eye for aesthetics, I transform
                complex problems into intuitive interfaces.
              </p>
              <p className="text-lg">
                My design process involves deep user research, iterative prototyping, and continuous testing to ensure
                that the final product not only looks great but truly enhances the user experience.
              </p>
              <p className="text-lg">
                When I'm not designing, you can find me exploring new design trends, attending UX workshops, or
                sketching new ideas.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Designer at work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground mb-12">A selection of my recent design work</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Jamii Mobile App"
            description="A complete overhaul of an data management app platform focusing on improving conversion rates and user engagement."
            imageSrc="/placeholder.svg?height=300&width=400"
            tags={["UI Design", "UX Research", "Figma"]}
            link="https://www.figma.com/proto/WHaBVeVImY0WIsKrgOgAsH/JAMII-MOBILE-APP?node-id=202-1924&p=f&t=9vWVAzYWKJPbPiBs-1&scaling=scale-down&content-scaling=fixed&page-id=202%3A1923&starting-point-node-id=202%3A1924"
          />
          <ProjectCard
            title="Academic Writing Website"
            description="A web platform that helps students discover and order for academic help on essays ,thesis and projects."
            imageSrc="/placeholder.svg?height=300&width=400"
            tags={["Web Design", "Wireframing", "Prototyping"]}
            link="https://www.georgiaessays.com/"
          />
          
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-xl text-muted-foreground mb-12">
            The technologies and methodologies I use in my design process
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Figma" width={80} height={80} />
              </div>
              <h3 className="font-medium">Figma</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Adobe XD" width={80} height={80} />
              </div>
              <h3 className="font-medium">Adobe XD</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Sketch" width={80} height={80} />
              </div>
              <h3 className="font-medium">Sketch</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Photoshop" width={80} height={80} />
              </div>
              <h3 className="font-medium">Photoshop</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Illustrator" width={80} height={80} />
              </div>
              <h3 className="font-medium">Illustrator</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Prototyping" width={80} height={80} />
              </div>
              <h3 className="font-medium">Prototyping</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="User Research" width={80} height={80} />
              </div>
              <h3 className="font-medium">User Research</h3>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="HTML/CSS" width={80} height={80} />
              </div>
              <h3 className="font-medium">HTML/CSS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-12">Have a project in mind? Let's work together!</p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" />
                  samoeyian@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">© 2025 Portfolio. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
