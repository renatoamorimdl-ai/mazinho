import Image from "next/image";
import siteData from "@/app/data.json";
import TrackedLink from "@/components/TrackedLink";

const { footer, links } = siteData;
const footerWhatsappMessage =
  "Olá! Vim pelo site e gostaria de solicitar um orçamento para um serviço de içamento/transporte.";
const footerWhatsappHref = `${links.whatsapp}?text=${encodeURIComponent(footerWhatsappMessage)}`;

export default function FooterSection() {
  return (
    <footer className="footer-shell reveal-on-scroll">
      <div className="site-container footer-panel">
        <div className="footer-main-grid">
          <div className="footer-brand-col footer-col-card">
            <a href="#inicio" className="footer-logo" aria-label={footer.logoAriaLabel}>
              <span className="footer-logo-mark" aria-hidden="true">
                <Image src="/logo-mazinho-3.png" alt="" width={64} height={64} />
              </span>
              <span>{footer.logoText}</span>
            </a>

            <p className="footer-brand-text">{footer.brandText}</p>

            <TrackedLink
              href={footerWhatsappHref}
              className="btn btn-danger footer-main-cta"
              target="_blank"
              rel="noopener noreferrer"
              eventName="cta_click_orcamento"
            >
              {footer.mainCtaText}
            </TrackedLink>
          </div>

          <div className="footer-nav-col footer-col-card">
            <p className="footer-col-title">{footer.navTitle}</p>
            <nav className="footer-nav" aria-label={footer.navAriaLabel}>
              {footer.navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-service-col footer-col-card">
            <p className="footer-col-title">{footer.serviceTitle}</p>
            <ul className="footer-service-list">
              {footer.serviceList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-legal-row">
          <p>{footer.copyright}</p>
          <p>
            {footer.developedByPrefix}{" "}
            <TrackedLink
              href={footer.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="cta_click"
              eventParams={{ location: "footer_developer_link" }}
            >
              {footer.developerName}
            </TrackedLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
