
import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { Globe } from "lucide-react";

// 3D Globe Component
const Globe3D = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        wireframe 
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const LanguageItem = ({ language, proficiency, flag }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow flex items-center">
      <div className="text-2xl mr-3">{flag}</div>
      <div>
        <h3 className="font-medium text-gray-800">{language}</h3>
        <p className="text-sm text-gray-600">{proficiency}</p>
      </div>
    </div>
  );
};

const Languages = () => {
  const languages = [
    { language: "English", proficiency: "Native", flag: "🇺🇸" },
    { language: "Spanish", proficiency: "Fluent", flag: "🇪🇸" },
    { language: "French", proficiency: "Intermediate", flag: "🇫🇷" },
    { language: "German", proficiency: "Basic", flag: "🇩🇪" },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          <span className="text-portfolio-purple">Languages</span> I Speak
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Communication is key in our global world. Here are the languages I can communicate in.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-[300px]">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
              <Globe3D />
            </Float>
          </Canvas>
        </div>
        
        <div>
          <div className="flex items-center mb-6">
            <Globe className="text-portfolio-purple mr-2" size={24} />
            <h3 className="text-xl font-semibold text-portfolio-charcoal">Spoken Languages</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <LanguageItem key={index} {...lang} />
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700">
              Language skills enable me to collaborate effectively with international teams and clients,
              broadening my perspective and enhancing communication across cultures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
