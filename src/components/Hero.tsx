import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div
      id="top"
      className="relative pt-24 overflow-hidden bg-gradient-to-br from-yellow-100/30 to-gray-100/30"
    >
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span>Success starts with hardworking consultants</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Elevate Your{" "}
              <span className="text-yellow-500">Infrastructure</span> to New
              Heights
            </h1>
            <p className="text-xl text-gray-600">
              Transform your business with enterprise-grade cloud solutions that
              scale with your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-yellow-100 text-yellow-700 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-200 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=2070"
              alt="Cloud Infrastructure"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-4/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
