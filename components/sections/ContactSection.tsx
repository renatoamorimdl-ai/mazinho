"use client";

import { FormEvent, useState } from "react";
import siteData from "@/app/data.json";

const { contact, links } = siteData;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const trackWhatsappClick = (location: string) => {
  if (typeof window === "undefined") return;

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "whatsapp_click", location });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", { location });
  }
};

const getContactIcon = (label: string) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (label === "Endereço") {
    return (
      <svg {...common}>
        <path d="M12 21s-7-5.4-7-11a7 7 0 1 1 14 0c0 5.6-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (label === "E-mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (label === "WhatsApp") {
    return (
      <svg {...common}>
        <path d="M20 12a8 8 0 0 1-11.8 7l-3.2 1 1-3.1A8 8 0 1 1 20 12Z" />
        <path d="M9.6 9.2c.2-.5.4-.5.8-.5h.7c.2 0 .5 0 .7.4.2.5.8 1.8.8 1.9.1.2.1.4 0 .6-.1.2-.2.4-.4.5-.2.2-.4.4-.6.5-.2.2-.3.4-.1.7.2.4 1 1.6 2.3 2.2 1.6.8 1.6.5 1.9.5.2 0 .6-.2.8-.5.2-.3.3-.7.4-.8.1-.2.3-.2.5-.1.2.1 1.4.7 1.7.9.2.1.4.2.4.4 0 .2-.1 1.1-.8 1.6-.6.5-1.4.7-2 .7-.6 0-1.3-.2-2-.5-1.2-.5-2.5-1.3-3.5-2.4-1-1-1.8-2.3-2.3-3.4-.5-1.1-.3-2 .1-2.7Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M22 16.9V20a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2H7a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.4 2L8 9.5a16 16 0 0 0 6.5 6.5l1.3-1.2a2 2 0 0 1 2-.4c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
};

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      "Olá! Vim pelo site da Mazinho Guinchos.",
      "",
      `Nome: ${name || "-"}`,
      `Telefone: ${phone || "-"}`,
      `Mensagem: ${message || "-"}`,
    ].join("\n");

    const whatsappUrl = `${links.whatsapp}?text=${encodeURIComponent(text)}`;
    trackWhatsappClick("contact_form_submit");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="section section-light contact-shell reveal-on-scroll">
      <div className="site-container">
        <p className="section-eyebrow">{contact.eyebrow}</p>
        <h2 className="section-title section-title-dark">{contact.title}</h2>

        <div className="contact-grid">
          <article className="contact-card">
            <div className="contact-info-list">
              {contact.info.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    {getContactIcon(item.label)}
                  </span>
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="contact-form-title">{contact.formTitle}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                {contact.nameLabel}
                <input
                  type="text"
                  name="nome"
                  placeholder={contact.namePlaceholder}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <label>
                {contact.phoneLabel}
                <input
                  type="tel"
                  name="telefone"
                  placeholder={contact.phonePlaceholder}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </label>

              <label>
                {contact.messageLabel}
                <textarea
                  name="mensagem"
                  rows={5}
                  placeholder={contact.messagePlaceholder}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </label>

              <button type="submit" className="contact-submit">
                {contact.submitText}
              </button>
            </form>
          </article>

          <article className="contact-map-card">
            <iframe
              title={contact.mapTitle}
              src={contact.mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
