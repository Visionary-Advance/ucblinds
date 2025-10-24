import Image from 'next/image';

export default function AboutHome() {
  return (
    <section className="relative w-full bg-gray-50 pb-16 lg:pt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-[20px] overflow-hidden">
            <Image
              src="/Img/workers-cleaning-blinds.png"
              alt="UC Blinds professional team cleaning and installing window blinds"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col space-y-5">
            {/* Heading with underline */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                The{' '}
                <span className="bg-gradient-to-r from-brand-blue-light to-brand-blue bg-clip-text text-transparent">
                  UC Blinds
                </span>{' '}
                Way
              </h2>
              <div className="w-16 h-1">
                <Image
                  src="/Img/underline.svg"
                  alt=""
                  width={65}
                  height={4}
                  className="w-full"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 py-4">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">10+</p>
                <p className="text-lg md:text-xl text-black">
                  Blinds<br />Cleaned
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">50%</p>
                <p className="text-lg md:text-xl text-black">
                  Blinds<br />Cleaned
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-black mb-2">5+</p>
                <p className="text-lg md:text-xl text-black">
                  Blinds<br />Cleaned
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-brand-blue hover:brightness-90 text-white font-bold text-base px-8 py-4 rounded-[5px] transition-colors duration-200">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
