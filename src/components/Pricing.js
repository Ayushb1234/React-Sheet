import React from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  const hobbyFeatures = [
    "25 products",
    "Up to 10,000 subscribers",
    "Advanced analytics",
    "24-hour support response time",
  ];

  const enterpriseFeatures = [
    "Unlimited products",
    "Unlimited subscribers",
    "Advanced analytics",
    "Dedicated support representative",
    "Marketing automations",
    "Custom integrations",
  ];

  return (
    <div style={styles.page}>
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />

      <div style={styles.container}>
        <div style={styles.headerWrap}>
          <div style={styles.kicker}>Pricing</div>
          <h1 style={styles.title}>Choose the right plan for you</h1>
          <p style={styles.subtitle}>
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div style={styles.cardsWrap}>
          <div style={styles.hobbyCard}>
            <div style={styles.cardInner}>
              <div>
                <div style={styles.planNameLight}>Hobby</div>
                <div style={styles.priceRowLight}>
                  <span style={styles.priceLight}>$29</span>
                  <span style={styles.perMonthLight}>/month</span>
                </div>
                <p style={styles.descriptionLight}>
                  The perfect plan if you're just getting started with our product.
                </p>
              </div>

              <ul style={styles.featureListLight}>
                {hobbyFeatures.map((item) => (
                  <li key={item} style={styles.featureItemLight}>
                    <Check size={18} strokeWidth={3} style={styles.checkLight} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button style={styles.ghostButton}>Get started today</button>
            </div>
          </div>

          <div style={styles.enterpriseCard}>
            <div style={styles.cardInnerDark}>
              <div>
                <div style={styles.planNameDark}>Enterprise</div>
                <div style={styles.priceRowDark}>
                  <span style={styles.priceDark}>$99</span>
                  <span style={styles.perMonthDark}>/month</span>
                </div>
                <p style={styles.descriptionDark}>
                  Dedicated support and infrastructure for your company.
                </p>
              </div>

              <ul style={styles.featureListDark}>
                {enterpriseFeatures.map((item) => (
                  <li key={item} style={styles.featureItemDark}>
                    <Check size={18} strokeWidth={3} style={styles.checkDark} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button style={styles.primaryButton}>Get started today</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; height: 100%; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.93) 35%, rgba(243,232,255,0.92) 70%, rgba(236,242,255,0.98) 100%)",
    color: "#111827",
  },
  glowLeft: {
    position: "absolute",
    inset: "auto auto -120px -160px",
    width: 520,
    height: 520,
    borderRadius: "999px",
    background: "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
    filter: "blur(8px)",
    pointerEvents: "none",
  },
  glowRight: {
    position: "absolute",
    top: -120,
    right: -140,
    width: 620,
    height: 620,
    borderRadius: "999px",
    background: "radial-gradient(circle, rgba(186, 139, 255, 0.28) 0%, rgba(186, 139, 255, 0) 68%)",
    filter: "blur(10px)",
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "78px 32px 64px",
  },
  headerWrap: {
    textAlign: "center",
    maxWidth: 860,
    margin: "0 auto",
  },
  kicker: {
    color: "#5b4ef8",
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 16,
  },
  title: {
    margin: 0,
    fontSize: "clamp(40px, 5vw, 72px)",
    lineHeight: 1.05,
    letterSpacing: "-0.05em",
    fontWeight: 800,
    color: "#0f172a",
  },
  subtitle: {
    margin: "22px auto 0",
    maxWidth: 760,
    fontSize: 22,
    lineHeight: 1.55,
    fontWeight: 500,
    color: "#5b6475",
  },
  cardsWrap: {
    position: "relative",
    marginTop: 86,
    minHeight: 520,
  },
  hobbyCard: {
    position: "absolute",
    left: 38,
    top: 62,
    width: 430,
    background: "rgba(255,255,255,0.78)",
    border: "1px solid rgba(149, 156, 178, 0.25)",
    borderRadius: 26,
    boxShadow: "0 30px 60px rgba(17, 24, 39, 0.06)",
    backdropFilter: "blur(6px)",
  },
  enterpriseCard: {
    position: "absolute",
    right: 90,
    top: 0,
    width: 430,
    background: "#0f172a",
    borderRadius: 26,
    boxShadow: "0 30px 70px rgba(15, 23, 42, 0.22)",
  },
  cardInner: {
    padding: "42px 40px 34px",
    display: "flex",
    flexDirection: "column",
    minHeight: 500,
  },
  cardInnerDark: {
    padding: "42px 40px 34px",
    display: "flex",
    flexDirection: "column",
    minHeight: 540,
  },
  planNameLight: {
    color: "#5b4ef8",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 18,
  },
  planNameDark: {
    color: "#6b78ff",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 18,
  },
  priceRowLight: {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 28,
  },
  priceRowDark: {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 28,
  },
  priceLight: {
    fontSize: 54,
    lineHeight: 1,
    fontWeight: 800,
    color: "#0f172a",
    letterSpacing: "-0.04em",
  },
  priceDark: {
    fontSize: 54,
    lineHeight: 1,
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: "-0.04em",
  },
  perMonthLight: {
    color: "#7b8496",
    fontSize: 18,
    fontWeight: 500,
  },
  perMonthDark: {
    color: "rgba(255,255,255,0.55)",
    fontSize: 18,
    fontWeight: 500,
  },
  descriptionLight: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.55,
    color: "#5b6475",
    maxWidth: 330,
  },
  descriptionDark: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.75)",
    maxWidth: 330,
  },
  featureListLight: {
    listStyle: "none",
    padding: 0,
    margin: "34px 0 0",
    display: "grid",
    gap: 16,
    color: "#5b6475",
    fontSize: 16,
  },
  featureListDark: {
    listStyle: "none",
    padding: 0,
    margin: "34px 0 0",
    display: "grid",
    gap: 16,
    color: "rgba(255,255,255,0.82)",
    fontSize: 16,
  },
  featureItemLight: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  featureItemDark: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  checkLight: {
    color: "#5b4ef8",
    flexShrink: 0,
  },
  checkDark: {
    color: "#6b78ff",
    flexShrink: 0,
  },
  ghostButton: {
    marginTop: "auto",
    width: "100%",
    height: 38,
    borderRadius: 6,
    border: "1px solid rgba(91, 78, 248, 0.32)",
    background: "rgba(255,255,255,0.6)",
    color: "#5b4ef8",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },
  primaryButton: {
    marginTop: "auto",
    width: "100%",
    height: 38,
    borderRadius: 6,
    border: "none",
    background: "#6366f1",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
  },
};