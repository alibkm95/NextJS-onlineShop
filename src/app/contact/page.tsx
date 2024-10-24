import ContactForm from "@/components/modules/forms/ContactForm";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import { ReceiptText } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="border p-2 rounded-md shadow-lg">
          <div className="p-4 border-b mb-4">
            <p className="flex items-center gap-2">
              <ReceiptText className="text-primary md:size-8" />
              <span className="font-bold md:text-xl">Contact Us</span>
            </p>
          </div>
          <div className="flex flex-col-reverse items-center gap-4 justify-center lg:flex-row">
            <div className="w-full max-w-[500px]">
              <ContactForm />
            </div>
            <div className="w-full max-w-[500px]">
              <img
                src="/images/contact.svg"
                alt="authentication"
                className="w-full block drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
