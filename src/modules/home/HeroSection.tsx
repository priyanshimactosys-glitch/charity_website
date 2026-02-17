import Image from "next/image";
import DonationCard from "./DonationCard";
import StatsBar from "./StatsBar";
import Container from "@/src/components/common/Container";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[790px]">

      <Image
        src="/images/hero-bg.png"
        alt="Clean water"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />
      <Container className="pt-10">
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

          <div className="max-w-md text-white">

            <h1 className="text-4xl font-bold text-center leading-tight mb-7">
              Bring clean and safe water to every person on the planet
            </h1>

            <DonationCard />

          </div>

        </div>

        <StatsBar />
      </Container>
    </section>
  );
}
