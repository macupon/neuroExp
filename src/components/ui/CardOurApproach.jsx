import PropTypes from "prop-types";

export default function CardOurApproach({
  description,
  srcImg,
  title,
  subtitle,
}) {
  const pathToPublic = "../../public/";
  return (
    <div className="flex flex-col bg-white/50 p-8 lg:p-14 rounded-xl mt-0 mb-8 shadow-md">
      <div className="flex flex-col lg:flex-row items-top">
        <img
          src={pathToPublic + srcImg}
          alt=""
          className=" h-auto lg:h-[250px] lg:w-[350px] rounded-lg"
        />
        <div className="p-0 lg:p-0 mt-2 md:mt-0 lg:ml-10">
          <h2 className="font-medium lg:ml-0 text-2xl lg:text-3xl text-gray-700 mt-2 lg:mt-0">
            {title}
          </h2>
          <h3 className="text-gray-600 mt-0 text-lg italic">{subtitle}</h3>
          <p className="mt-2 text-truncate leading-7 md:leading-8 text-base font-light text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

CardOurApproach.propTypes = {
  srcImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
