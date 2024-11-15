import { Bird, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center space-x-2">
            <Bird className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">
              Canary Cloud
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-yellow-500 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#certifications"
              className="text-gray-600 hover:text-yellow-500 transition-colors font-medium"
            >
              Certifications
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-yellow-500 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-yellow-500 transition-colors font-medium py-2"
              >
                Services
              </a>
              <a
                href="#certifications"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-yellow-500 transition-colors font-medium py-2"
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-yellow-500 transition-colors font-medium py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
