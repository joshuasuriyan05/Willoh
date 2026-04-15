import ServiceCard from "./ServiceCard";
import { FileText, BookOpen, Send } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <ServiceCard
            title="Journal Selection"
            description="Find the right journal for your research."
            Icon={BookOpen}
          />

          <ServiceCard
            title="Manuscript Editing"
            description="Improve clarity and structure."
            Icon={FileText}
          />

          <ServiceCard
            title="Submission Support"
            description="Complete journal submission assistance."
            Icon={Send}
          />

        </div>

      </div>

    </section>
  );
}