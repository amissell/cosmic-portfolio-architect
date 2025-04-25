
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 3D Avatar component
const Avatar = () => {
  return (
    <mesh rotation={[0, 0, 0] as [number, number, number]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial 
        color="#9b87f5" 
        roughness={0.4}
        metalness={0.3}
      />
    </mesh>
  );
};

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          About <span className="text-portfolio-purple">Me</span>
        </h2>
        <p className="text-gray-700 mb-6">
          Hello! I'm Amal Issellay, a passionate and aspiring developer currently studying web development 
          at YouCode. I focus on creating engaging digital experiences through web development, with a 
          solid foundation in programming, marketing, and project management.
        </p>
        <p className="text-gray-700 mb-6">
          Beyond coding, I enjoy sharing knowledge and learning with others, whether it's through 
          participating in community events or working on collaborative projects. I'm actively learning 
          new technologies and refining my skills.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">React</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Laravel</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">PHP</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">TypeScript</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Tailwind CSS</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">MySQL</div>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <Canvas camera={{ position: [0, 0, 3] as [number, number, number], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10] as [number, number, number]} />
          <Avatar />
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={1} 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default About;
