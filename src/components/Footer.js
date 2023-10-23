import * as React from "react";
import { Section } from "./Layout";

const Footer = () => {
  return (
    <Section id="footer" padding="py-5" gap="gap-12" bg="bg-gray-950">
      <span className="text-sm">
        2023 |{"  "}
        <a
          className="underline underline-offset-4"
          href="https://github.com/aditirao7/aditirao7.github.io"
        >
          Developed
        </a>{" "}
        with ❤️️ by Aditi Rao
      </span>
    </Section>
  );
};

export default Footer;
