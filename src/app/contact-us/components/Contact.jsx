import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-10 py-10 text-black">
      <div className="w-full flex lg:flex-row flex-col justify-start items-start gap-5">
        <div className="w-full flex flex-col justify-start items-start">
          <span className="mb-3 font-semibold tracking-widest text-[16px]">{`Location`}</span>
          <p className="text-[15px]">{`Av. Echouhada Rue Ahmed Chawqui Hivernage1`}</p>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <span className="mb-3 font-semibold tracking-widest text-[16px]">{`Contact us`}</span>
          <p className="text-[15px]">{`PHONE : +212 6 75 48 00 18`}</p>
          <p className="text-[15px]">{`reservation@le-palacemarrakech.com`}</p>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-start items-start gap-5">
        <div className="w-full flex flex-col justify-start items-start">
          <span className="mb-3 font-semibold tracking-widest text-[16px]">{`Opening hours`}</span>
          <p className="text-[15px]">{`Every Day: 07:00PM - 02:00AM`}</p>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <span className=" font-semibold tracking-widest text-[16px]">{`Social`}</span>
          <div className="w-full py-3 flex justify-start items-center gap-3">
            <Link href="http://wa.me/212675480101" target="_blank">
              <FaWhatsappSquare size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/lepalacemarrakech"
              target="_blank"
            >
              <FaInstagramSquare size={25} />
            </Link>
            <Link
              href="mailto:reservation@le-palacemarrakech.com"
              target="_blank"
            >
              <FaMailBulk size={25} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.3367170878846!2d-8.004560681687618!3d31.624351853949207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeef591e81187%3A0x5370e8aa4b3c1515!2sLe%20Palace!5e0!3m2!1sfr!2sma!4v1739352921203!5m2!1sfr!2sma"
          height="500"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
