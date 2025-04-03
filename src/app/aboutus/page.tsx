import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { AboutUsComponent } from "@/components/landing/AboutUsComponent";

const page = () => {
  return (
    <>
      {/*Header Section*/}
      <Navbar />

      {/*About us Section*/}

      <AboutUsComponent />

      {/*Footer Section*/}
      <FooterSection />
    </>
  );
};

export default page;
