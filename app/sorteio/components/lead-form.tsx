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
import { Checkbox } from "@/components/ui/checkbox";
import { DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

// Schema is unchanged
const schema = z.object({
  name: z.string().min(2, { message: "Nome obrigatório" }),
  email: z.string().email({ message: "Email deve ser válido" }),
  phone: z
    .string()
    .min(15, { message: "Número dever ser válido no formato brasileiro" })
    .max(15, { message: "Número dever ser válido no formato brasileiro" }),
  origin: z.string().optional(),
  acceptRules: z.boolean().refine((val) => val === true, {
    message: "É necessário aceitar as regras do sorteio para participar",
  }),
});

export type FormSchema = z.infer<typeof schema>;

export default function LeadForm() {
  const form = useForm<FormSchema>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      origin: "",
      acceptRules: false,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    saveLead(data);
  };

  const { mutate: saveLead, isPending } = useMutation({
    mutationKey: ["save-lead"],
    mutationFn: (data: FormSchema) => createLead(data),
    onSuccess: (data) => toast("Inscrição realizada com sucesso!"),
  });

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full flex flex-col"
        >
          {/* Fields for name, email, phone, and origin remain the same... */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bebas text-xl">
                  Seu nome
                </FormLabel>
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
                <FormLabel className="text-white font-bebas text-xl">
                  Seu melhor e-mail
                </FormLabel>
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
                <FormLabel className="text-white font-bebas text-xl">
                  Seu telefone (resultado do sorteio no whatsapp)
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
                <FormLabel className="text-white font-bebas text-xl">
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

          {/* Rules Section Updated */}
          <div className="space-y-2">
            <div>
              <p className="text-md text-white font-bebas">
                Como <span className="text-[#FEB546]">participar:</span>
              </p>
              <ul className="text-sm text-gray-300 list-disc list-inside pl-2">
                <li>Seguir @caixaepica no Instagram</li>
                <li>Comentar no post marcando 3 amigos</li>
              </ul>
            </div>

            <FormField
              control={form.control}
              name="acceptRules"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange} // Correctly pass the onChange handler
                        id="acceptRules"
                        className="border-white/50 data-[state=checked]:bg-[#FEB546] data-[state=checked]:text-black"
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="acceptRules"
                      className="text-sm font-normal text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Concordo com as
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="text-sm text-[#FEB546] hover:underline hover:cursor-pointer"
                        >
                          regras do sorteio
                        </button>
                      </DialogTrigger>
                    </FormLabel>
                  </div>

                  {/* Use a button for the trigger for better accessibility */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-700/20 hover:bg-amber-600/40 text-white font-bold text-lg hover:cursor-pointer"
            disabled={isPending}
          >
            {!isPending ? "Inscrever-se" : <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
}
