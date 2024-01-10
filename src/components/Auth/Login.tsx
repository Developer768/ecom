"use client"
import React, { useState, useTransition } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { apiReplyType } from '@/types/index'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Icons } from '@/lib/Icons'

const Login = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard" //  is being used to redirect user after sucessful login (read through search params) or else will be sent to "/"
    // const callbackUrl = searchParams.get("callbackUrl") || "/dashboard" //  is being used to redirect user after sucessful login (read through search params) or else will be sent to "/"
    const loginError = searchParams.get("error") ? "Invalid credentials" : "" // For Method 1
    const [isPending, startTransition] = useTransition();

    const router = useRouter()
    const [formError,setFormError] = useState<apiReplyType>({
        error: "",
        message: "",
      })

    const form = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
          try {
            const res = await signIn("credentials",{
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl: callbackUrl
            })
            if(!res?.error) {
                router.push(callbackUrl)
            } else {
                setFormError({
                    error: "error",
                    message: "Wrong email or password."
                })
            }
          } catch (err) {
            console.log(err);
          }
        // });
      };
  return (
    <Card className="min-w-[345px] shadow-md">
      <CardHeader className="">
        <CardTitle className="flex items-center justify-center">Login</CardTitle>
      </CardHeader>
      <CardContent className="">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="example@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="password"
                    placeholder="******"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Method 1
        {
            loginError != "" && (
                <div className="bg-destructive/15 text-destructive p-3 rounded-md flex items-center gap-x-2 text-sm">
              <Icons.alertTriangle className="h-4 w-4" />
              <p className="">{loginError}</p>
            </div>
            )
        } */}



        {/* Method 2 */}
        {
          formError.error === "error" && (
            <div className="bg-destructive/15 text-destructive p-3 rounded-md flex items-center gap-x-2 text-sm">
              <Icons.alertTriangle className="h-4 w-4" />
              <p className="">{formError.message}</p>
            </div>
          )
        }
        <Button type="submit" disabled={isPending} className="w-full">
          Login
        </Button>
      </form>
    </Form>
      </CardContent>
      {/* <CardFooter className="flex items-center justify-center">
        <p className="">
          Don't have an account?
          <Link
            href={"/signup"}
            className="text-green ml-1 font-bold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardFooter> */}
    </Card>
  )
}

export default Login