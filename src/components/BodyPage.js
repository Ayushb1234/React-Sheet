import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0f1117;
    --accent: #6366f1;
    --accent-light: #818cf8;
    --text: #f1f5f9;
    --muted: #94a3b8;
    --border: rgba(255,255,255,0.07);
    --editor-bg: #1e2030;
    --tab-active: #1e2030;
    --tab-inactive: #2a2d3e;
    --syn-keyword: #c792ea;
    --syn-fn: #82aaff;
    --syn-string: #c3e88d;
    --syn-tag: #f07178;
    --syn-attr: #ffcb6b;
    --syn-comment: #546e7a;
    --syn-plain: #d4d4d4;
    --syn-punct: #89ddff;
  }

  .workflow-wrapper {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 40px;
  }

  .workflow-section {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 80px;
    max-width: 1100px;
    width: 100%;
    align-items: center;
  }

  .copy { max-width: 480px; }

  .eyebrow {
    font-family: 'Sora', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: var(--accent-light);
    letter-spacing: 0.04em;
    margin-bottom: 18px;
  }

  .copy h2 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin-bottom: 24px;
  }

  .copy-desc {
    font-size: 15.5px;
    line-height: 1.75;
    color: var(--muted);
    margin-bottom: 40px;
  }

  .features { display: flex; flex-direction: column; gap: 28px; }

  .feature {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    opacity: 0;
    animation: fadeUp 0.6s ease forwards;
  }
  .feature:nth-child(1) { animation-delay: 0.1s; }
  .feature:nth-child(2) { animation-delay: 0.25s; }
  .feature:nth-child(3) { animation-delay: 0.4s; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .feature-icon {
    flex-shrink: 0;
    width: 36px; height: 36px;
    background: rgba(99,102,241,0.15);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }
  .feature-icon svg { width: 18px; height: 18px; }

  .feature-text p {
    font-size: 15px;
    line-height: 1.65;
    color: var(--muted);
    margin-top: 4px;
  }
  .feature-text strong {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
  }

  .code-window {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px var(--border);
    background: var(--editor-bg);
    animation: fadeUp 0.7s 0.15s ease both;
  }

  .code-window-header {
    height: 90px;
    background: linear-gradient(135deg, #6366f1 0%, #818cf8 60%, #a5b4fc 100%);
    border-radius: 20px 20px 0 0;
  }

  .editor-card {
    margin: -40px 20px 24px;
    background: var(--editor-bg);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border);
  }

  .tabs {
    display: flex;
    background: var(--tab-inactive);
    border-bottom: 1px solid var(--border);
  }

  .tab {
    padding: 10px 20px;
    font-size: 13px;
    font-family: 'Fira Code', monospace;
    color: var(--muted);
    cursor: pointer;
    border-right: 1px solid var(--border);
    transition: background 0.2s, color 0.2s;
  }
  .tab.active {
    background: var(--tab-active);
    color: var(--text);
  }

  .code-body {
    padding: 24px 28px 28px;
    font-family: 'Fira Code', monospace;
    font-size: 13.5px;
    line-height: 1.85;
    overflow-x: auto;
  }

  .line { white-space: pre; display: block; }
  .line.indent-1 { padding-left: 1.5em; }
  .line.indent-2 { padding-left: 3em; }
  .line.indent-3 { padding-left: 4.5em; }
  .line.blank { height: 1.4em; }

  .kw  { color: var(--syn-keyword); }
  .fn  { color: var(--syn-fn); }
  .str { color: var(--syn-string); }
  .tag { color: var(--syn-tag); }
  .att { color: var(--syn-attr); }
  .cmt { color: var(--syn-comment); }
  .pln { color: var(--syn-plain); }
  .pun { color: var(--syn-punct); }

  .cursor::after {
    content: '|';
    color: var(--accent-light);
    animation: blink 1s step-end infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  @media (max-width: 768px) {
    .workflow-section { grid-template-columns: 1fr; gap: 48px; }
    .copy { max-width: 100%; }
  }
`;

// ── Icons ──────────────────────────────────────────────
const CloudUploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

// ── Feature item ───────────────────────────────────────
const Feature = ({ icon, title, description }) => (
  <div className="feature">
    <div className="feature-icon">{icon}</div>
    <div className="feature-text">
      <p><strong>{title}</strong> {description}</p>
    </div>
  </div>
);

// ── Code line helpers ──────────────────────────────────
const Line = ({ indent = 0, blank = false, children }) => (
  <span className={`line${indent ? ` indent-${indent}` : ''}${blank ? ' blank' : ''}`}>
    {children}
  </span>
);

const T = ({ type, children }) => <span className={type}>{children}</span>;

// ── Code editor ────────────────────────────────────────
const CodeEditor = ({ activeTab, onTabChange }) => (
  <div className="code-window">
    <div className="code-window-header" />
    <div className="editor-card">
      <div className="tabs">
        {['NotificationSetting.jsx', 'App.jsx'].map((tab) => (
          <div
            key={tab}
            className={`tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="code-body">
        <Line><T type="kw">import</T> <T type="pun">{'{'}</T> <T type="fn">useState</T> <T type="pun">{'}'}</T> <T type="kw">from</T> <T type="str">'react'</T></Line>
        <Line><T type="kw">import</T> <T type="pun">{'{'}</T> <T type="fn">Switch</T> <T type="pun">{'}'}</T> <T type="kw">from</T> <T type="str">'@headlessui/react'</T></Line>
        <Line blank />
        <Line><T type="kw">function</T> <T type="fn">Example</T><T type="pun">{'() {'}</T></Line>
        <Line indent={1}><T type="kw">const</T> <T type="pun">[</T><T type="pln">enabled</T><T type="pun">,</T> <T type="pln">setEnabled</T><T type="pun">]</T> <T type="pun">=</T> <T type="fn">useState</T><T type="pun">(</T><T type="kw">true</T><T type="pun">)</T></Line>
        <Line blank />
        <Line indent={1}><T type="kw">return</T> <T type="pun">(</T></Line>
        <Line indent={2}><T type="pun">{'<'}</T><T type="tag">form</T> <T type="att">action</T><T type="pun">=</T><T type="str">"/notification-settings"</T> <T type="att">method</T><T type="pun">=</T><T type="str">"post"</T><T type="pun">{'>'}</T></Line>
        <Line indent={3}><T type="pun">{'<'}</T><T type="tag">Switch</T> <T type="att">checked</T><T type="pun">={'{'}enabled{'}'}</T> <T type="att">onChange</T><T type="pun">={'{'}setEnabled{'}'}</T> <T type="att">name</T><T type="pun">=</T><T type="str">"notificatio…"</T></Line>
        <Line indent={3}><T type="pun">{'{'}</T><T type="cmt">/* ... */</T><T type="pun">{'}'}</T></Line>
        <Line indent={3}><T type="pun">{'</'}</T><T type="tag">Switch</T><T type="pun">{'>'}</T></Line>
        <Line indent={3}><T type="pun">{'<'}</T><T type="tag">button</T><T type="pun">{'>'}</T><T type="pln">Submit</T><T type="pun">{'</'}</T><T type="tag">button</T><T type="pun">{'>'}</T></Line>
        <Line indent={2}><T type="pun">{'</'}</T><T type="tag">form</T><T type="pun">{'>'}</T></Line>
        <Line indent={1}><T type="pun">)</T></Line>
        <Line><T type="pun">{'}'}</T><span className="cursor" /></Line>
      </div>
    </div>
  </div>
);

// ── Main component ─────────────────────────────────────
export default function WorkflowSection() {
  const [activeTab, setActiveTab] = React.useState('NotificationSetting.jsx');

  return (
    <>
      <style>{styles}</style>
      <div className="workflow-wrapper">
        <section className="workflow-section">

          {/* Left copy */}
          <div className="copy">
            <p className="eyebrow">Deploy faster</p>
            <h2>A better workflow</h2>
            <p className="copy-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
              perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>

            <div className="features">
              <Feature
                icon={<CloudUploadIcon />}
                title="Push to deploy."
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              />
              <Feature
                icon={<LockIcon />}
                title="SSL certificates."
                description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
              />
              <Feature
                icon={<DatabaseIcon />}
                title="Database backups."
                description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
              />
            </div>
          </div>

          {/* Right code editor */}
          <CodeEditor activeTab={activeTab} onTabChange={setActiveTab} />

        </section>
      </div>
    </>
  );
}