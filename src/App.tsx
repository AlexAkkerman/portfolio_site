import { useState, useEffect, useCallback } from "react";
import { translations, type Lang } from "./i18n";
import { videos, photos, type PhotoItem, type VideoCategory } from "./data";
import "./index.css";

function formatViews(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

function App() {
  const [lang, setLang] = useState<Lang>("uk");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoTab, setVideoTab] = useState<VideoCategory>("action");
  const [photoTab, setPhotoTab] = useState<"film" | "digital">("film");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{
    items: PhotoItem[];
    index: number;
  } | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "uk" ? "uk" : lang;
  }, [lang]);

  const openLightbox = (items: PhotoItem[], index: number) => {
    setLightbox({ items, index });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigateLightbox = useCallback(
    (dir: -1 | 1) => {
      if (!lightbox) return;
      const len = lightbox.items.length;
      const next = (lightbox.index + dir + len) % len;
      setLightbox({ ...lightbox, index: next });
    },
    [lightbox]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, navigateLightbox]);

  const filteredVideos = videos.filter((v) => v.category === videoTab);
  const filteredPhotos = photos.filter((p) => p.type === photoTab);

  const getEmbedUrl = (provider: string, id: string, autoplay = false) => {
    if (provider === "youtube") {
      const params = new URLSearchParams({
        rel: "0",
        modestbranding: "1",
        controls: "1",
        iv_load_policy: "3",
        fs: "1",
        playsinline: "1",
        cc_load_policy: "0",
        disablekb: "0",
      });
      if (autoplay) params.set("autoplay", "1");
      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }
    // Vimeo — уже довольно чистый
    const vimeoParams = "title=0&byline=0&portrait=0&sidedock=0";
    return `https://player.vimeo.com/video/${id}?${vimeoParams}${autoplay ? "&autoplay=1" : ""}`;
  };

  const getThumbUrl = (provider: string, id: string) => {
    if (provider === "youtube") {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }
    // Vimeo thumbnail via vumbnail
    return `https://vumbnail.com/${id}.jpg`;
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#" className="logo">
            Alex <span>Mazurik</span>
          </a>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#videos" onClick={() => setMenuOpen(false)}>
              {t.nav.videos}
            </a>
            <a href="#photos" onClick={() => setMenuOpen(false)}>
              {t.nav.photos}
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              {t.nav.about}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}
            </a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="lang-switch">
              {(["uk", "ru", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  className={`lang-btn ${lang === l ? "active" : ""}`}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-label">{t.hero.label}</div>
          <h1>
            {t.hero.title}
            <br />
            <span
              className="accent"
              style={{ fontSize: "0.55em", fontWeight: 400 }}
            >
              {t.hero.role}
            </span>
          </h1>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-actions">
            <a href="#videos" className="btn btn-primary">
              {t.hero.ctaVideos}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </section>

      <section id="videos" className="section">
        <div className="container">
          <h2 className="section-title">{t.videos.title}</h2>
          <p className="section-subtitle">{t.videos.subtitle}</p>

          <div className="photo-tabs" style={{ marginBottom: 36 }}>
            <button
              className={`tab-btn ${videoTab === "action" ? "active" : ""}`}
              onClick={() => {
                setVideoTab("action");
                setPlayingId(null);
              }}
            >
              {t.videos.action}
            </button>
            <button
              className={`tab-btn ${videoTab === "documentary" ? "active" : ""}`}
              onClick={() => {
                setVideoTab("documentary");
                setPlayingId(null);
              }}
            >
              {t.videos.documentary}
            </button>
            <button
              className={`tab-btn ${videoTab === "youtube" ? "active" : ""}`}
              onClick={() => {
                setVideoTab("youtube");
                setPlayingId(null);
              }}
            >
              {t.videos.youtube}
            </button>
          </div>

          <div className="videos-grid">
            {filteredVideos.map((v) => {
              const isPlaying = playingId === v.id;
              return (
                <article key={v.id} className="video-card">
                  <div className="video-thumb">
                    {isPlaying ? (
                      <iframe
                        src={getEmbedUrl(v.provider, v.videoId, true)}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={v.thumbnail || getThumbUrl(v.provider, v.videoId)}
                          alt={v.title}
                          loading="lazy"
                        />
                        <button
                          className="video-play"
                          onClick={() => setPlayingId(v.id)}
                          aria-label="Play"
                        >
                          <span className="play-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                  <div className="video-info">
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                    {v.category === "youtube" && typeof v.views === "number" && (
                      <p className="video-views">
                        {formatViews(v.views)} {t.videos.views}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="photos"
        className="section"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="container">
          <h2 className="section-title">{t.photos.title}</h2>
          <p className="section-subtitle">{t.photos.subtitle}</p>

          <div className="photo-tabs">
            <button
              className={`tab-btn ${photoTab === "film" ? "active" : ""}`}
              onClick={() => setPhotoTab("film")}
            >
              {t.photos.film}
            </button>
            <button
              className={`tab-btn ${photoTab === "digital" ? "active" : ""}`}
              onClick={() => setPhotoTab("digital")}
            >
              {t.photos.digital}
            </button>
          </div>

          <div className="photos-grid">
            {filteredPhotos.map((photo, i) => (
              <div
                key={photo.id}
                className="photo-item"
                onClick={() => openLightbox(filteredPhotos, i)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="about-label">{t.about.label}</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                {t.about.title}
              </h2>
            </div>
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-value">40+</div>
                  <div className="stat-label">{t.about.stats.projects}</div>
                </div>
                <div className="stat">
                  <div className="stat-value">5+</div>
                  <div className="stat-label">{t.about.stats.years}</div>
                </div>
                <div className="stat">
                  <div className="stat-value">20+</div>
                  <div className="stat-label">{t.about.stats.clients}</div>
                </div>
                <div className="stat">
                  <div className="stat-value">—</div>
                  <div className="stat-label">{t.about.stats.awards}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>

          <div className="contact-inner">
            <div>
              <div className="contact-links">
                <a
                  href="mailto:hello@example.com"
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    width="20"
                    height="20"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>hello@example.com</span>
                </a>
                <a
                  href="https://t.me/username"
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  <span>Telegram</span>
                </a>
                <a
                  href="https://instagram.com/username"
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    width="20"
                    height="20"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(t.contact.formNote);
              }}
            >
              <div className="form-group">
                <label>{t.contact.formName}</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>{t.contact.formEmail}</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>{t.contact.formMessage}</label>
                <textarea name="message" required />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start" }}
              >
                {t.contact.formSend}
              </button>
              <p style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                {t.contact.formNote}
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">{t.footer}</div>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={lightbox.items[lightbox.index].src}
            alt={lightbox.items[lightbox.index].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default App;
