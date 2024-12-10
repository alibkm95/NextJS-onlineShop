"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  findAccountFormValidation,
  resetFormValidation,
} from "@/lib/validation";
import { AppDispatch } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, LockKeyhole, Mail, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import Spinner from "../Spinner";
import toast from "react-hot-toast";
import { authUser } from "@/store/features/AuthUserSlice";

const ResetForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [acc, setAcc] = useState<string>("");
  const [findLoading, setFindLoading] = useState<boolean>(false);
  const [resetLoading, setResetLoading] = useState<boolean>(false);
  const resetForm = useForm<z.infer<typeof resetFormValidation>>({
    resolver: zodResolver(resetFormValidation),
    defaultValues: {
      otpCode: "",
      password: "",
    },
  });
  const findForm = useForm<z.infer<typeof findAccountFormValidation>>({
    resolver: zodResolver(findAccountFormValidation),
    defaultValues: {
      email: "",
    },
  });

  const handleReset = async (values: z.infer<typeof resetFormValidation>) => {
    setResetLoading(true);
    const res = await fetch("/api/auth/reset", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: acc,
        otpCode: values.otpCode,
        password: values.password,
      }),
    });
    const data = await res.json();
    if (res.status !== 200) {
      setResetLoading(false);
      return toast.error(data.msg);
    }
    await dispatch(authUser());
    setResetLoading(false);
    resetForm.reset();
    toast.success(data.msg);
    return router.replace("/panel");
  };

  const handleFindAccount = async (
    values: z.infer<typeof findAccountFormValidation>
  ) => {
    setFindLoading(true);
    const res = await fetch("/api/auth/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.status !== 200) {
      setFindLoading(false);
      return toast.error(data.msg);
    }
    setAcc(values.email);
    setFindLoading(false);
    findForm.reset();
    return toast.success(data.msg);
  };

  return (
    <div className="py-8">
      <Form {...findForm}>
        <form
          onSubmit={findForm.handleSubmit(handleFindAccount)}
          className="space-y-6 w-full"
        >
          <FormField
            control={findForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <Mail size={18} />
                  E-Mail
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert your email address ..."
                    disabled={findLoading || acc ? true : false}
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={findLoading || acc ? true : false}
            className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
          >
            {findLoading && <Spinner />}
            Get verification code
          </Button>
        </form>
      </Form>
      <Form {...resetForm}>
        <form
          onSubmit={resetForm.handleSubmit(handleReset)}
          className="space-y-6 w-full"
        >
          <FormField
            control={resetForm.control}
            name="otpCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <KeyRound size={18} />
                  OTP-Code
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    disabled={resetLoading || !acc}
                  >
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
          <FormField
            control={resetForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 ps-2">
                  <LockKeyhole size={18} />
                  New password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Create new password ..."
                    disabled={resetLoading || !acc}
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={resetLoading || !acc}
            className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
          >
            {resetLoading ? <Spinner /> : <RefreshCw />}
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetForm;
