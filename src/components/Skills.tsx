
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

// 3D Skill Icon
const SkillIcon = ({ color = "#9b87f5", position = [0, 0, 0] as [number, number, number], size = 0.5 }) => {
  return (
    <mesh position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

// 3D Skill Cloud
const SkillCloud = () => {
  const skills = [
    { name: "React", position: [1, 1, 0] as [number, number, number], size: 0.4 },
    { name: "Three.js", position: [-1, -1, 0] as [number, number, number], size: 0.5 },
    { name: "Next.js", position: [0, 1.5, 0] as [number, number, number], size: 0.4 },
    { name: "CSS", position: [-1.5, 0.5, 0] as [number, number, number], size: 0.3 },
    { name: "Node.js", position: [1.2, -0.8, 0] as [number, number, number], size: 0.35 },
    { name: "TypeScript", position: [-0.8, 0.8, 0] as [number, number, number], size: 0.45 },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <SkillIcon key={index} position={skill.position} size={skill.size} />
      ))}
    </>
  );
};

const SkillBar = ({ name, level, category }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(level);
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="skill-bar"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6 text-portfolio-charcoal">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML & CSS", level: 95, category: "frontend" },
        { name: "JavaScript", level: 92, category: "frontend" },
        { name: "React", level: 90, category: "frontend" },
        { name: "Next.js", level: 85, category: "frontend" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, category: "backend" },
        { name: "Express", level: 78, category: "backend" },
        { name: "MongoDB", level: 75, category: "backend" },
        { name: "SQL", level: 70, category: "backend" },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Three.js & WebGL", level: 85, category: "other" },
        { name: "TypeScript", level: 88, category: "other" },
        { name: "Git & CI/CD", level: 80, category: "other" },
        { name: "UI/UX Design", level: 75, category: "other" },
      ],
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          Technical <span className="text-portfolio-purple">Skills</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency in various technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
        
        <div className="h-[500px]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <SkillCloud />
            <OrbitControls 
              autoRotate 
              autoRotateSpeed={0.5} 
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Skills;
