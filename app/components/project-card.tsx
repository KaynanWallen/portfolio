import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Link } from "@remix-run/react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string | null;
  githubUrl: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="p-2 group relative rounded-xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" /> */}

      <div className="relative aspect-[16/9] overflow-hidden flex flex-col items-center justify-center">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={cn(
            "object-cover transition-transform duration-700 rounded-xl ",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60" />

        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
          <p className="text-zinc-300 text-sm line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >
            <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Código
            </Link>
          </Button>
          {demoUrl ? (
            <Button
              asChild
              size="sm"
              disabled={true}
              className={`flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0`}
            >
              <Link
                to={demoUrl || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              size="sm"
              disabled={true}
              className={`flex-1 bg-violet-600/50 hover:bg-violet-600/50 cursor-default text-white border-0 `}>
              <Link
                to={demoUrl || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Indisponível
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
