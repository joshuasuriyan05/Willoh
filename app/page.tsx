import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import AuthorTestimonials from "@/components/AuthorTestimonials";
import EditorialBoard from "@/components/EditoralBoard";
import AIHero from "@/components/AIHero";
import ServicesTimeline from "@/components/ServicesTimeline";
import WorkflowDiagram from "@/components/WorkflowDiagram";

export default function Home() {
  return (
    <main>

      <Hero />


      <Stats />

      <Counter target={1200} />

      <AuthorTestimonials />

      <EditorialBoard />
      
      <AIHero />

      <ServicesTimeline />

      <WorkflowDiagram />

    </main>
  );
}