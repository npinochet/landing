import { Cloud, Shield, Zap, BarChart, Users, Globe } from "lucide-react";

const services = [
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Cloud Migration",
    description:
      "Seamless transition to cloud infrastructure with zero downtime and minimal disruption",
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Security Solutions",
    description:
      "Enterprise-grade security implementation with 24/7 monitoring and threat detection",
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Performance Optimization",
    description:
      "Maximize efficiency and reduce operational costs through intelligent optimization",
  },
  {
    icon: <BarChart className="h-12 w-12" />,
    title: "Analytics & Insights",
    description:
      "Real-time monitoring and analytics to drive data-informed decisions",
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Team Training",
    description:
      "Comprehensive cloud training and certification programs for your team",
  },
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Global Scale",
    description:
      "Deploy and manage cloud infrastructure across multiple global regions",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive cloud solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-yellow-50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 text-gray-600 group-hover:text-yellow-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
