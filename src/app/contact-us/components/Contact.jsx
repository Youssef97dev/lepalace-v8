"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-10 py-10 text-black">
        <div className="w-full flex lg:flex-row flex-col justify-start items-start gap-5">
          <div className="w-full flex flex-col justify-start items-start">
            <span className="mb-3 font-semibold tracking-widest text-[16px]">
              {t("contact.loaction")}
            </span>
            <p className="text-[15px]">{`Av. Echouhada Rue Ahmed Chawqui Hivernage1`}</p>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <span className="mb-3 font-semibold tracking-widest text-[16px]">
              {t("contact.open")}
            </span>
            <p className="text-[15px]">{`Every Day: 07:00PM - 02:00AM`}</p>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col justify-start items-start gap-5">
          <div className="w-full flex flex-col justify-start items-start">
            <span className="mb-3 font-semibold tracking-widest text-[16px]">
              {t("contact.contactus")}
            </span>
            <p className="text-[15px]">{`PHONE : +212 6 75 48 00 18`}</p>
            <p className="text-[15px]">{`reservation@le-palacemarrakech.com`}</p>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <span className=" font-semibold tracking-widest text-[16px]">
              {t("contact.social")}
            </span>
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
          <Link href="https://maps.app.goo.gl/uiT8cRKzyEr5nQ187">
            <Image
              src="/images/plan-1.png"
              alt="Localisation Le Palace"
              height={1000}
              width={1000}
              className="object-cover w-full"
            />
          </Link>
        </div>
      </div>
    )
  );
};

export default Contact;
