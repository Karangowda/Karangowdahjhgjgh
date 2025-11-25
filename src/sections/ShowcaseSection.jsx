import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://github.com/Karangowda/azure-formulae1"
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 w-full h-full z-10"
              >
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </a>
            </div>
            <div className="text-content">
              <h2>
              This project endeavors to furnish a data analysis solution tailored for Formula-1 race results through the utilization of Azure Databricks. 
              </h2>
              <p className="text-white-50 md:text-xl">
              It constitutes an ETL pipeline designed to intake Formula 1 motor racing data, subsequently transforming it, and then loading it into our data warehouse to facilitate reporting and analytical pursuits.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <a
                  href="https://github.com/Karangowda/sentiment-analysis"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 w-full h-full z-10"
                >
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </a>
              </div>
              <h2>Sentiment analysis for amazon review</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://github.com/Karangowda/NY-taxi-llm"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 w-full h-full z-10"
                >
                  <img src="/images/project3.png" alt="YC Directory App" />
                </a>
              </div>
              <h2>Creating regression model for better analysis of data</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
