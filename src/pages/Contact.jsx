import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast"; // Importe toast (assurez-vous de l'avoir installé et configuré)
import { FaCheckCircle } from "react-icons/fa"; // Importe l'icône de succès

import { contact } from "../api/contact.api";

const schema = yup
  .object({
    subject: yup.string().required("Le champ est obligatoire"),
    message: yup.string().required("Le champ est obligatoire"),
    email: yup
      .string()
      .email("Format email non valide")
      .required("Le champ est obligatoire"),
    rgpd: yup
      .boolean()
      .oneOf(
        [true],
        "Vous devez accepter les conditions d'utilisation et la politique de confidentialité"
      ),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      subject: "",
      message: "",
      email: "",
    },
  });

  async function submit(values) {
    console.log(values);

    try {
      // Appel à l'API avec les données du formulaire, en passant 'values'
      const feedback = await contact(values);

      if (feedback && feedback.success) {
        console.log("message envoye" + " " + values);
        toast.success(feedback.message || "Message envoyé avec succès !");
        reset();
      } else if (feedback && feedback.error) {
        toast.error(feedback.error);
      } else {
        toast.error("Une erreur inconnue s'est produite.");
      }
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API message:", error);
      toast.error("Échec de l'envoi du message. Veuillez réessayer.");
    }
  }

  return (
    <div className="flex justify-center px-12">
      <form
        onSubmit={handleSubmit(submit)}
        className="container mx-auto p-4 bg-blue-400 rounded-2xl"
      >
        <div className="border-b border-gray-900/10 pb-12 space-y-12">
          <h2 className="text-base/7 font-semibold text-gray-900 text-center">
            Nous contacter
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Une question ? veuillez remplir le formulaire ci dessous
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Sujet"
                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="sm:col-span-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="sm:col-span-6">
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4 h-80"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="rgpd"
            className="block mb-2 text-sm font-bold text-white cursor-pointer"
          >
            <input
              type="checkbox"
              id="rgpd"
              {...register("rgpd")}
              className="mr-2 leading-tight"
            />
            J'accepte les conditions d'utilisation et la politique de
            confidentialité
          </label>
          {errors.rgpd && (
            <p className="mt-1 text-xs text-red-600">{errors.rgpd.message}</p>
          )}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {" "}
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
