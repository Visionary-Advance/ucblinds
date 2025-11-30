import { MapPin, Tag } from 'lucide-react';

export default function LocalInfo({ localInfo, cityName, phoneNumber }) {
  return (
    <section className="py-16 px-4 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Areas */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="text-[#357cce]" />
              Service Areas Near {cityName}
            </h3>
            <p className="text-black/70 mb-6 leading-relaxed">
              We proudly serve {cityName} and surrounding communities with professional blind
              installation, cleaning, and repair services.
            </p>
            <div className="flex flex-wrap gap-3">
              {localInfo.serviceAreas.map((area, index) => (
                <span
                  key={index}
                  className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-full font-montserrat text-black/80 hover:bg-gray-200 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
            {localInfo.hoursDrive && (
              <p className="mt-6 text-[#357cce] font-bold">
                {localInfo.hoursDrive}
              </p>
            )}
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-br from-[#357cce] to-[#9fd7e9] text-white rounded-[20px] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Special {cityName} Offer</h3>
            </div>
            <p className="text-xl mb-6 leading-relaxed">{localInfo.specialOffer}</p>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white text-[#357cce] font-bold text-lg px-6 py-3 rounded-[5px] inline-block hover:bg-gray-100 transition-colors"
            >
              Call to Redeem: {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
