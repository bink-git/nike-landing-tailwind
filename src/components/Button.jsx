const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white ">
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow icon"
          className="h5 ml-2 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
