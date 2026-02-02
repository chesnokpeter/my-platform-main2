"use client";

import React, { useState } from "react";
import Input from "../ui/Input";

type GlobalFormProps = {
  option?: boolean;
  light?: boolean;
  mix?: boolean;
  children: (props: { loading: boolean }) => React.ReactNode;
  submitText: string;
};

const GlobalForm = ({
  option = false,
  light = false,
  mix = false,
  children,
  submitText,
}: GlobalFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [busOption, setBusOption] = useState<string | null>(null);

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [busError, setBusError] = useState(false);

  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    setPhone(value);

    if (value.length === 11) {
      setPhoneValid(true);
      setPhoneError(false);
    } else {
      setPhoneValid(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (value.trim().length >= 3) {
      setNameValid(true);
      setNameError(false);
    } else {
      setNameValid(false);
    }
  };

  const validate = () => {
    let valid = true;

    if (name.trim().length < 3) {
      setNameError(true);
      setNameValid(false);
      valid = false;
    }

    if (phone.length < 11) {
      setPhoneError(true);
      setPhoneValid(false);
      valid = false;
    }

    if (option && !busOption) {
      setBusError(true);
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(false);
    setPhoneError(false);
    setBusError(false);

    if (!validate()) return;

    const payload = {
      name,
      phone,
      buses: option ? busOption : null,
    };

    try {
      setLoading(true);

      await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setName("");
      setPhone("");
      setBusOption(null);
      setNameValid(false);
      setPhoneValid(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 lg:max-w-[800px] w-full">
      <Input
        placeholder="Имя"
        value={name}
        onChange={handleNameChange}
        error={nameError}
        isValid={nameValid}
      />

      <Input
        placeholder="Телефон"
        value={phone}
        onChange={handlePhoneChange}
        error={phoneError}
        isValid={phoneValid}
        maxLength={11}
      />

      {option && (
        <div>
          <div
            className={`font-helvetica text-sm font-light ${
              busError
                ? "text-input-red"
                : mix
                ? "text-main-dark"
                : light
                ? "text-main-dark"
                : "text-main-white"
            }`}
          >
            Количество автобусов в парке
          </div>

          <div className="mt-[10px] flex gap-[10px]">
            {["1", "2-5", ">5"].map((item) => {
              const isActive = busOption === item;

              const baseClass = mix
                ? isActive
                  ? "bg-main-dark text-white"
                  : "bg-main-light-blue text-main-dark"
                : light
                ? isActive
                  ? "bg-main-dark text-white"
                  : "bg-main-white text-main-dark"
                : isActive
                ? "bg-main-dark text-white"
                : "bg-main-light-blue text-main-dark";

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setBusOption(item);
                    setBusError(false);
                  }}
                  className={`py-[4px] px-[14px] rounded-[2px] text-sm cursor-pointer hover:bg-main-dark hover:text-main-white transition-all duration-300 ${baseClass}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {children({ loading })}
      <div
        className={`max-w-[475px] mx-auto font-helvetica text-xs xxl:text-base font-light text-center ${
          mix ? "text-main-gray" : light ? "text-main-dark" : "text-main-white"
        }`}
      >
        Нажимая на кнопку “<span>{submitText}</span>” вы соглашаетесь с{" "}
        <a href="#" className="underline">
          Политикой конфиденциальности
        </a>
      </div>
    </form>
  );
};

export default GlobalForm;
