import Forms from "@/components/ui/Forms";
import Map from "../components/ui/Map";

export default function ContactUs() {
  return (
    <div className="py-8">
      {/* Cover image */}
      <img
        src="/cover2_files/kidPlaying.jpg"
        alt="Child playing"
        className="w-full max-h-72 object-cover rounded-xl"
      />

      {/* Title */}
      <section className="mt-8">
        <h1 className="heading-h1 p-0">CONTACT US</h1>
        <p className="font-light text-base leading-7 md:pt-3">
          We are currently accepting new cases. Please complete and submit the form below, and a member of our team will contact you shortly. Thank you for your interest and trust.
        </p>
      </section>

      {/* Form */}
      <section className="mt-10">
        <div className="card-style">
          <Forms />
        </div>
      </section>

      {/* Map */}
      <section className="mt-8">
        <div className="bg-white/50 dark:bg-gray-500/50 rounded-xl shadow-md">
          <Map />
        </div>
      </section>
    </div>
  );
}
