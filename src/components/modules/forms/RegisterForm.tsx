"use client";
import { RegisterFormValidation } from "@/lib/validation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail, UserRoundPen, UserRoundPlus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "../Spinner";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof RegisterFormValidation>>({
    resolver: zodResolver(RegisterFormValidation),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      terms: true,
    },
  });

  const handleRegister = async (
    values: z.infer<typeof RegisterFormValidation>
  ) => {
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.status !== 201) {
      setLoading(false);
      return toast.error(data.msg);
    }
    toast.success(data.msg);
    form.reset();
    setLoading(false);
    return router.replace(`/auth/verify?user=${values.email}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className="space-y-6 w-full py-8"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <UserRoundPen size={18} />
                Full name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your full name ..."
                  disabled={loading}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <Mail size={18} />
                E-Mail
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email address ..."
                  disabled={loading}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 ps-2">
                <LockKeyhole size={18} />
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Password ..."
                  disabled={loading}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    disabled={loading}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">
                  I accept the terms and conditions
                </FormLabel>
              </div>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <p className="text-sm">
          already have an account?
          <Link
            href="/auth/login"
            className="text-emerald-600 font-bold ms-2 hover:underline"
          >
            Login
          </Link>
        </p>
        <Button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
        >
          {loading ? <Spinner /> : <UserRoundPlus />}
          Register
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
