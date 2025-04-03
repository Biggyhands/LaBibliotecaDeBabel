import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { TechStackCredits } from "@/components/landing/TechStackCredits";
import { FooterSection } from "@/components/landing/FooterSection";

type Props = {};

function page({}: Props) {
  return (
    <>
      <Navbar />
      <TechStackCredits />
      <FooterSection />
    </>
  );
}

export default page;
