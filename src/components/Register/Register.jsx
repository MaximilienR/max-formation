import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

export default function register() {
  const schema = yup.object({
    pseudo: yup.string().required("champs obligatoire"),
    email: yup.string().email("Veuillez respecter le format email").required("L'email est obligatoire"),
password: yup.string()
  .min(10, "Le mot de passe doit avoir au moins 10 caractères")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>/?])[a-zA-Z0-9!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]{10,}$/, "Le mot de passe doit avoir au moins une majuscule, une minuscule et un caractère spécial")
  .required("Le mot de passe est obligatoire"),    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Les mots de passe doivent être identiques").required("La confirmation du mot de passe est obligatoire"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      pseudo: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  const submit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className="container mx auto p-4 bg-blue-400  justify-center rounded-2xl ml-50 mt-10 mb-40">
        <div className="border-b border-gray-900/10 pb-12 space-y-12 ">
          <h2 className="text-base/7 font-semibold text-gray-900 text-center">Inscription</h2>

          <div className="sm:col-span-3 ">
            <input
              {...register("pseudo")}
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Veuillez saisir votre pseudo"
              className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
            />
            {errors.pseudo && <p className="text-red-500">{errors.pseudo.message}</p>}

            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Veuillez saisir votre email"
              className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              placeholder="Veuillez saisir votre mot de passe"
              className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Veuillez confirmer votre mot de passe"
              className="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6 mt-4"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">    
            </div>
          </div>

          <button type="submit" className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S'inscrire</button>
        </div>
      </form>
    </div>
  )
}