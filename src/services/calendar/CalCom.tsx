import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalCom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="bg-sky-300 text-sky-800 px-4 py-2 rounded-lg flex items-center"
      data-cal-namespace="30min"
      data-cal-link="amorato/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      Book a session
    </button>
  );
}
