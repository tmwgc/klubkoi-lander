import Image from "next/image";
import React, { useState } from "react";

interface InputFieldProps {
  type: "email" | "password";
  placeholder: string;
  iconSrc: string;
  ariaLabel: string;
  showPasswordToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  iconSrc,
  ariaLabel,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex gap-2.5 px-5 py-3 w-full tracking-wider whitespace-nowrap rounded-sm bg-neutral-500 bg-opacity-50 min-h-[47px] mb-2.5">
      <Image
        loading="lazy"
        src={iconSrc}
        alt=""
        width={19}
        height={19}
        className="object-contain shrink-0 my-auto aspect-square w-[19px]"
      />
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="w-full bg-transparent outline-none"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="w-[22px]"
        >
          <Image
            loading="lazy"
            src="/icons/eye.svg"
            width={22}
            height={22}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
          />
        </button>
      )}
    </div>
  );
};

export default InputField;
