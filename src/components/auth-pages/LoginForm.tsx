"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  password: z
    .string()
    .min(10, { message: "password must be at least 10 characters." })
    .max(40),
  email: z.string().email(),
});

export default function LoginForm() {
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <div className=" h-screen w-full bg-cover">
      <Image src="/assets/background.jpg" alt="Back ground image" fill />
      <div className="h-screen w-full absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="w-1/3 py-7 px-4 max-sm:w-5/6 max-lg:w-2/3 max-xl:w-1/2 flex flex-col items-center justify-center gap-6 bg-transparent border-2 border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-md rounded-3xl">
          <Image
            src="/assets/logo.png"
            alt="logo image"
            width={150}
            height={150}
            className="rounded-full"
          />

          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(onSubmit)}
              className="text-white"
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription>Enter your email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Enter your password.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4">
                Watch now.
              </Button>
            </form>
          </Form>
          <Link href="/register" className="text-white">
            <p>{`Don't have an account? Create one.`}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
