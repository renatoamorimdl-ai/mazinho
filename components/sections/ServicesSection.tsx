import Image from "next/image";
import siteData from "@/app/data.json";
import TrackedLink from "@/components/TrackedLink";

const { services, links } = siteData;

export default function ServicesSection() {
  const getServiceEventName = (serviceTitle: string) => {
    if (serviceTitle.includes("Munck")) return "cta_click_munck";
    if (serviceTitle.includes("Guindaste")) return "cta_click_guindaste";
    return "click_whatsapp";
  };
  const getServiceWhatsappHref = (serviceTitle: string) => {
    const message = `Olá! Vim pelo site e quero mais detalhes sobre o serviço de ${serviceTitle}.`;
    return `${links.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className="section section-light reveal-on-scroll">
      <div className="site-container">
        <p className="section-eyebrow">{services.eyebrow}</p>
        <h2 className="section-title section-title-dark">{services.title}</h2>

        <div className="services-grid">
          {services.items.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card-media">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="service-card-photo"
                  style={{ objectPosition: `${service.positionX}% ${service.positionY}%` }}
                  fill
                  sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <TrackedLink
                  href={getServiceWhatsappHref(service.title)}
                  className="service-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName={getServiceEventName(service.title)}
                  eventParams={{ location: `services_${service.title}` }}
                >
                  {services.detailsLinkText}
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
