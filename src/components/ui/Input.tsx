"use client";
import React, { useState } from "react";
import SuccessIcon from "@public/form/success.svg";

type InputProps = {
  placeholder?: string;
  focusPlaceholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  error?: boolean;     // ← ДОБАВИЛИ
  maxLength?: number;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  focusPlaceholder,
  value,
  onChange,
  isValid,
  error = false,
  maxLength,
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        maxLength={maxLength}
        className={`
          w-full h-[60px] px-4 pt-5 rounded-[8px]
          border transition-all outline-none
          text-base font-normal font-helvetica text-main-gray
          placeholder:font-helvetica
          placeholder:text-sm
          placeholder:font-light
          placeholder:text-main-gray
          bg-main-white
          ${
            error
              ? "border-input-red"
              : isValid
              ? "border-input-green"
              : focused
              ? "border-main-dark"
              : "border-main-dark"
          }
        `}
      />

      <label
        className={`
          absolute left-4 transition-all pointer-events-none
          ${
            focused || hasValue
              ? "top-2 text-xs"
              : "top-1/2 -translate-y-1/2 text-base"
          }
          ${
            error
              ? "text-input-red"
              : isValid
              ? "text-input-green"
              : focused
              ? "text-main-blue"
              : "text-main-gray"
          }
        `}
      >
        {focused && focusPlaceholder ? focusPlaceholder : placeholder}
      </label>

      {isValid && !error && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2">
          <SuccessIcon />
        </span>
      )}
    </div>
  );
};

export default Input;
