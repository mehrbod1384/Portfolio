import Container from "../common/Container";

import SkillCard from "./SkillCard";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <h2 className="mb-10 text-3xl font-bold">مهارت‌ها</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
