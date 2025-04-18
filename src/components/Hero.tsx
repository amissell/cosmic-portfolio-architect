
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, PresentationControls } from "@react-three/drei";
import { ChevronDown } from "lucide-react";

// Fallback 3D geometry when loading
const Placeholder = () => {
  return (
    <mesh>
      <dodecahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial color="#9b87f5" wireframe />
    </mesh>
  );
};

// 3D Model for the hero section
const Model = () => {
  return (
    <mesh rotation={[0, Math.PI / 4, 0]}>
      <dodecahedronGeometry args={[1.5, 2]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen relative overflow-hidden flex flex-col justify-center items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-0.5, 0.5]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
          >
            <Model />
          </PresentationControls>
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-portfolio-charcoal">
          <span className="text-portfolio-purple">Creative</span> Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Crafting engaging digital experiences with modern technologies
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 bg-portfolio-purple text-white rounded-full font-medium hover:bg-portfolio-deep-purple transition-colors duration-300"
        >
          View My Work
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <a href="#about" className="inline-block animate-bounce">
          <ChevronDown size={32} className="text-portfolio-purple" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
