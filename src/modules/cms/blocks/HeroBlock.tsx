export default function HeroBlock({ title, subtitle }: any) {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-3">{subtitle}</p>
    </section>
  );
}
