import Image from "next/image";
import TerminalCard from "./TerminalCard";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-full bg-(--amber)/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-(--line) bg-(--surface)">
        <Image
          src="/profile.jpg"
          alt="Mehrbod"
          width={500}
          height={650}
          priority
          className="aspect-4/5 h-auto w-full object-cover grayscale-15"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0b0e11] via-transparent to-transparent" />
      </div>

      <TerminalCard />
    </div>
  );
}
