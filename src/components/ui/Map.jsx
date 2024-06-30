export default function Map() {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row justify-center">
        <div className="mx-5 lg:mx-16">
          <h3 className="text-xl my-4">
            <b>Contact Us</b>
          </h3>
          <ul className="text-lg leading-8">
            <li>Address: Hørkær 22</li>
            <li>Herlev 2730, Danmark</li>
            <li>Phone: 45 50 23 92 40</li>
            <li>Email: info@neuro-exp.com</li>
            <li>Every day from 9.30 a.m. to 18.00.</li>
          </ul>
        </div>
        <div>
          <iframe
            className="rounded-xl my-6 lg:m-24"
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=H%C3%B8rk%C3%A6r%2022,%20Herlev%202730,%20Danmark+(NeuroExp)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Population Estimator map
            </a>
          </iframe>
        </div>
      </div>
    </>
  );
}
