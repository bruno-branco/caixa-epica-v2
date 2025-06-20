"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createLead } from "../actions";
import { Loader2 } from "lucide-react";
import { phoneMask } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, { message: "Nome obrigatório" }),
  email: z.string().email({ message: "Email deve ser válido" }),
  phone: z
    .string()
    .min(15, { message: "Número dever ser válido no formato brasileiro" })
    .max(15, { message: "Número dever ser válido no formato brasileiro" }),
  origin: z.string().optional(),
});

export type FormSchema = z.infer<typeof schema>;

export default function LeadForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      origin: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
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
              <FormLabel className="text-white">Seu nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Vecna, o deus mutilado"
                  {...field}
                  className="border-white/40 border-2 text-white"
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
              <FormLabel className="text-white">Seu melhor e-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="vecnareidelas@email.com"
                  {...field}
                  className="border-white/40 border-2 text-white"
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
              <FormLabel className="text-white">
                Seu telefone (o número do sorteio será enviado por whatsapp)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="(xx) xxxx-xxxx"
                  {...field}
                  type="tel"
                  className="border-white/40 border-2 text-white"
                  onChange={(e) => field.onChange(phoneMask(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Por onde você ficou sabendo do sorteio?
              </FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full text-white">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search-engines">
                      Ferramentas de pesquisa
                    </SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="friend">Indicação de amigo</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-amber-700/20 hover:cursor-pointer"
        >
          {!isPending ? "Inscrever-se" : <Loader2 className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
