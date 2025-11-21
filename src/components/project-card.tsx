import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  onClick?: () => void; // Add onClick prop
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  onClick, // Add onClick to destructuring
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 animate-in",
        onClick && "cursor-pointer" // Add cursor pointer when onClick exists
      )}
      onClick={onClick} // Add onClick handler to Card
    >
      <Link
        href={onClick ? "#" : href} // Use # when onClick exists, otherwise use href
        className={cn(
          "block cursor-pointer",
          onClick && "pointer-events-none" // Disable link when onClick is used
        )}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault(); // Prevent navigation when onClick is used
          }
        }}
      >
        {image && (
          <CardHeader className="px-2">
            <div className="flex space-x-1 w-full">
              <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="h-40 w-full overflow-hidden object-cover object-top"
              />
            </div>
          </CardHeader>
        )}
        <CardContent className="flex flex-col p-2">
          <div className="space-y-2">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardContent>
        <CardFooter className="p-2">
          <div className="flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
