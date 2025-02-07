import Header from "./Header"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({

  email: z.string().email().min(2, { message: "email is too short" }).max(50, { message: "email is too long" }),
  password: z.string().min(10, { message: "password is too short" })
})



function Login() {

  const form = useForm<z.infer<typeof formSchema>>({

    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);
  }


  return (
    <>
      <Header bgColor="" />

      <div className="mb-32">
        <div className="pt-32 text-center font-medium text-xl"> Login</div>
        <div className="lg:w-1/3 md:2/5 pl-5 pr-5 mt-10 mx-auto mb-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ar@gamil.com" {...field} className="rounded-none bg-blue-100 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} className="rounded-none bg-blue-100 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="rounded-none w-full h-12 mb-2">Submit</Button>

            </form>
          </Form>



        </div>
        <div className="lg:w-1/3 mx-auto pl-5 pr-5">
          <a className="pt-10 underline text-red-950" href="/register">Create account</a>
        </div>
      </div>
    </>
  )
}

export default Login