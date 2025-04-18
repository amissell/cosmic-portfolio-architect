
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
          Hello! I'm John Doe, a creative developer with 5 years of experience crafting digital experiences. 
          I specialize in building immersive web applications that combine cutting-edge technology with 
          intuitive design.
        </p>
        <p className="text-gray-700 mb-6">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source 
          projects, or sharing my knowledge through tech blogs and community events.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">React</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Next.js</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Three.js</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">TypeScript</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">WebGL</div>
          <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">AWS</div>
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
