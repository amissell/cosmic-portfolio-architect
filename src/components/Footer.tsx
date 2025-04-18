
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 flex items-center">
              Made with <Heart size={16} className="mx-1 text-portfolio-purple" /> using
              <span className="font-medium text-portfolio-purple ml-1">
                React & Three.js
              </span>
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>This website was created with modern web technologies to showcase interactive 3D elements and animations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
