"use client";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";
import Link from "next/link";
import { usePalace } from "@/context/PalaceContext";

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
  const { closeBook } = usePalace();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [reservationDate, setReservationDate] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    guests: 0,
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clickBook = async (e) => {
    const serviceId = "service_76uq5we";
    const templateId = "template_ocwgpfi";
    console.log(formData);
    e.preventDefault();
    try {
      setLoading(true);
      const res = await emailjs.send(serviceId, templateId, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: phone,
        number_personne: formData.guests,
        date: new Intl.DateTimeFormat("en-En", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(formData.reservationDate),
        time: formData.time,
      });
      if (res.status === 200) {
        setMessageSent(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    emailjs.init("JdMTLLWNRu76H_EKb");
  }, []);

  return (
    <>
      {!messageSent ? (
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
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="lastName">{"Last Name"}</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full rounded-md p-2 focus:outline-none"
                onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
              <label htmlFor="guests">{"Guests"}</label>
              <select
                name="guests"
                id="guests"
                className="w-full rounded-md p-2 focus:outline-none bg-white"
                onChange={(e) => handleChange(e)}
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
              onChange={setReservationDate}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-1">
            <label htmlFor="time">{"Time"}</label>
            <select
              name="time"
              id="time"
              className="w-full rounded-md p-2 focus:outline-none bg-white"
              onChange={(e) => handleChange(e)}
            >
              {optionsTime.map((time) => (
                <option value={time} key={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={(e) => clickBook(e)}
            className="py-3 px-6 mt-4 w-full bg-black text-white mr-auto cursor-pointer uppercase"
          >
            {loading ? <ClockLoader size={20} color="#ffffff" /> : "Request"}
          </button>
        </form>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5 p-3.5  bg-background mt-3">
          <span className="pr-2">
            <strong className="mr-1">Success!</strong>Thank you for your
            request, we will get back to you as soon as possible
          </span>
          <Link
            href="/"
            onClick={() => closeBook()}
            className="ml-auto w-full text-center bg-black text-[#DDF5F0] rounded hover:opacity-80 px-3 py-1"
          >
            Home
          </Link>
        </div>
      )}
    </>
  );
};

export default Booking;
