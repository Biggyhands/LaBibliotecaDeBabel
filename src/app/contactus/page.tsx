import React from "react";

import { Navbar } from "@/components/landing/Navbar";
import ContactInfoComponent from "@/components/landing/ContactInfoComponent";
import { FooterSection } from "@/components/landing/FooterSection";

const page = () => {
  return (
    <>
      <Navbar />
      <ContactInfoComponent />
      <FooterSection />
    </>
  );
};

export default page;
