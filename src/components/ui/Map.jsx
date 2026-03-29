import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Map() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="md:w-1/3 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-purple">Find us</h3>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
          <div className="text-sm text-gray-700 dark:text-gray-200">
            <p>Horkær 22</p>
            <p>Herlev 2730, Danmark</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
          <div className="text-sm text-gray-700 dark:text-gray-200">
            <p>+45 22 97 92 40</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">* Updated September 2024</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-700 dark:text-gray-200">info@neuro-exp.com</p>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-700 dark:text-gray-200">Every day 9:30 - 18:00</p>
        </div>
      </div>
      <div className="md:w-2/3">
        <iframe
          className="rounded-xl w-full h-64 md:h-80"
          loading="lazy"
          referrerPolicy="no-referrer"
          title="NeuroExp location on Google Maps"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=H%C3%B8rk%C3%A6r%2022,%20Herlev%202730,%20Danmark+(NeuroExp)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
}
