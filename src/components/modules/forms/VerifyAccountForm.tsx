"use client";
import { VerifyFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { KeyRound, ShieldCheck } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authUser } from "@/store/features/AuthUserSlice";
import Spinner from "../Spinner";

const VerifyAccountForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("user");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof VerifyFormValidation>>({
    resolver: zodResolver(VerifyFormValidation),
    defaultValues: {
      otpCode: "",
    },
  });

  const handleVerification = async (
    values: z.infer<typeof VerifyFormValidation>
  ) => {
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: values.otpCode, email }),
    });
    const data = await res.json();
    if (res.status !== 200) {
      setLoading(false);
      return toast.error(data.msg);
    }
    await dispatch(authUser());
    toast.success(data.msg);
    form.reset();
    setLoading(false);
    return router.replace("/panel");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleVerification)}
        className="flex flex-col items-center justify-center gap-6 w-full py-8"
      >
        <p className="text-xl max-w-[75%] text-center font-semibold">
          Please insert 6-digit OTP code that sent to your email.
        </p>
        <FormField
          control={form.control}
          name="otpCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <KeyRound size={18} />
                OTP-Code
              </FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field} disabled={loading}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={1} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <span className="text-xs text-gray-400">
          * if you did not recieve the code, check your spam folder.
        </span>
        <Button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto"
        >
          {loading ? <Spinner /> : <ShieldCheck />}
          Verify
        </Button>
      </form>
    </Form>
  );
};

export default VerifyAccountForm;
