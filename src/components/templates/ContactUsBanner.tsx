import React from "react";
import MaxWidthWrapper from "../modules/MaxWidthWrapper";
import Link from "next/link";
import { MessageSquareQuote } from "lucide-react";
import { buttonVariants } from "../ui/button";

const ContactUsBanner = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="grid gap-4 md:grid-cols-2 place-items-center font-bold">
          <div className="flex flex-col gap-2 items-center justify-center md:gap-4 lg:gap-8">
            <p className="text-3xl md:text-4xl lg:text-6xl">
              <span className="text-primary">{"{ "}</span>
              Contact us
              <span className="text-primary">{" }"}</span>
            </p>
            <p className="text-center md:text-lg lg:text-2xl">
              Feel free to share your opinion with us. Head to contact section
              and write down your comments about our services, products, ... .
            </p>
            <Link href="/contact" className={buttonVariants()}>
              Go to contact <MessageSquareQuote />
            </Link>
          </div>
          <div className="w-full max-w-[500px]">
            <img
              src="/images/contact.svg"
              alt="contact-us"
              className="w-full block"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUsBanner;
