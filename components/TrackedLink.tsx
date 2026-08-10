"use client";

import { MouseEvent, AnchorHTMLAttributes } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>,
) => {
  if (typeof window === "undefined") return;

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...eventParams });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams ?? {});
  }
};

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    trackEvent(eventName, eventParams);
  };

  return <a {...props} onClick={handleClick} />;
}
