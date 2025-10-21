import { Link } from "react-router-dom";
import { Phone, MessageSquareText, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Placeholder({ pageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-ucblue-500 relative z-10">
        {/* Top Contact Bar */}
        <div className="bg-ucblue-500 py-2">
          <div className="container mx-auto px-4 flex justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2">
              <MessageSquareText className="w-6 h-6 text-ucblue-500" />
              <span className="text-ucblue-500 font-inter text-sm md:text-base font-medium hidden sm:inline">
                541-343-8000
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2">
              <Phone className="w-6 h-6 text-ucblue-500" />
              <span className="text-ucblue-500 font-inter text-sm md:text-base font-medium">
                541-343-8000
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c231abfefa0b988eeae0f88115b5748447fb69d2?width=180" 
                alt="UCBlinds Logo" 
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <h1 className="text-white font-montserrat font-bold text-2xl md:text-4xl">
                UCBlinds
              </h1>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-white font-inter text-lg hover:text-gray-200 transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-white font-inter text-lg hover:text-gray-200 transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-white font-inter text-lg hover:text-gray-200 transition-colors">
                About
              </Link>
              <Link to="/process" className="text-white font-inter text-lg hover:text-gray-200 transition-colors">
                Our Process
              </Link>
              <Link to="/testimonials" className="text-white font-inter text-lg hover:text-gray-200 transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="text-white font-inter text-lg hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </nav>

            <button className="hidden md:block bg-ucblue-500 text-white px-6 py-3 rounded-md font-montserrat font-bold text-lg hover:bg-ucblue-600 transition-colors">
              Book Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ucblue-600 border-t border-ucblue-400">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link
                to="/"
                className="block text-white font-inter text-lg py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-white font-inter text-lg py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block text-white font-inter text-lg py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/process"
                className="block text-white font-inter text-lg py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Process
              </Link>
              <Link
                to="/testimonials"
                className="block text-white font-inter text-lg py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="block text-white font-inter text-lg py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <button className="w-full bg-ucblue-500 text-white px-6 py-3 rounded-md font-montserrat font-bold text-lg hover:bg-ucblue-600 transition-colors">
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-4">
            {pageName}
          </h1>
          <p className="text-gray-600 font-inter text-lg mb-8">
            This page is coming soon. Continue the conversation to have me build out the content for this section.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-ucblue-500 text-white px-6 py-3 rounded-md font-montserrat font-bold text-lg hover:bg-ucblue-600 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}