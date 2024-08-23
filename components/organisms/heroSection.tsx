import Container from "@/atoms/container";
import HeroContent from "@/data/hero-content";
import Heading from "@/atoms/headings";
import Paragraphs from "@/atoms/paragraphs";
import Button from "@/atoms/button";
import { MessageSquareText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section pt-2 pb-8 md:pt-4 md:pb-4">
      <Container>
        {HeroContent.map((item) => {
          return (
            <div
              className="hero-content-wrapper md:max-w-[954px] md:ml-[110px]"
              key={item.id}>
              <Heading
                className="text-secondary md:hidden"
                headingLevel="h1"
                levelSize="display">
                Torne sua empresa
                <br /> mais atraente
                <br />e conquiste
                <br /> novos clientes.
              </Heading>
              <Heading
                className="text-secondary hidden md:inline-block"
                headingLevel="h1"
                levelSize="display">
                Torne sua empresa
                <br /> mais atraente e conquiste
                <br /> novos clientes.
              </Heading>

              <Paragraphs
                className="text-secondary max-w-[800px] mt-6 paragraph-mono"
                bodySize="body-xl">
                Com uma identidade visual profissional, sua empresa
                <br /> se destaca no mercado, atrai o público certo <br />
                <span className="highlight">
                  e transforma oportunidades em clientes.
                </span>
              </Paragraphs>
              <Button
                intent="primary"
                label={item.cta}
                icon={<MessageSquareText size={16} />}
                path={item.path}
                target={item.target}
                rel={item.rel}
              />
            </div>
          );
        })}
      </Container>
    </section>
  );
}
