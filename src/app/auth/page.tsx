"use client";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthPageMain = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/register");
  }, []);

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="shadow-md rounded-md border min-h-96 flex items-center justify-center flex-col gap-2 md:flex-row">
          <ExternalLink size={50} className="text-primary" />
          <h2 className="text-4xl text-gray-700 text-center">
            Redirecting, please wait ...
          </h2>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AuthPageMain;
