/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from '@/hooks/use-toast';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


const UserPrefrence = () => {
  const submitPrefrences = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

    return (
      <>
        <Drawer>
          <DrawerTrigger>Setup Your Preferences</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>User Preferences</DrawerTitle>
              <DrawerDescription>Set your preferences to personalize your experience.</DrawerDescription>
            </DrawerHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitPrefrences)} className="w-2/3 space-y-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit Your Prefrences</Button>
                </form>
              </Form>
          </DrawerContent>
        </Drawer>
      </>
    );
};

export default UserPrefrence;
