import siteData from "@/app/data.json";

const { testimonials } = siteData;

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section section-navy reveal-on-scroll">
      <div className="site-container">
        <p className="section-eyebrow history-pill">{testimonials.eyebrow}</p>
        <h2 className="section-title section-title-light">{testimonials.title}</h2>

        <div className="testimonials-grid">
          {testimonials.items.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div>
                <div className="testimonial-head">
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{item.initials}</div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.date}</p>
                    </div>
                  </div>
                  <div className="testimonial-actions" aria-hidden="true">
                    <span>{testimonials.brandLetter}</span>
                    <span>↗</span>
                  </div>
                </div>
                <div className="testimonial-stars" aria-label="5 estrelas">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="testimonial-text">&ldquo;{item.text}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
