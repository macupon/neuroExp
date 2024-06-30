import { ProfileForm } from "../components/demo/ProfileForm";
import Map from "../components/ui/Map";

export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-col p-4 md:p-8 rounded-xl justify-center  md:leading-10">
      <div className="bg-white/50 p-4 md:p-8 mt-8 rounded-xl w-[100%]">
        <ProfileForm />
      </div>
      <div className="bg-white/50 rounded-xl shadow-md mx-5  my-8">
        <Map />
      </div>
    </div>
  );
}
