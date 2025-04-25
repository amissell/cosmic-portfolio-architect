
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// 3D Contact Element
const ContactElement = () => {
  return (
    <mesh rotation={[0, 0, 0] as [number, number, number]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#9b87f5" />
    </mesh>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-portfolio-charcoal">
          Get In <span className="text-portfolio-purple">Touch</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Interested in collaboration or have a project in mind? Let's connect and create something amazing together!
        </p>
        
        {/* 3D Element */}
        <div className="h-[150px] w-full my-8">
          <Canvas camera={{ position: [0, 0, 3] as [number, number, number], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10] as [number, number, number]} />
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
              <ContactElement />
            </Float>
          </Canvas>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-portfolio-charcoal">Contact Information</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Mail className="text-portfolio-purple mr-3 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <a href="mailto:amal.issellay@example.com" className="text-gray-600 hover:text-portfolio-purple transition-colors">
                  amal.issellay@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-portfolio-purple mr-3 mt-1" size={20} />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <a href="tel:0651180913" className="text-gray-600 hover:text-portfolio-purple transition-colors">
                  0651180913
                </a>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-portfolio-charcoal">Connect With Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/amissell"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-portfolio-purple hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/amal-issellay-864827286/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-portfolio-purple hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input w-full bg-transparent py-2 px-0 focus:outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input w-full bg-transparent py-2 px-0 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="contact-input w-full bg-transparent py-2 px-0 focus:outline-none resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 bg-portfolio-purple text-white rounded-full font-medium hover:bg-portfolio-deep-purple transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="mr-2">Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
