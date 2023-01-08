import React, { useEffect } from "react";
import { HeroContact } from "./HeroContact";
import { ContactForm } from "./ContactForm";
import { useJquery } from "../../hooks/useJquery";

export const Contact = () => {
  const { reloadJquery } = useJquery();
  useEffect(() => {
    reloadJquery();
  });
  return (
    <>
      <HeroContact />
      <ContactForm />
    </>
  );
};
