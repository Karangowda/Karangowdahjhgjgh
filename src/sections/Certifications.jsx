import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

const CertificationCard = ({ cert, index }) => {
  return (
    <div className="flex-none marquee-item w-80">
      <div className="card-border rounded-3xl p-6 bg-black-100/60 border border-black-50 flex flex-col gap-4 justify-between hover:border-white-50/30 transition-colors h-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center mb-2">
            <img
              src={cert.imgPath}
              alt={cert.title}
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-50 text-center">
            {cert.organization}
          </p>
          <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
        </div>

        {cert.credentialId && (
          <div className="text-sm text-white-50 text-center">
            <p className="font-semibold">
              Credential ID: <span className="font-normal">{cert.credentialId}</span>
            </p>
          </div>
        )}

        {cert.verifyLink && (
          <a
            href={cert.verifyLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white flex items-center justify-center gap-2 hover:text-white/80 transition-colors"
          >
            <span>Verify credential</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L6.75 17.25M17.25 6.75H9.75M17.25 6.75V14.25"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  const hasCertifications = certifications && certifications.length > 0;
  // Duplicate certifications for seamless infinite scroll
  const marqueeItems = hasCertifications ? [...certifications, ...certifications] : [];

  return (
    <section
      id="certifications"
      className="flex-center section-padding xl:px-0 bg-black-100/20"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Certifications" sub="📜 Proof of Expertise" />

        <div className="mt-16 w-full">
          {hasCertifications ? (
            <div className="md:my-20 my-10 relative">
              <div className="marquee h-96">
                <div className="marquee-box md:gap-8 gap-5">
                  {marqueeItems.map((cert, index) => (
                    <CertificationCard
                      key={`${cert.title}-${cert.credentialId}-${index}`}
                      cert={cert}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="card-border rounded-3xl p-10 text-center">
              <p className="text-2xl font-semibold">No certifications yet</p>
              <p className="text-white-50 mt-4">
                Update the <code>certifications</code> list in{" "}
                <code>src/constants/index.js</code> to start showcasing your
                achievements.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

