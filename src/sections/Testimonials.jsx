import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full overflow-hidden border border-black-50 bg-black-100 flex items-center justify-center shrink-0">
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    style={
                      testimonial.scale
                        ? {
                            transform: `scale(${testimonial.scale})`,
                            transformOrigin: "center",
                          }
                        : undefined
                    }
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
