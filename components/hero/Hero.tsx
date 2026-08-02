import Container from "../common/Container";
import FadeUp from "../common/FadeUp";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp>
            <HeroContent />
          </FadeUp>

          <FadeUp>
            <HeroImage />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
