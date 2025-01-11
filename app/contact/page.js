import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Section from "@/components/Section/Section";
import ContactForm from "@/components/ContactForm/ContactForm";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import styles from "./styles.module.css";

import hero_bg from "@/assets/ContactUsPage/hero_bg.png";

export const metadata = {
  title: "Contact Us | EXPRESS FORM",
  description:
    "Get in touch with us for expert advice and personalised service. Whether you’re looking for custom benchtops for your home or caravan, our team is here to help with design, sizing, and material options.",
};

export const ContactUs = () => {
  return (
    <>
      <HeroSection
        title="About Us"
        description="Adventure-Ready, Style-Driven – Our Caravan Benchtops Are Perfectly Designed to Endure the Demands of Life on the Road While Adding a Premium Touch to Your Caravan’s Interior..."
        image={hero_bg.src}
      />
      <Section
        id="contactForm"
        preTitle="Want to contact us?"
        title="We Are Happy to Help"
        bgColor="bgLight"
      >
        <div className="bg-white grid grid-flow-row md:grid-cols-3">
          <div
            className={` text-white col-span-1 px-[32px] py-[64px] ${styles.green}`}
          >
            <h3 className={`${styles.title} mb-[24px]`}>Contact Info</h3>
            <p className={`${styles.description} mb-[32px]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex mb-[16px]">
              <PhoneIcon className="size-5 mr-[16px]" />
              <p>+1012 3456 789</p>
            </div>
            <div className="flex mb-[16px]">
              <EnvelopeIcon className="size-5 mr-[16px]" />
              <p>expressform@email.com</p>
            </div>
            <div className="flex">
              <MapPinIcon className="size-5 mr-[16px]" />
              <p>+1012 3456 789</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
};

export default ContactUs;
