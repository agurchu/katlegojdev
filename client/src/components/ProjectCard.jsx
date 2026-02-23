import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Card className="bg-slate-900 border-slate-800 hover:border-slate-600 transition-colors h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <span className="text-xs px-3 py-1 bg-slate-800 rounded-full text-slate-300">
              {project.category}
            </span>
          </div>

          <p className="text-slate-400 mb-4">{project.description}</p>

          <p className="text-green-400 text-sm font-medium mb-4">
            Impact: {project.impact}
          </p>

          <p className="text-slate-500 text-sm mb-6">{project.tech}</p>
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github !== "#" && (
            <Button variant="outline" size="sm" className="rounded-xl" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.live !== "#" && (
            <Button size="sm" className="rounded-xl" asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
