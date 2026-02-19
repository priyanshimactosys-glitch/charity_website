import HeroBlock from "@/src/modules/cms/blocks/HeroBlock";
import TextBlock from "@/src/modules/cms/blocks/TextBlock";


const BLOCKS: any = {
  hero: HeroBlock,
  text: TextBlock,
};

export default function SectionRenderer({ sections }: any) {
  return (
    <>
      {sections?.map((section: any, index: number) => {
        const Component = BLOCKS[section.type];

        if (!Component) return null;

        return <Component key={index} {...section.content} />;
      })}
    </>
  );
}
