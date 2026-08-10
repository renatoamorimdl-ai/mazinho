import Image from "next/image";
import siteData from "@/app/data.json";

const { history } = siteData;

export default function HistorySection() {
  return (
    <section id="sobre" className="section section-navy reveal-on-scroll">
      <div className="site-container history-grid">
        <div>
          <span className="history-pill">{history.pill}</span>
          <h2 className="section-title section-title-light history-title">{history.title}</h2>
          <p className="history-description">{history.descriptionOne}</p>
          <p className="history-description">{history.descriptionTwo}</p>

          <div className="history-stats">
            {history.stats.map((stat) => (
              <div key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="history-media-wrap">
          <div className="history-media">
            <Image
              src="/maquinas/maquinas-8.PNG"
              alt={history.mediaAriaLabel}
              className="history-media-photo"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="history-badge">
            <p>{history.badgeTitle}</p>
            <span>{history.badgeText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
