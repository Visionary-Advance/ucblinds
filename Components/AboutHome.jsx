import Image from 'next/image';
import Link from 'next/link';

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
                Why Homeowners Choose{' '}
                <span className="bg-gradient-to-r from-brand-blue-light to-brand-blue bg-clip-text text-transparent">
                  UC Blinds
                </span>{' '}
                
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
            <p className="text-xl md:text-2xl xl:text-xl text-black/80 leading-relaxed">
At UCBlinds, we help homeowners maintain and refresh their window coverings. Whether your blinds need deep cleaning, repair, or full replacement, our team makes the process easy and stress-free.            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6  py-4 ">
              <ul className='list-disc list-outside ml-5 space-y-2 text-black/80 text-xl'>
                <li>We come to your home to remove your blinds for cleaning or repair</li>
                <li>Fast turnaround — often same-day or within 24 hours in Lane County</li>
                <li>Ultrasonic cleaning that removes dirt, grease, dust, pollen, and pet dander</li>
                <li>Expert repairs to restore blinds you already love</li>
                <li>Stylish replacement options when it's time to upgrade</li>


              </ul>
            </div>

            {/* CTA Button */}
            <div>
              <Link href={"/about"}>
              <button className="bg-brand-blue cursor-pointer hover:brightness-90 text-white font-bold text-base px-8 py-4 rounded-[5px] transition-colors duration-200">
                View More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
