import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { Button, Textarea } from ".";

const contactUsFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório."),
  subject: z.string().min(1, "Campo obrigatório."),
  message: z.string().min(1, "Campo obrigatório."),
});

type ContactUsFormData = z.infer<typeof contactUsFormSchema>;

export function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(contactUsFormSchema),
  });

  async function handleSubmitContactUsForm({
    message,
    name,
    subject,
  }: ContactUsFormData) {
    console.table({ message, name, subject });
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitContactUsForm)}
      className="flex flex-col gap-4 my-6 p-5 border border-gray-500 rounded-lg"
    >
      <div className="flex w-full gap-4">
        <Input
          id="name"
          placeholder="Nome"
          type="text"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="subject"
          placeholder="Assunto"
          type="text"
          error={errors.subject?.message}
          {...register("subject")}
        />
      </div>

      <Textarea
        id="message"
        placeholder="Mensagem"
        error={errors.message?.message}
        {...register("message")}
      />

      <Button className="w-1/2 mx-auto" type="submit">
        Enviar
      </Button>
    </form>
  );
}
