import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Karan Gowda
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, download, external }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  download={download ? link.split("/").pop() : undefined}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  onClick={async (e) => {
                    if (download) {
                      e.preventDefault();
                      try {
                        const response = await fetch(link);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const linkElement = document.createElement("a");
                        linkElement.href = url;
                        linkElement.download = link.split("/").pop();
                        document.body.appendChild(linkElement);
                        linkElement.click();
                        document.body.removeChild(linkElement);
                        window.URL.revokeObjectURL(url);
                      } catch (error) {
                        console.error("Error downloading file:", error);
                        // Fallback to direct link
                        window.open(link, "_blank");
                      }
                    }
                  }}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
