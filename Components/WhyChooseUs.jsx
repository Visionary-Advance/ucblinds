import { MapPin, Award, Truck, DollarSign, Shield, Clock } from 'lucide-react';

const iconMap = {
  MapPin,
  Award,
  Truck,
  DollarSign,
  Shield,
  Clock
};

export default function WhyChooseUs({ benefits, cityName }) {
  return (
    <section className="py-16 px-4 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 text-center">
          Why Choose UC Blinds in {cityName}?
        </h2>
        <div className="w-16 h-1 bg-[#357cce] mb-12 mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#357cce]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#357cce]" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-black">
                  {benefit.title}
                </h3>
                <p className="text-black/70 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
