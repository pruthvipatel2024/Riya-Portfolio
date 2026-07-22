"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AppShowcase() {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="apps" ref={elementRef}>
      <div className="wrap">
        <div className={`section-head reveal ${isIntersecting ? "in" : ""}`}>
          <div className="eyebrow">Mobile App Showcase</div>
          <h2>FinFlow &amp; HealthSync.</h2>
          <p>
            Two mobile app experiences crafted for high-frequency daily tasks —
            personal finance tracking and holistic health management.
          </p>
        </div>

        {/* App Project 1: Crustopia */}
        <div className="app-project">
          <div className={`app-head reveal ${isIntersecting ? "in" : ""}`}>
            <div>
              <div className="app-title">Crustopia</div>
              <div className="app-desc">
                A mouth-watering food ordering app experience for a gourmet
                pizza brand — custom crust selection, real-time order tracking,
                and high-converting checkout flows.
              </div>
            </div>
            <div className="app-tags">
              <span className="app-tag glass">Food &amp; Beverage</span>
              <span className="app-tag glass">Mobile App UI/UX</span>
              <span className="app-tag glass">5 Core Screens</span>
              <span className="app-tag glass">Figma Prototype</span>
            </div>
          </div>

          <div className={`phone-row reveal ${isIntersecting ? "in" : ""}`}>
            <div className="phone-slot">
              <div className="phone-glow"></div>
              <div className="phone-index">01</div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <img
                  src="/images/image_v5_11.jpg"
                  alt="Crustopia splash screen with dramatic dark background and falling chillies"
                />
                <div className="phone-cap">Splash Screen</div>
              </div>
            </div>
            <div className="phone-slot">
              <div className="phone-glow"></div>
              <div className="phone-index">02</div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <img
                  src="/images/image_v5_12.jpg"
                  alt="Crustopia sign-up screen with username and password fields"
                />
                <div className="phone-cap">Sign-Up</div>
              </div>
            </div>
            <div className="phone-slot">
              <div className="phone-glow"></div>
              <div className="phone-index">03</div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <img
                  src="/images/image_v5_13.jpg"
                  alt="Crustopia home feed showing delivery location, promo banner and popular pizzas"
                />
                <div className="phone-cap">Home Feed</div>
              </div>
            </div>
            <div className="phone-slot">
              <div className="phone-glow"></div>
              <div className="phone-index">04</div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <img
                  src="/images/image_v5_14.jpg"
                  alt="Crustopia product detail screen for Pepperoni Supreme Delight pizza with size and extras"
                />
                <div className="phone-cap">Product Detail</div>
              </div>
            </div>
            <div className="phone-slot">
              <div className="phone-glow"></div>
              <div className="phone-index">05</div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <img
                  src="/images/image_v5_15.jpg"
                  alt="Crustopia sign-out confirmation screen with mascot illustration"
                />
                <div className="phone-cap">Sign-Out</div>
              </div>
            </div>
          </div>
        </div>

        {/* App Project 2: GLAM Accessories */}
        <div className="app-project">
          <div className={`app-head reveal ${isIntersecting ? "in" : ""}`}>
            <div>
              <div className="app-title">GLAM Accessories — Jewellery &amp; Accessories App</div>
              <div className="app-desc">
                A soft, blush-toned shopping experience for watches, bags, rings and earrings — a coverflow-style gallery brings each screen forward as you hover, from splash through sign-in, browsing, and product detail.
              </div>
            </div>
            <div className="app-tags">
              <span className="app-tag glass">Splash Screen</span>
              <span className="app-tag glass">Sign-In</span>
              <span className="app-tag glass">Category Browsing</span>
              <span className="app-tag glass">Product Detail</span>
            </div>
          </div>

          <div className={`cf-row reveal ${isIntersecting ? "in" : ""}`}>
            <div className="cf-frame">
              <div className="cf-notch"></div>
              <img
                src="/images/image_v5_16.jpg"
                alt="GLAM Accessories splash screen"
              />
              <div className="cf-cap">Splash Screen</div>
            </div>
            <div className="cf-frame">
              <div className="cf-notch"></div>
              <img
                src="/images/image_v5_17.jpg"
                alt="GLAM Accessories sign-in screen"
              />
              <div className="cf-cap">Sign-In</div>
            </div>
            <div className="cf-frame">
              <div className="cf-notch"></div>
              <img
                src="/images/image_v5_18.jpg"
                alt="GLAM Accessories category browsing screen"
              />
              <div className="cf-cap">Category Browsing</div>
            </div>
            <div className="cf-frame">
              <div className="cf-notch"></div>
              <img
                src="/images/image_v5_19.jpg"
                alt="GLAM Accessories product detail screen"
              />
              <div className="cf-cap">Product Detail</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
