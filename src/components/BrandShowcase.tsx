"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function BrandShowcase() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="brand" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Brand Identity</div>
          <h2>Leela Worldwide.</h2>
          <p>
            A complete hospitality brand system — wordmark, signage, print
            collateral, and digital touchpoints designed to feel quietly
            luxurious across every surface a guest encounters.
          </p>
        </div>

        <div className={`brand-tags reveal ${isIntersecting ? "in" : ""}`}>
          <span className="brand-tag glass">Logo &amp; Wordmark</span>
          <span className="brand-tag glass">Signage Design</span>
          <span className="brand-tag glass">Print Collateral</span>
          <span className="brand-tag glass">Business Cards</span>
          <span className="brand-tag glass">Website Mockup</span>
          <span className="brand-tag glass">Brand Guidelines</span>
        </div>

        <div className={`brand-hero reveal ${isIntersecting ? "in" : ""}`}>
          <img
            src="/images/image_v5_3.png"
            alt="Leela Worldwide hotel entrance with illuminated signage and branded shopping bag"
          />
          <div className="brand-hero-cap">
            <div>
              <div className="bh-title">Leela Worldwide — Hotel Brand Identity</div>
              <div className="bh-sub">Full brand system, from wordmark to guest-facing collateral</div>
            </div>
          </div>
        </div>

        <div className="brand-grid">
          <div className={`brand-item span-2 tall reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_4.png"
              alt="Leela Worldwide logo lockup on a deep maroon background"
            />
            <div className="brand-item-cap">Wordmark &amp; Logo Lockup</div>
          </div>
          <div className={`brand-item reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_5.png"
              alt="Reception handing over a branded Leela Worldwide card at the front desk"
            />
            <div className="brand-item-cap">Guest Touchpoint Design</div>
          </div>
          <div className={`brand-item reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_6.jpg"
              alt="Leela Worldwide business card mockup on marble"
            />
            <div className="brand-item-cap">Business Card System</div>
          </div>
          <div className={`brand-item reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_7.jpg"
              alt="Leela Worldwide brand applied to mobile screen and illuminated exterior signage"
            />
            <div className="brand-item-cap">Signage &amp; App Screen</div>
          </div>
          <div className={`brand-item reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_8.jpg"
              alt="Leela Worldwide acrylic wall signage plaque with contact details"
            />
            <div className="brand-item-cap">Wall Signage Plaque</div>
          </div>
          <div className={`brand-item span-2 reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_9.jpg"
              alt="Leela Worldwide website design shown on laptop and mobile with a global network graphic"
            />
            <div className="brand-item-cap">Website Design</div>
          </div>
          <div className={`brand-item span-2 reveal ${isIntersecting ? "in" : ""}`}>
            <img
              src="/images/image_v5_10.jpg"
              alt="Leela Worldwide hotel brochure cover and inside spread showing rooms, gym, pool and restaurant"
            />
            <div className="brand-item-cap">Brochure Design</div>
          </div>
        </div>
      </div>
    </section>
  );
}
