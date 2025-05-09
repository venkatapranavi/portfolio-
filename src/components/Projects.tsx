
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Enchanted Forest Website",
      category: "web",
      description: "A nature-inspired e-commerce site with Ghibli aesthetics",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      link: "#"
    },
    {
      id: 2,
      title: "Spirited Dashboard",
      category: "ui",
      description: "Admin dashboard with magical UI components",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      link: "#"
    },
    {
      id: 3,
      title: "Totoro Weather App",
      category: "mobile",
      description: "Weather forecasting app with Ghibli-inspired animations",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      link: "#"
    },
    {
      id: 4,
      title: "Ghibli Art Gallery",
      category: "web",
      description: "Interactive art showcase with parallax scrolling",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      link: "#"
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'ui', name: 'UI/UX' },
    { id: 'mobile', name: 'Mobile Apps' }
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              className={cn(
                "px-4 py-2 rounded-full transition-colors duration-300",
                activeCategory === category.id
                  ? "bg-ghibli-blue text-white"
                  : "bg-ghibli-cream hover:bg-ghibli-blue/20"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a 
                    href={project.link} 
                    className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Project <ArrowRight size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-ghibli-cream text-ghibli-brown rounded-full mb-3">
                  {categories.find(c => c.id === project.category)?.name || project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="ghibli-btn inline-flex items-center gap-2">
            See All Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
