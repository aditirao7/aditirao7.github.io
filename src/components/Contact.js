import * as React from "react";
import { contactData } from "../../data.js";
import { Section, Title } from "./Layout.js";

const Contact = () => {
  return (
    <Section
      id="contact"
      padding="py-9 md:py-20 2xl:py-20"
      gap="gap-12"
      bg="bg-gray-900"
    >
      <Title content="Get in Touch"></Title>
      <div className="text-gray-300 text-xl max-w-l mx-auto">
        <p className="justify-center align-center">{contactData.heading}</p>
      </div>
      <div className="text-gray-300 flex flex-col items-center gap-2 md:gap-4">
        {contactData.contacts.map((obj, index) => (
          <a key={`contact-` + index} className={obj.class} href={obj.href}>
            <div className="flex items-center gap-4 md:gap-5">
              <obj.Icon size={40} />
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] ">
                {obj.content}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
