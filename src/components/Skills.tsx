
import React from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "UI/UX Design", level: 80, category: "design" },
    { name: "CSS/Tailwind", level: 95, category: "frontend" },
    { name: "Figma", level: 85, category: "design" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Animation", level: 80, category: "design" },
    { name: "Responsive Design", level: 90, category: "frontend" }
  ];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-t from-background to-ghibli-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I've cultivated a diverse set of skills that allow me to create enchanting digital experiences. From front-end development to UI/UX design, I bring both technical expertise and artistic sensibility to every project.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-foreground/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-ghibli-cream rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full",
                        skill.category === "frontend" ? "bg-ghibli-blue" :
                        skill.category === "design" ? "bg-ghibli-peach" :
                        "bg-ghibli-green"
                      )}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 mb-4 rounded-full bg-ghibli-blue/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ghibli-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-medium text-lg mb-2">Frontend Magic</h3>
                  <p className="text-foreground/70 text-sm">Building responsive and enchanting user interfaces</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 mb-4 rounded-full bg-ghibli-peach/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ghibli-peach" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-medium text-lg mb-2">Visual Design</h3>
                  <p className="text-foreground/70 text-sm">Creating stunning visuals and illustrations</p>
                </div>
              </div>
              
              <div className="col-span-1 space-y-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 mb-4 rounded-full bg-ghibli-green/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ghibli-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-medium text-lg mb-2">Mobile Design</h3>
                  <p className="text-foreground/70 text-sm">Crafting delightful mobile experiences</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 mb-4 rounded-full bg-ghibli-brown/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ghibli-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-medium text-lg mb-2">Documentation</h3>
                  <p className="text-foreground/70 text-sm">Writing clear and concise documentation</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-ghibli-blue/10 rounded-full blur-lg"></div>
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-ghibli-peach/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
