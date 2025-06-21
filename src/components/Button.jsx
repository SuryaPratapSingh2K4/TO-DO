import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-green-600",
  textColor = "text-white",
  classname = "",
  ...props
}) {
  return (
      <button
      onClick={()=>{}}
        type={type}
        className={`flex items-center justify-center h-10 w-20 rounded-lg ${bgColor} ${textColor} ${classname}`}
        {...props}
      >
        {children}
      </button>

  );
}

export default Button;
