import React from "react";

export default function HeroLandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0d1117;
          --bg2: #111827;
          --accent: #5b4ef8;
          --accent-hover: #4a3de0;
          --text: #ffffff;
          --muted: #9ca3af;
          --grid-line: rgba(255,255,255,0.04);
        }

        body {
          background-color: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
        }

        body::after {
          content: '';
          position: fixed;
          top: -200px; left: -200px;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(91,78,248,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        nav {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 60px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo svg { width: 36px; height: 36px; }

        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          color: var(--text);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .nav-links a:hover { opacity: 1; }

        .nav-login {
          color: var(--text);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          opacity: 0.85;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-login:hover { opacity: 1; }

        .hero {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 40px 60px 120px;  /* 👈 increase bottom padding */
  gap: 40px;
}

        .hero-left {
          max-width: 620px;
          animation: fadeUp 0.8s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-left h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 28px;
        }

        .hero-left p {
          font-size: 16px;
          line-height: 1.75;
          color: var(--muted);
          max-width: 500px;
          margin-bottom: 40px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .btn-primary {
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Sora', sans-serif;
        }
        .btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); }

        .btn-ghost {
          color: var(--text);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.85;
          transition: opacity 0.2s, gap 0.2s;
        }
        .btn-ghost:hover { opacity: 1; gap: 10px; }

        .hero-right {
          position: relative;
          height: 600px;
          animation: fadeUp 0.8s 0.2s ease both;
        }

        .photo {
          position: absolute;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          transition: transform 0.4s ease;
        }
        .photo:hover { transform: scale(1.03) rotate(0deg) !important; z-index: 5; }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .p1 { width: 220px; height: 260px; left: 0;   top: 80px;  transform: rotate(-1deg); }
        .p2 { width: 190px; height: 250px; left: 200px; top: 0;   transform: rotate(1.5deg); }
        .p3 { width: 200px; height: 240px; left: 390px; top: 60px; transform: rotate(-0.5deg); }
        .p4 { width: 175px; height: 210px; left: 590px; top: 0;   transform: rotate(2deg); }
        .p5 { width: 190px; height: 230px; left: 390px; top: 320px; transform: rotate(1deg); }
        .p6 { width: 175px; height: 200px; left: 590px; top: 310px; transform: rotate(-1.5deg); }

        @media (max-width: 1100px) {
          nav {
            padding: 20px 24px;
            gap: 16px;
            flex-wrap: wrap;
          }

          .nav-links {
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 24px;
            min-height: auto;
          }

          .hero-right {
            height: 520px;
            margin-top: 20px;
            transform: scale(0.92);
            transform-origin: top left;
          }
        }

        @media (max-width: 760px) {
          .hero-right {
            height: 430px;
            transform: scale(0.68);
            margin-left: -28px;
          }

          .hero-left h1 {
            font-size: 42px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <nav>
        <div className="logo">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22c3-6 6-10 10-10s7 8 10 8 6-4 8-10" stroke="#5b4ef8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M4 28c3-6 6-10 10-10s7 8 10 8 6-4 8-10" stroke="#8b7cf8" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.5" />
          </svg>
        </div>

        <ul className="nav-links">
          <li><a href="#">Product</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Company</a></li>
        </ul>

        <a href="#" className="nav-login">Log in &nbsp;→</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <h1>We're changing the<br />way people connect</h1>
          <p>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get started</button>
            <a href="#" className="btn-ghost">Live demo &nbsp;→</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo p1">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Team meeting" />
          </div>
          <div className="photo p2">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" alt="Woman working" />
          </div>
          <div className="photo p3">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Office collab" />
          </div>
          <div className="photo p4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Smiling person" />
          </div>
          <div className="photo p5">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80" alt="People chatting" />
          </div>
          <div className="photo p6">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80" alt="Working at desk" />
          </div>
        </div>
      </section>
    </>
  );
}
