import Image from 'next/image';
import Link from 'next/link';

export default function AboutHome() {
  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Mobile/Tablet: Stacked layout */}
        <div className="lg:hidden space-y-8">
          <div className="relative w-full h-[400px] rounded-[20px] overflow-hidden shadow-xl">
            <Image
              src="/Img/About_Home_Img.jpg"
              alt="UC Blinds professional team cleaning and installing window blinds"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col space-y-6">
            {/* Heading with underline */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                Why Choose{' '}
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
At UC Blinds, we believe every space deserves beautiful, functional window coverings — supported by service that goes well beyond installation. We design, install, and maintain high-quality blinds, shades, and shutters for residential properties, rentals, property managers, and businesses throughout Lane County, Roseburg, Bend, Woodburn, Florence, and beyond. Whether you're upgrading to modern cellular shades or extending the life of your existing blinds with our ultrasonic cleaning technology, UC Blinds delivers results that look better, last longer, and offer exceptional long-term value. </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 py-4 lg:py-8">
              <ul className='list-disc list-outside ml-5 space-y-4 lg:space-y-8 text-black/80 text-lg lg:text-xl'>
                <li><span className='font-bold text-black text-xl'>Full-Service Experts –</span> From new window coverings to cleaning, repair, and
installation, we handle every stage with precision and care.</li>
                <li><span className='font-bold text-black text-xl'><a className='' href='/limited-lifetime-cleaning-terms'> Limited Lifetime Warranty</a> –</span> Buy your blinds or shades from UC Blinds and
enjoy discounted professional cleaning for life.</li>
                <li><span className='font-bold text-black text-xl'>Ultrasonic Cleaning Technology –</span> Our state-of-the-art system cleans deeper
and more gently than any traditional method.</li>
                <li><span className="font-bold text-black text-xl" >Specialty in Cellular Shades –</span>We're one of the few companies in Oregon
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

        {/* Desktop: Side-by-side with sticky */}
        <div className="hidden lg:flex lg:gap-1">
          {/* Left column - Sticky image */}
          <div className="w-1/2 flex-shrink-0">
            <div
              className="w-full"
              style={{ position: 'sticky', top: '6rem' }}
            >
              <div className="relative w-[500px] h-[500px] rounded-[20px] overflow-hidden shadow-xl">
                <Image
                  src="/Img/About_Home_Img.jpg"
                  alt="UC Blinds professional team cleaning and installing window blinds"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right column - Scrollable content */}
          <div className="w-1/2 flex flex-col space-y-8 ">
            {/* Heading with underline */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                Why Choose{' '}
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
            <p className="text-lg text-black/80 leading-relaxed">
At UC Blinds, we believe every space deserves beautiful, functional window coverings — supported by service that goes well beyond installation. We design, install, and maintain high-quality blinds, shades, and shutters for residential properties, rentals, property managers, and businesses throughout Lane County, Roseburg, Bend, Woodburn, Florence, and beyond. Whether you're upgrading to modern cellular shades or extending the life of your existing blinds with our ultrasonic cleaning technology, UC Blinds delivers results that look better, last longer, and offer exceptional long-term value.
</p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 py-8">
              <ul className='list-disc list-outside ml-5 space-y-8 text-black/80 text-xl'>
                <li><span className='font-bold text-black text-xl'>Tailored solutions for every property type –</span> Serving residential, rental, commercial spaces, and managed properties with customized window-covering options.</li>
                <li><span className='font-bold text-black text-xl'><a className='' href='/warranty'> Ultrasonic blind cleaning that saves you money </a>–</span> Restores and extends the life of existing blinds, helping you avoid unnecessary full replacements.</li>
                <li><span className='font-bold text-black text-xl'>Trusted by property managers and business owners –</span> Reliable maintenance, consistent quality, and long-term partnership value.</li>
                <li><span className="font-bold text-black text-xl" >Clear, no-pressure consultations –</span>Straightforward communication, transparent recommendations, and complimentary in-person estimates.</li>
                <li><span className='font-bold text-black text-xl'>Limited lifetime value –</span>Purchase blinds or shades from UC Blinds and receive discounted professional cleaning for life.</li>
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
