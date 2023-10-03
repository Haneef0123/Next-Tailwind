import Container from "@/Components/Container";
import { Hero, HeroTitle, HerosubTitle } from "@/Components/Hero";
import RootLayout from "./layout";
import Button from "@/Components/Button";
import { ChevronIcon } from "@/Components/Icons/Chevron";
import HeroImage from "@/Components/hero-image";

export default function HomePage() {
  return (
    <>
      <Container className=" py-[6.4rem] overflow-hidden ">
        <Hero>
          <Button
            className=" animate-fade-in"
            href="/"
            variant="secondary"
            size="small"
          >
            Announcing our $35M Series B <ChevronIcon />
          </Button>
          <HeroTitle className=" animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
            Linear is a better way <br className=" hidden md:block" />
            to build products.
          </HeroTitle>
          <HerosubTitle className=" animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Meet the new standard for modern software development.{" "}
            <br className=" hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HerosubTitle>
          <Button
            className=" animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
            variant="primary"
            size="large"
            href="/"
          >
            Get Started <ChevronIcon />
          </Button>
          <HeroImage />
        </Hero>
      </Container>
    </>
  );
}
