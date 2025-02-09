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

import hero_bg from "@/assets/ContactUsPage/hero_bg.webp";

export const metadata = {
  title: "Contact Us | EXPRESS FORM",
  description:
    "Get in touch with us for expert advice and personalised service. Whether you’re looking for custom benchtops for your home or caravan, our team is here to help with design, sizing, and material options.",
};

export const ContactUs = () => {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Got a question or ready to start your project? We’re here to help! Reach out to us today, and let’s create the perfect benchtop for your space."
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
              Got a question or need support? We're here to help! Fill out the
              form, and the Expressform team will get back to you as soon as
              possible. Whether it's a product inquiry, a service request, or
              just a general question, we’re committed to providing you with a
              quick and helpful response. Let’s stay connected!
            </p>
            <div className="flex mb-[16px]">
              <PhoneIcon className="size-5 mr-[16px]" />
              <p>
                <a href="tel:+61 430 502 327">+61 430 502 327</a>
              </p>
            </div>
            <div className="flex mb-[16px]">
              <EnvelopeIcon className="size-5 mr-[16px]" />
              <p>
                <a href="mailto:info@expressform.com.au">
                  info@expressform.com.au
                </a>
              </p>
            </div>
            <div className="flex">
              <MapPinIcon className="size-5 mr-[16px]" />
              <p className="text-left">
                Express Form,
                <br />
                28 Export Road,
                <br />
                Craigieburn,
                <br />
                Australia.
                <br />
                3064
                <br />
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
};

export default ContactUs;
