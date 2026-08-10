import siteData from "@/app/data.json";
import TrackedLink from "@/components/TrackedLink";

const { links } = siteData;
const floatingWhatsappMessage =
  "Olá! Vim pelo site da Mazinho Guinchos e gostaria de atendimento pelo WhatsApp.";
const floatingWhatsappHref = `${links.whatsapp}?text=${encodeURIComponent(floatingWhatsappMessage)}`;

export default function FloatingWhatsappButton() {
  return (
    <TrackedLink
      href={floatingWhatsappHref}
      className="floating-whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      eventName="click_whatsapp"
      aria-label="Abrir WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.11 4.89A9.89 9.89 0 0 0 3.68 16.8L2 22l5.35-1.65a9.89 9.89 0 0 0 4.72 1.2h.01a9.93 9.93 0 0 0 7.03-16.66Zm-7.03 14.98h-.01a8.22 8.22 0 0 1-4.2-1.15l-.3-.18-3.18.98 1.03-3.1-.2-.32a8.25 8.25 0 1 1 6.86 3.77Zm4.52-6.17c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.29.19-.54.07-.25-.13-1.05-.38-2-1.22a7.47 7.47 0 0 1-1.38-1.72c-.15-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.44-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.4-.55-.41l-.47-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.12.17 1.75 2.67 4.24 3.74.59.26 1.06.42 1.42.54.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
      </svg>
    </TrackedLink>
  );
}
