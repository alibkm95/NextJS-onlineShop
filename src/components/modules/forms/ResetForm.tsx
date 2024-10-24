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
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, LockKeyhole, Mail, RefreshCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ResetForm = () => {
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
    console.log(values);
    // handle form submition.
  };

  const handleFindAccount = async (
    values: z.infer<typeof findAccountFormValidation>
  ) => {
    console.log(values);
    // handle form submition.
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
            className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
          >
            Send verification code
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
                  <InputOTP maxLength={6} {...field}>
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
            className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
          >
            <RefreshCw />
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetForm;
