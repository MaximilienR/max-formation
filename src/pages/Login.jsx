import React from "react";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import toast from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// Schéma de validation
const schema = yup.object({
  email: yup
    .string()
    .email("Format email non valide")
    .required("Le champ est obligatoire"),
  password: yup.string().required("Le mot de passe est obligatoire"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (data) => {
    console.log("Connexion avec :", data);
  };

  return (
    <div className="container flex items-center justify-center p-4 mx-auto bg-sky-900 rounded-2xl mt-50 mb-50">
      <div className="w-full p-4 md:w-1/2 xl:w-1/3">
        <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
          Connexion
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-amber-50"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-100 border rounded"
              {...register("email")}
              placeholder="veuillez saisir votre email"
            />
            {errors.email && (
              <p className="text-orange-200">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-amber-50"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 bg-gray-100 border rounded"
              placeholder="veuillez saisir votre mot de passe"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-orange-200">{errors.password.message}</p>
            )}
          </div>
          <label className="text-gray-100 ">
            Mot de passe oublié ?{" "}
            <NavLink className="mr-4" to="/Password">
              <span className="text-yellow-400">Ici</span>
            </NavLink>
          </label>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="rounded-md bg-yellow-400  px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Me connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
