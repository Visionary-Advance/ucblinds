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
            <p className="text-xl md:text-2xl xl:text-lg text-black/80 leading-relaxed">
At UC Blinds, we believe every home deserves beautiful, functional window coverings
— and service that lasts long after installation.
We design, install, and maintain high-quality blinds, shades, and shutters for homes and
businesses across Lane County, Roseburg, Bend, Woodburn, Florence, and
neighboring communities.
Whether you’re upgrading to modern cellular shades or giving your existing blinds new
life with our ultrasonic cleaning technology, UC Blinds delivers results that look
better, last longer, and cost less over time. </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6  py-4 ">
              <ul className='list-disc list-outside ml-5 space-y-2 text-black/80 text-lg'>
                <li><span className='font-bold text-black text-xl'>Full-Service Experts –</span> From new window coverings to cleaning, repair, and
installation, we handle every stage with precision and care.</li>
                <li><span className='font-bold text-black text-xl'>Lifetime Cleaning Discount –</span> Buy your blinds or shades from UC Blinds and
enjoy discounted professional cleaning for life.</li>
                <li><span className='font-bold text-black text-xl'>Ultrasonic Cleaning Technology –</span> Our state-of-the-art system cleans deeper
and more gently than any traditional method.</li>
                <li><span className="font-bold text-black text-xl" >Specialty in Cellular Shades –</span>We’re one of the few companies in Oregon
trained and equipped to safely clean delicate cellular or honeycomb shades.</li>
                <li><span className='font-bold text-black text-xl'>Local &amp; Licensed –</span> Family-owned, Oregon CCB #226429, proudly serving Lane
County and surrounding regions.</li>


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
