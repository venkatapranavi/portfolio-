
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-ghibli-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                alt="Forest with sunbeams" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[-10%] right-[-5%] w-24 h-24 bg-ghibli-blue/20 rounded-full blur-md"></div>
            <div className="absolute bottom-[-5%] left-[-10%] w-32 h-32 bg-ghibli-green/20 rounded-full blur-md"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate web developer and designer inspired by the magical worlds of Studio Ghibli. I blend whimsical aesthetics with modern web technologies to create engaging digital experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              With expertise in React, TypeScript, and UI/UX design, I craft websites that are not only visually captivating but also intuitive and accessible. I believe that like Miyazaki's films, good design tells a story and creates emotional connections.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you might find me sketching landscapes, exploring nature trails, or rewatching my favorite Ghibli films for the hundredth time.
            </p>
            
            <div className="pt-4">
              <h3 className="font-serif text-xl font-medium mb-4">My Journey</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 relative">
                    <div className="h-full w-0.5 bg-ghibli-blue/30 absolute left-2.5"></div>
                    <div className="w-5 h-5 rounded-full bg-ghibli-blue"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Front-End Developer</h4>
                    <p className="text-sm text-muted-foreground">2020 - Present</p>
                    <p className="mt-1">Creating magical user interfaces with React and modern web technologies</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 relative">
                    <div className="h-full w-0.5 bg-ghibli-blue/30 absolute left-2.5"></div>
                    <div className="w-5 h-5 rounded-full bg-ghibli-green"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">UI/UX Designer</h4>
                    <p className="text-sm text-muted-foreground">2018 - 2020</p>
                    <p className="mt-1">Crafting user-centered designs that delight and engage</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-5 h-5 rounded-full bg-ghibli-peach"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Design Student</h4>
                    <p className="text-sm text-muted-foreground">2015 - 2018</p>
                    <p className="mt-1">Learning the foundations of digital design and animation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
