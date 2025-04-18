
import { Canvas } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { Code, Building2, Laptop } from "lucide-react";

const ExperienceItem = ({ title, company, period, description, icon: Icon }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="timeline-line"></div>
      <div className="timeline-dot mt-1.5"></div>
      <div className="mb-1 flex items-center">
        <Icon className="mr-2 text-portfolio-purple" size={20} />
        <h3 className="text-xl font-semibold text-portfolio-charcoal">{title}</h3>
      </div>
      <p className="text-lg font-medium text-gray-700 mb-1">{company}</p>
      <p className="text-sm text-gray-500 mb-3">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

// 3D Icon that floats at the top of the experience section
const Float3DIcon = () => {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh rotation={[0, 0, 0] as [number, number, number]}>
        <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
        <meshStandardMaterial color="#9b87f5" />
      </mesh>
    </Float>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: "Leading a team of developers in building enterprise-scale React applications. Implemented WebGL visualizations that increased user engagement by 40%.",
      icon: Code,
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Lab",
      period: "2019 - 2021",
      description: "Developed and deployed full-stack applications using Next.js and Node.js. Created real-time collaboration features used by 10,000+ users.",
      icon: Laptop,
    },
    {
      title: "Junior Developer",
      company: "WebTech Startups",
      period: "2018 - 2019",
      description: "Contributed to various startup projects, focusing on frontend development with React and Vue.js. Implemented responsive designs and animations.",
      icon: Building2,
    },
  ];

  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          Professional <span className="text-portfolio-purple">Experience</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          My journey through various roles has equipped me with a diverse skill set
          and the ability to adapt to different challenges and environments.
        </p>
        
        {/* 3D Canvas Container */}
        <div className="h-[150px] w-full my-8">
          <Canvas camera={{ position: [0, 0, 4] as [number, number, number], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10] as [number, number, number]} />
            <Float3DIcon />
          </Canvas>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
