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
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <div className="mt-4 bg-red-50 border border-red-200 rounded-2xl p-5">
          <p className="text-red-600 font-medium text-sm md:text-base leading-6">
            Unfortunately we <u>do not have space available for new cases</u> at
            this time. We invite you to join our <u>waiting list</u> where we
            will inform you when we will have new appointments. We apologize for
            any inconvenience caused and thank you for your interest and trust!
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mt-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <Forms />
        </div>
      </section>

      {/* Map */}
      <section className="mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <Map />
        </div>
      </section>
    </div>
  );
}
