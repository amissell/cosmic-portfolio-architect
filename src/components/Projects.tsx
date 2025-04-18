import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Github, ExternalLink } from "lucide-react";

const ProjectIcon = ({ color = "#9b87f5" }) => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const ProjectCard = ({ title, description, tags, image, links, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="project-card bg-white rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <div className="h-[200px] w-full relative">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float 
              speed={hovered ? 3 : 1} 
              rotationIntensity={hovered ? 0.6 : 0.2} 
              floatIntensity={hovered ? 0.6 : 0.2}
            >
              <ProjectIcon color={color} />
            </Float>
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-portfolio-charcoal">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {links.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-portfolio-purple transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>Github</span>
              </a>
            )}
            {links.live && (
              <a 
                href={links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-portfolio-purple transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "3D Virtual Gallery",
      description: "An immersive virtual art gallery built with Three.js and React, featuring interactive exhibitions and real-time collaboration.",
      tags: ["React", "Three.js", "WebGL", "Socket.io"],
      color: "#9b87f5",
      links: {
        github: "https://github.com/johndoe/virtual-gallery",
        live: "https://virtual-gallery-demo.com",
      },
    },
    {
      title: "AI Task Manager",
      description: "Smart task management platform using AI to prioritize and organize tasks efficiently.",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "PostgreSQL"],
      color: "#6E59A5",
      links: {
        github: "https://github.com/johndoe/ai-taskmanager",
        live: "https://ai-taskmanager.com",
      },
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with advanced charting and portfolio management.",
      tags: ["React", "D3.js", "WebSocket", "Firebase"],
      color: "#8B5CF6",
      links: {
        github: "https://github.com/johndoe/crypto-dashboard",
        live: "https://crypto-dashboard-demo.com",
      },
    },
    {
      title: "WebGL Game Engine",
      description: "Lightweight browser-based game engine built with WebGL and TypeScript.",
      tags: ["WebGL", "TypeScript", "Three.js", "Web Workers"],
      color: "#D946EF",
      links: {
        github: "https://github.com/johndoe/webgl-engine",
      },
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          Featured <span className="text-portfolio-purple">Projects</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A selection of my recent work that demonstrates my skills, interests, and creative approach to problem-solving.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
