
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 3D Avatar component
const Avatar = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
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
          I'm a passionate developer with expertise in front-end and back-end technologies. 
          With a strong foundation in modern JavaScript frameworks like React and Next.js, 
          I create compelling user experiences that blend functionality with beautiful design.
        </p>
        <p className="text-gray-700 mb-6">
          My approach combines technical precision with creative problem-solving. 
          I'm dedicated to writing clean, efficient code and staying current with emerging technologies 
          to deliver solutions that exceed expectations.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">JavaScript</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">React</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Next.js</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">TypeScript</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Node.js</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Three.js</div>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
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
