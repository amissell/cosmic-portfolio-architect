
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { GraduationCap, Award, Calendar } from "lucide-react";

// 3D Diploma Component
const Diploma = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
      <meshStandardMaterial color="#9b87f5" />
    </mesh>
  );
};

const EducationItem = ({ degree, institution, year, description, achievements }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-2">
          <GraduationCap className="mr-2 text-portfolio-purple" size={24} />
          <h3 className="text-xl font-semibold text-portfolio-charcoal">{degree}</h3>
        </div>
        <p className="text-lg font-medium text-gray-700 mb-1">{institution}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar size={16} className="mr-1" />
          <span>{year}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div>
            <p className="font-medium text-gray-700 mb-2">Achievements:</p>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <Award size={16} className="mr-2 text-portfolio-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Advanced Web Technologies",
      achievements: [
        "Graduated with distinction",
        "Published research paper on interactive 3D visualizations",
        "Received department award for innovative thesis project"
      ]
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      year: "2010 - 2014",
      description: "Focused on web development, database management, and user interface design",
      achievements: [
        "Dean's List for academic excellence",
        "Led team for university hackathon, winning first place",
        "Completed internship at leading tech company"
      ]
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          <span className="text-portfolio-purple">Education</span> & Qualifications
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          My academic journey has provided me with a strong foundation in computer science
          and the technical knowledge necessary for success in the field.
        </p>
        
        {/* 3D Diploma Animation */}
        <div className="h-[150px] w-full my-8">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
              <Diploma />
            </Float>
          </Canvas>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationItems.map((item, index) => (
          <EducationItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
