// eslint-disable-next-line react/prop-types
export const MenuIcon = ({ handleClick }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          fill: "rgba(0, 0, 0, 1)",
          transform: "",
          msFilter: "",
          cursor: "pointer",
        }}
        onClick={() => handleClick()}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </>
  );
};
