"use client";
import { LoginFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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
import { Input } from "@/components/ui/input";
import { LockKeyhole, LogIn, Mail, UserRoundPlus } from "lucide-react";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof LoginFormValidation>) => {
    console.log(values);
    // handle form submition.
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="space-y-6 w-full py-8"
      >
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
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          )}
        />
        <p className="text-sm">
          dont have an account?
          <Link
            href="/auth/register"
            className="text-emerald-600 font-bold ms-2 hover:underline"
          >
            Create new one
          </Link>
        </p>
        <p className="text-sm">
          forget your login info?
          <Link
            href="/auth/reset"
            className="text-emerald-600 font-bold ms-2 hover:underline"
          >
            Recover
          </Link>
        </p>
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 w-max ms-auto flex"
        >
          <LogIn />
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
