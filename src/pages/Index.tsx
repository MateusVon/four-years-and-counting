import AnniversaryHero from "@/components/AnniversaryHero";
import TimelineSection from "@/components/TimelineSection";
import MemoriesSection from "@/components/MemoriesSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <AnniversaryHero 
        onScrollToStory={() => scrollToSection('timeline')} 
        onScrollToMemories={() => scrollToSection('memories')} 
      />
      <div id="timeline" className="animate-fade-in">
        <TimelineSection />
      </div>
      <div id="memories" className="animate-fade-in">
        <MemoriesSection />
      </div>
    </div>
  );
};

export default Index;