import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8 sm:py-16 lg:py-20">
        <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-black mb-6 lg:mb-8">
          What We Do
        </h1>
        <p className="font-[family-name:var(--font-roboto)] text-lg sm:text-xl lg:text-2xl text-center text-black/80 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        {/* Mobile: Image First */}
        <div className="lg:hidden mb-6">
          <div className="relative w-full max-w-[350px] ms-auto aspect-[350/258] rounded-[20px] z-50 overflow-hidden">
            <Image
              src="/Img/mission-team.png"
              alt="Professional team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          className="rounded-[20px] lg:-mt-0 lg:-mb-0 -mt-10 -mb-16 lg:-translate-y-0 -translate-y-20 pt-30 lg:w-[82%] relative p-6 sm:p-8 lg:p-12"
          style={{
            background: 'linear-gradient(to right, rgba(159, 215, 233, 0.3), rgba(53, 124, 206, 0.3))'
          }}
        >
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center ">
            {/* Mission Text */}
            <div className="lg:pr-8 xl:pr-0">
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 lg:mb-6">
                Our Mission
              </h2>
              <p className="font-[family-name:var(--font-roboto)] text-lg sm:text-xl lg:text-2xl text-black/80 leading-relaxed lg:max-w-xl xl:max-w-2xl">
                UCBlinds was founded with the mission of providing superior blind cleaning, replacement, repair, new blinds, and installation services to residential and commercial customers.
              </p>
            </div>

            {/* Desktop: Image on Right */}
            <div className="hidden lg:block">
              <div className="absolute top-5 right-0 lg:translate-x-32 xl:translate-x-48 2xl:translate-x-56 lg:w-[350px] lg:h-[240px] xl:w-[400px] xl:h-[275px] 2xl:w-[439px] 2xl:h-[300px] rounded-[20px] overflow-hidden flex-shrink-0">
                <Image
                  src="/Img/mission-team.png"
                  alt="Professional team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full bg-gradient-to-r from-[#357CCE] to-[#9FD7E9] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Approach Text */}
            <div className="flex-1 text-right mb-auto">
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 lg:text-left lg:max-w-[369px] lg:me-auto">
                Our Approach
              </h2>
              <p className="font-[family-name:var(--font-roboto)] text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl  lg:text-left lg:me-auto">
                We approach every client relationship as a collaborative partnership. Understanding the unique requirements of our clientele has enabled us to tailor our processes to meet those specific needs.
              </p>
            </div>

            {/* Desktop: Image on Right */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="relative w-[550px] h-[350px] rounded-[20px] overflow-hidden">
                <Image
                  src="/Img/approach-handshake.png"
                  alt="Professional partnership handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile: Image Below */}
            <div className="lg:hidden w-full">
              <div className="relative w-full max-w-[397px] mx-auto aspect-[397/253] rounded-[20px] overflow-hidden">
                <Image
                  src="/Img/approach-handshake.png"
                  alt="Professional partnership handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 lg:mb-12">
          Our Team
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Brett's Photo */}
          <div className="relative me-auto lg:mx-0 w-[250px] lg:w-[321px] h-[350px] lg:h-[450px] overflow-hidden flex-shrink-0">
            <Image
              src="/Img/brett-hansen.png"
              alt="Brett Hansen, Owner of UCBlinds"
              fill
              className="object-cover"
            />
          </div>

          {/* Brett's Bio */}
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-bold text-black mb-1">
              Brett Hansen
            </h3>
            <p className="font-[family-name:var(--font-roboto)] text-xl sm:text-2xl text-[#5d5d5d] mb-4 lg:mb-6">
              Owner
            </p>
            <div className="font-[family-name:var(--font-roboto)] text-base sm:text-lg lg:text-[22px] text-black leading-relaxed space-y-4 lg:max-w-[798px]">
              <p>
                Thank you for looking at this page. My name is Brett, and I am the owner of UCBlinds. I started UCBlinds in 2018, with a long history in the window covering business. Growing up in the window covering business has taught me a lot over many years. The experiences and lessons that I have learned have enabled me to make sure every Property Owner, Property manager, Family, Tenant, and homeowner does not spend one night without window coverings and is treated fairly, no matter what in a timely manner.
              </p>
              <p>
                My Motto is to: Be Kind, Be Humble, Be Respectful, Be Loving, Be Caring, Be Trustworthy, Be You! Don&apos;t forget &quot;Yes Sir&quot; &amp; &quot;Yes Ma&apos;am.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
