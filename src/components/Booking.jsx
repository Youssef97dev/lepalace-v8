"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";

const optionsTime = [
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
  "20:15",
  "20:30",
  "20:45",
  "21:00",
  "21:15",
  "21:30",
  "21:45",
  "22:00",
  "22:15",
  "22:30",
  "22:45",
  "23:00",
  "23:15",
  "23:30",
  "23:45",
  "00:00",
  "00:15",
  "00:30",
  "00:45",
  "01:00",
  "01:15",
  "01:30",
  "01:45",
  "02:00",
];

const optionsGuests = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 Guests",
  "6 Guests",
  "7 Guests",
  "8 Guests",
  "9 Guests",
  "10 Guests",
  "11 Guests",
  "12 Guests",
];

const Booking = () => {
  const { t } = useTranslation();
  return (
    <form className="w-full flex flex-col justify-center items-center uppercase gap-4 text-[12.08px] py-56 mt-5 px-11  lg:px-8 overflow-y-auto">
      <h1 className="text-[14px] lg:text-[40px] lg:leading-[48px]  ">
        {"Booking Request"}
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
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="email">{"Email"}</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
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
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="guests">{"Guests"}</label>
          <select
            name="guests"
            id="guests"
            className="w-full rounded-md p-2 focus:outline-none bg-white"
          >
            {optionsGuests.map((guest, i) => (
              <option value={guest} key={i}>
                {guest}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="reservationDate">{"Reservation Date"}</label>
        <input
          type="date"
          name="reservationDate"
          id="reservationDate"
          className="w-full rounded-md p-2 focus:outline-none bg-white"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="time">{"Time"}</label>
        <select
          name="time"
          id="time"
          className="w-full rounded-md p-2 focus:outline-none bg-white"
        >
          {optionsTime.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <button className="py-3 px-6 mt-4 w-full bg-black text-white mr-auto cursor-pointer uppercase">
        {"Request"}
      </button>
    </form>
  );
};

export default Booking;
