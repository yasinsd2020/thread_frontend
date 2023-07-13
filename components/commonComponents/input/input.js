import React from "react";

const Input = ({ label, name, value, type, customCss,placeholder }) => {
  return (
    <div>
      <article>{label}</article>
      {/* Input div */}
      <div className={`md:w-[350px] w-[350px] h-[40px] border-b ${customCss && customCss}`}>
        <input
          type={type}
          className="w-full h-full outline-none border-none text-gray-500"
          value={value}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
        />
      </div>
    </div>
  );
};

export default Input;
