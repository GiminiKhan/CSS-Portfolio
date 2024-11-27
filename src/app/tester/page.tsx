import Image from "next/image";
import { Libre_Bodoni } from "next/font/google";

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function TestPage() {
  return (
    <div className="w-full min-h-screen bg-white relative px-4 md:px-6 lg:px-8">
      {/* Background section */}
      <div className="w-full h-[300px] md:h-[422px] lg:h-[622px] bg-[#a29875] absolute left-0 top-[2000px] md:top-[4000px] lg:top-[6209px]" />

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row items-center justify-between pt-8 md:pt-12 lg:pt-16 max-w-[1920px] mx-auto">
        {/* Left content section */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 lg:space-y-10 px-4 md:px-6 lg:px-8">
          <h1 className={`${bodoni.className} text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight md:leading-[65.80px] tracking-wide text-black max-w-[496px]`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>

          <p className={`${bodoni.className} text-xl md:text-2xl lg:text-3xl font-medium text-[#786f53] leading-relaxed md:leading-[49.35px] tracking-wide max-w-[902px]`}>
            An example of intricate workmanship and detail, elegant necklaces and
            long and short chains form a part of our desirable collection.
          </p>

          <button className={`${bodoni.className} w-full md:w-72 p-2.5 bg-[#a29875] rounded-[10px] text-white text-xl md:text-2xl lg:text-3xl font-medium hover:bg-[#8f866a] transition-colors`}>
            Explore Now
          </button>
        </div>

        {/* Right image section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
          <div className="relative max-w-[490px] mx-auto">
            {/* Image container */}
            <div className="relative w-full aspect-[490/667] rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px] overflow-hidden">
              <Image
                src="/hero-girl1.png"
                alt="model"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 490px"
              />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute top-[28px] left-[24px] w-[calc(100%-48px)] aspect-[442/611] rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px] border border-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
