import { getAllCities } from '@/lib/cities';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Areas We Serve | UC Blinds - Oregon Blind Services',
  description: 'UC Blinds serves Eugene, Bend, Springfield, Woodburn, and surrounding Oregon communities with professional blind sales, installation, and cleaning.',
};

export default function CitiesOverview() {
  const cities = getAllCities();

  return (
    <div className="min-h-screen pt-[145px] px-4 lg:px-16 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-black">Areas We Serve</h1>
        <div className="w-16 h-1 bg-[#357cce] mb-6"></div>
        <p className="text-xl text-black/70 mb-12 max-w-3xl">
          UC Blinds is proud to serve communities across Oregon with premium window blind sales,
          installation, cleaning, and repair services. Click on your city to learn more about
          our services in your area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/cities/${city.slug}`}
              className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-[250px]">
                <Image
                  src={city.hero.backgroundImage}
                  alt={`${city.name} blinds services`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{city.name}</h2>
                  <p className="text-white/90 text-lg">{city.state}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#357cce] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  View {city.name} Services
                  <span>→</span>
                </p>
                <p className="text-black/60 text-sm mt-2">
                  Serving {city.localInfo.serviceAreas.slice(0, 3).join(', ')}
                  {city.localInfo.serviceAreas.length > 3 && '...'}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-br from-[#357cce] to-[#9fd7e9] rounded-[20px] p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Don't See Your City Listed?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We may still be able to help! Contact us to discuss service availability in your area.
          </p>
          <a
            href="tel:541-343-8000"
            className="bg-white text-[#357cce] font-bold text-lg px-8 py-4 rounded-[5px] inline-block hover:bg-gray-100 transition-colors"
          >
            Call Us: 541-343-8000
          </a>
        </div>
      </div>
    </div>
  );
}
