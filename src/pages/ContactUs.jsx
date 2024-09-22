import Forms from "@/components/ui/Forms";
import Map from "../components/ui/Map";

export default function ContactUs() {
  return (
    <div
      className="
      flex flex-col p-4 rounded-xl justify-center
      md:flex-col md:p-6 md:leading-10"
    >
      <h2
        className="
             text-left font-bold mb-0 ml-5 text-4xl 
             md:mb-2 md:mt-0 md:text-5xl
             lg:mt-0 lg:text-5xl
        "
      >
        Contact us
      </h2>
      <h3 className="text-left font-medium mt-3 mb-2 mx-5 text-xl text-red-500">
        Unfortunately we <u>do not have space available for new cases</u> at
        this time. We invite you to join our <u>waiting list</u> where we will
        inform you when we will have new appointments. We apologize for any
        inconvenience caused and thank you for your interest and trust!
      </h3>
      <div className="bg-white/50 rounded-xl shadow-xl mx-5 mt-8">
        <Forms />
      </div>
      <div className="bg-white/50 rounded-xl shadow-md mx-5 mt-4 h-30">
        <Map />
      </div>
    </div>
  );
}
