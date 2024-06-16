"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  FormControl,
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

// Create a Zod schema
const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "First Name is required",
    })
    .max(50),
  email: z.string().email({ message: "Email is required" }).toLowerCase(),
  textarea: z.string(),
  type1: z.enum(["NE", "SLE", "IC", "SLT"], {
    required_error: "You need to select an option.",
  }),
  type2: z.enum(["0-12", "12-24", "2-3", "4-5", "OVER6"], {
    required_error: "You need to select an option.",
  }),
  type3: z.enum(["SP", "EN", "DS", "OTHER"], {
    required_error: "You need to select an option.",
  }),
  // phone:
  //   z.number()
  //   .min(5).max(11,{ message: "Phone Number is required" })
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      // phone:"",
      email: "",
      textarea: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  }

  return (
    <>
      <Form {...form} netlify>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} className="w-60" />
                </FormControl>
                <FormDescription>Write your Full Name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=" flex flex-col md:flex-row md:space-x-16">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@..."
                      {...field}
                      className="w-60"
                    />
                  </FormControl>
                  <FormDescription>Write your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" {...field} className="w-60" />
                  </FormControl>
                  <FormDescription>Write your phone number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* RADIO BUTTON service */}

          <FormField
            control={form.control}
            name="type1"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>What service are you interested in?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="NE" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Neurodeveloment Evaluation.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="SLE" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Speech and Language Evaluation.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="IC" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Initial Consultation
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="SLT" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Speech and Language Therapy.
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RADIO BUTTON OLD */}

          <FormField
            control={form.control}
            name="type2"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>How old is your child?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="0-12" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        0 - 12 months.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="12-24" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        12 - 24 months.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2-3" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        2 - 3 years old.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="4-5" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        4 - 5 years old.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="OVER6" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Over 6 years old.
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* RADIO BUTTON language */}

          <FormField
            control={form.control}
            name="type3"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>What is your child's primary language?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="SP" />
                      </FormControl>
                      <FormLabel className="font-normal">Spanish</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="EN" />
                      </FormControl>
                      <FormLabel className="font-normal">English</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="DS" />
                      </FormControl>
                      <FormLabel className="font-normal">Danish</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="OTHER" />
                      </FormControl>
                      <FormLabel className="font-normal">Other</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* TEXT AREA */}

          <FormField
            control={form.control}
            name="textarea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* BUTTON */}

          <Button type="submit" className="md:w-[150px]">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
