import { Bird, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bird className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold">Canary Cloud</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses through innovative cloud solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@canarycloud.tech</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+56 9 7643 7750</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Av Las Condes 14181. Las Condes, Chile</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-aws-partner bg-no-repeat md:min-h-0 min-h-40 " />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Canary Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
