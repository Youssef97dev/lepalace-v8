"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-black py-5 px-11  lg:px-28">
      <h1 className="text-[18px] lg:text-[40px] lg:leading-[48px] leading-[36px] uppercase">
        {"Get in touch"}
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="firstName">{"First Name"}</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="lastName">{"Last Name"}</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="email">{"Email"}</label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="phone">{"Phone"}</label>
          <PhoneInput
            id="phone"
            country={"ma"}
            inputClass="w-full"
            //value={this.state.phone}
            //onChange={(phone) => this.setState({ phone })}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full rounded-md p-2 focus:outline-none"
          rows={4}
        />
      </div>
      <button className="py-3 px-6 bg-black w-full text-background mr-auto cursor-pointer uppercase">
        {"Send"}
      </button>
    </form>
  );
};

export default ContactForm;
