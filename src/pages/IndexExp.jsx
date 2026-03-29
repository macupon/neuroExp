import { Link } from "react-router";
import { Globe, Plane, MessageCircle, Star } from "lucide-react";
import Map from "../components/ui/Map";
import { heroText, pillars, services, testimonials } from "../text/homeText";

const iconMap = {
  Globe: Globe,
  Plane: Plane,
  MessageCircle: MessageCircle,
};

export const IndexExp = () => {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Hero"
        className="flex flex-col items-center py-10 lg:py-16"
      >
        <img
          src="/exp-logo.png"
          className="h-32 md:h-48 lg:h-64"
          alt="NeuroExp - Speech therapy for children"
        />
        <h1 className="text-purple font-bold text-2xl md:text-4xl lg:text-5xl mt-6 text-center">
          {heroText.title}
        </h1>
        <p className="text-gray-600 text-center mt-3 max-w-xl text-sm md:text-base">
          {heroText.tagline}
        </p>
        <Link
          to="/contactus"
          className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-6 py-3 transition-colors"
        >
          {heroText.cta}
        </Link>
        <video
          src="/neuroexp_video.mp4"
          controls
          loop
          className="mt-8 rounded-xl w-full max-w-2xl"
          aria-label="NeuroExp introduction video"
        />
      </section>

      {/* Pillars — EXPLORE / EXPERIENCE / EXPRESS */}
      <section aria-label="Our philosophy" className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <div
                key={pillar.key}
                className="bg-white/50 p-8 rounded-xl shadow-xl text-center"
              >
                <Icon className="w-8 h-8 text-sky-500 mx-auto mb-4" />
                <h3 className="text-md font-bold">{pillar.title}</h3>
                <p className="font-light text-sm leading-7 mt-3">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section aria-label="Our services" className="pb-12">
        <h2 className="font-bold text-purple text-center mb-8 text-3xl md:text-4xl lg:text-5xl">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="relative group rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform h-64"
            >
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="font-bold text-lg">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="Testimonials" className="pb-12">
        <h2 className="font-bold text-purple text-center mb-8 text-3xl md:text-4xl lg:text-5xl">
          What people say
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t) => (
            <div
              key={t.attribution}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 break-inside-avoid"
            >
              <div className="flex items-center justify-between">
                <div>
                  <cite className="block font-semibold text-purple text-sm not-italic">
                    {t.attribution}
                  </cite>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t.heading}
                  </p>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-sky-500 fill-sky-500"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="font-light text-sm leading-6 mt-3 text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section aria-label="Location" className="pb-8">
        <div className="bg-white/50 rounded-xl shadow-md">
          <Map />
        </div>
      </section>
    </>
  );
};
