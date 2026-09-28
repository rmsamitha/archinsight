function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header page-width">
        <span className="wordmark">ArchInsight<span aria-hidden="true">.</span></span>
        <span className="header-note">A perspective on the built world</span>
      </header>
      <main id="main-content" className="page-width" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Observe. Explore. Imagine.</p>
            <h1 id="hero-heading">Architecture, ideas, and spaces</h1>
            <p className="intro">
              ArchInsight shares architectural knowledge, design ideas,
              industry trends, and selected projects. A place to explore
              how thoughtful design shapes the spaces we inhabit.
            </p>
            <a className="explore-link" href="#explore">Explore ArchInsight <span aria-hidden="true">↘</span></a>
          </div>
          <div className="architecture-study" aria-hidden="true">
            <div className="study-grid" />
            <div className="study-plane" />
            <div className="study-arch" />
            <div className="study-line" />
            <span className="study-caption">Form / Space / Light</span>
            <span className="study-number">01</span>
          </div>
        </section>
        <section id="explore" className="explore-section" aria-labelledby="explore-heading">
          <div className="section-heading">
            <h2 id="explore-heading">A closer look</h2>
            <p>Ideas, practice, and perspective.</p>
          </div>
          <div className="topics">
            <article className="topic">
              <span className="topic-number" aria-hidden="true">01 /</span>
              <h3>Articles</h3>
              <p>Architectural knowledge, design ideas, and industry trends that inform how we see the built environment.</p>
            </article>
            <article className="topic">
              <span className="topic-number" aria-hidden="true">02 /</span>
              <h3>Projects</h3>
              <p>Selected projects exploring the relationship between people, place, materials, and thoughtful design.</p>
            </article>
            <article className="topic">
              <span className="topic-number" aria-hidden="true">03 /</span>
              <h3>About the Architect</h3>
              <p>A space for the architectural perspective, creative interests, and design approach behind ArchInsight.</p>
            </article>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <p>© {new Date().getFullYear()} ArchInsight</p>
        <p>Thoughtful design. Shared perspectives.</p>
      </footer>
    </>
  )
}

export default App
