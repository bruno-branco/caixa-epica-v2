"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createLead } from "../actions";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(11).max(11),
});

export type FormSchema = z.infer<typeof schema>;

export default function LeadForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormSchema) => {
    saveLead(data);
  };

  const { mutate: saveLead, isPending } = useMutation({
    mutationKey: ["save-lead"],
    mutationFn: (data: FormSchema) => createLead(data),
    onSuccess: (data) => console.log(data),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full flex flex-col"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Seu nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Vecna, o deus mutilado"
                  {...field}
                  className="border-gray-400/40 border-2 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Seu melhor e-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="vecnareidelas@email.com"
                  {...field}
                  className="border-gray-400/40 border-2 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">
                Seu telefone (o número do sorteio será enviado por whatsapp)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="xx-xxxx-xxxx"
                  {...field}
                  className="border-gray-400/40 border-2 text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="ml-auto bg-amber-800/20">
          Submit
        </Button>
      </form>
    </Form>
  );
}
