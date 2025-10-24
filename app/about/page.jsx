import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-black mb-8">
          What We Do
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-center text-black/80 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </section>

      {/* Team Image - Mobile Only */}
      <div className="lg:hidden px-4 mb-12">
        <div className="relative w-full max-w-sm mx-auto aspect-[350/258] rounded-[20px] overflow-hidden">
          <Image
            src="/Img/team-handshake.png"
            alt="Professional team handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="rounded-[20px] p-8 sm:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(to right, rgba(159, 215, 233, 0.3), rgba(53, 124, 206, 0.3))'
          }}
        >
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
            {/* Mission Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-black/80 leading-relaxed max-w-2xl">
                UCBlinds was founded with the mission of providing superior blind cleaning, replacement, repair, new blinds, and installation services to residential and commercial customers.
              </p>
            </div>

            {/* Team Image - Desktop Only */}
            <div className="hidden lg:block">
              <div className="relative w-[439px] h-[324px] rounded-[20px] overflow-hidden">
                <Image
                  src="/Img/team-handshake.png"
                  alt="Professional team handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
