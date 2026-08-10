import Image from "next/image";
import siteData from "@/app/data.json";

const { partners } = siteData;

const partnerItems = Array.from({ length: partners.total }, (_, index) => ({
  name: `${partners.namePrefix} ${index + 1}`,
  icon: `/parceiros/parceiro-${index + 1}.png`,
}));

export default function PartnersSection() {
  return (
    <section id="parceiros" className="section section-light section-center reveal-on-scroll">
      <div className="site-container">
        <p className="section-eyebrow">{partners.eyebrow}</p>
        <h2 className="section-title section-title-dark">{partners.title}</h2>

        <div className="partners-carousel" aria-label={partners.carouselAriaLabel}>
          <div className="partners-track">
            {[...partnerItems, ...partnerItems].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="partner-item">
                <Image
                  src={partner.icon}
                  alt={partner.name}
                  className="partner-logo"
                  width={270}
                  height={270}
                  sizes="(max-width: 900px) 45vw, (max-width: 1200px) 25vw, 270px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
