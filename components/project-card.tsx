import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          View Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
