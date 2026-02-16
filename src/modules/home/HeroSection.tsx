import Image from "next/image";
import DonationCard from "./DonationCard";
import StatsBar from "./StatsBar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[650px]">

      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Clean water"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-md text-white">

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Bring clean and safe water to every person on the planet
          </h1>

          {/* Donation Card */}
          <DonationCard />

        </div>

      </div>

      {/* Stats Floating Bar */}
      <StatsBar />

    </section>
  );
}
