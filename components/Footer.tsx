import "../styles/footer.css"

const Footer = () => {
  const links = [
    {
      title: "empresa",
      links: ["link1", "link2", "link3", "link4"],
    },
    {
      title: "produtos",
      links: ["link5", "link6", "link7", "link8"],
    },
    {
      title: "suporte",
      links: ["link9", "link10", "link11", "link12"],
    },
  ]

  return (
    <footer className="container-md">
      <div className="footer-content">
        {/* render titles and subtitles */}
        {links.map(section => {
          return (
            <div key={section.title} className="footer-section">
              <h3>{section.title}</h3>
              <ul className="footer-links">
                {section.links.map(sublink => {
                  return (
                    <li key={sublink}>
                      <a href="#produto1234">{sublink}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}

        <div className="company-info">
          <div className="company-icon" aria-hidden="true">
            &#xf0f7;
          </div>
          <p className="company-slogan">Inovação em cada detalhe</p>
          <p>Construindo o futuro, hoje</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <div className="social-icons">
          {/* <i style="font-size: 24px" className="fa">
            &#xf09a;
          </i>
          <i style="font-size: 24px" className="fa">
            &#xf099;
          </i>
          <i style="font-size: 24px" className="fa">
            &#xf16d;
          </i>
          <i style="font-size: 24px" className="fa">
            &#xf0e1;
          </i> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
