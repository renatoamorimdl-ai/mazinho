import Image from "next/image";
import siteData from "@/app/data.json";
import TrackedLink from "@/components/TrackedLink";

const { hero, links } = siteData;
const heroWhatsappMessage =
  "Olá! Vim pelo site e quero solicitar um orçamento para transporte/remoção com a Mazinho Guinchos.";
const heroWhatsappHref = `${links.whatsapp}?text=${encodeURIComponent(heroWhatsappMessage)}`;

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section reveal-on-scroll">
      <div className="site-container hero-grid">
        <div>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <TrackedLink
              href={heroWhatsappHref}
              className="btn btn-danger"
              target="_blank"
              rel="noopener noreferrer"
              eventName="cta_click_orcamento"
            >
              {hero.primaryCta}
            </TrackedLink>
            <TrackedLink
              href="#servicos"
              className="btn btn-outline-light"
              eventName="cta_click"
              eventParams={{ location: "hero_secondary_cta" }}
            >
              {hero.secondaryCta}
            </TrackedLink>
          </div>
        </div>

        <div className="hero-media" role="img" aria-label={hero.mediaAriaLabel}>
          <Image
            src="/mazin-2.jpeg"
            alt=""
            className="hero-media-photo"
            fill
            priority
            sizes="(max-width: 900px) 90vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
