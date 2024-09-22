export default function Map() {
  return (
    <div className="flex items-center flex-col md:flex-row justify-start mx-6 mt-6">
      <div
        className="
        mt-4
        md:ml-10
        lg:ml-10"
      >
        <h3 className="text-3xl mb-2">Address:</h3>
        <ul className="text-lg leading-8 font-light">
          <li>Hørkær 22</li>
          <li>Herlev 2730, Danmark</li>
          <li>
            Phone: +45 22 97 92 40{" "}
            <span className="text-red-400 text-base">
              (updated 16th September 2024)
            </span>
          </li>
          {/* +45 50 23 92 40 */}
          <li>info@neuro-exp.com</li>
          <li>Every day from 9.30 a.m. to 18.00.</li>
        </ul>
      </div>
      <div className="w-full mr-16">
        <iframe
          style={{ margin: "16px 32px" }}
          className="rounded-xlm-0 lg:m-0"
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=H%C3%B8rk%C3%A6r%2022,%20Herlev%202730,%20Danmark+(NeuroExp)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          {/* <a href="https://www.maps.ie/population/">Population Estimator map</a> */}
        </iframe>
      </div>
    </div>
  );
}
