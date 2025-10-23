import Image from 'next/image';

export default function PDFHome() {
  return (
    <section className="relative bg-gray-50 w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="lg:max-w-10/12 mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative bg-gradient-to-r from-[#357CCE] to-[#9FD7E9] rounded-[20px]  min-h-[497px]">
            <div className="grid grid-cols-2 items-center">
              {/* Left Content */}
              <div className="p-16 pr-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Get your FREE PDF to start measuring your blinds today!
                </h2>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              {/* Right Content - PDF Icon and Button */}
              <div className="relative flex flex-col items-center justify-center px-8 -translate-y-12">
                <div className="relative w-[420px] h-[420px] mb-6 ">
                  <Image
                    src="/Img/pdf-icon.png"
                    alt="PDF Document Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <button className="bg-white hover:bg-gray-100 text-black font-bold text-2xl px-10 py-3 rounded-[10px] transition-colors duration-200 shadow-lg">
                  Get Your Copy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden pt-20">
          <div className="relative bg-gradient-to-br from-[#357cce] to-[#9FD7E9] rounded-[20px]  h-[675px] p-6">
            <div className='-translate-y-40'>
            {/* PDF Icon */}
            <div className="relative w-full max-w-[380px] h-[380px] mx-auto mb-4">
              <Image
                src="/Img/pdf-icon.png"
                alt="PDF Document Icon"
                fill
                className="object-contain"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mb-8">
              <button className="bg-white hover:bg-gray-100 text-black font-bold text-2xl px-10 py-3 rounded-[10px] transition-colors duration-200 shadow-lg">
                Get Your Copy Now
              </button>
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get your FREE PDF to start measuring your blinds today!
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
