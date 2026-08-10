import siteData from "@/app/data.json";

const { trustPhrase } = siteData;

export default function TrustPhraseSection() {
  return (
    <section className="trust-section reveal-on-scroll">
      <div className="site-container">
        <p className="trust-text">{trustPhrase.text}</p>
      </div>
    </section>
  );
}
