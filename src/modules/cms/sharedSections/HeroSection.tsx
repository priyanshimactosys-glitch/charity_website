import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  alignment?: "left" | "center" | "right";
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  alignment = "left",
}: HeroProps) {
  return (
    <section className="relative h-[350px] md:h-[450px] w-full">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div
        className={`relative z-10 h-full flex items-center container mx-auto px-6 text-white text-${alignment}`}
      >
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-sm md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
