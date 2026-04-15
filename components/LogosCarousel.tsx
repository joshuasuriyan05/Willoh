"use client";

export default function LogoCarousel() {

  const row1 = [
    "/logos/uni1.jpg",
    "/logos/uni2.png",
    "/logos/uni3.png",
    "/logos/uni4.png",
    "/logos/uni5.png"
  ];

  const row2 = [
    "/logos/uni6.png",
    "/logos/eth.png",
    "/logos/ntu.png",
    "/logos/nus.png",
    "/logos/uni7.png"
  ];

  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">

      {/* Gradient Glow Background */}

      <div className="absolute w-[500px] h-[500px] bg-blue-400 opacity-30 blur-[120px] rounded-full top-[-150px] left-[-150px]" />

      <div className="absolute w-[500px] h-[500px] bg-purple-400 opacity-30 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

      {/* Title */}

      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center text-[#0b1c3d] mb-14">
        Trusted by Researchers Worldwide
      </h2>

      {/* Carousel */}

      <div className="logo-wrapper relative z-10 space-y-12 overflow-hidden">

        {/* ROW 1 */}

        <div className="logo-row scroll-left">

          {[...row1, ...row1].map((logo, index) => (
            <div
              key={index}
              className="logo-card"
            >
              <img
                src={logo}
                alt="university logo"
                className="logo-img"
              />
            </div>
          ))}

        </div>

        {/* ROW 2 */}

        <div className="logo-row scroll-right">

          {[...row2, ...row2].map((logo, index) => (
            <div
              key={index}
              className="logo-card"
            >
              <img
                src={logo}
                alt="university logo"
                className="logo-img"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}