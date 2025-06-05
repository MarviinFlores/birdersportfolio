export default function HeroSection() {
  return (
<section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kilo</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Profesional</span>{" "}
            <br />
            Birding Guide
          </h1>
          <p className="hero--section-description">
           The Top bird list holder for Panama on eBird website 2025   .
            <br /> Euclides Kilo is the most  highly regarded birding guide in Panama 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
 
  );
}
