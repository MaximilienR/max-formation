import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

export default function Register() {
  const schema = yup.object({
    username: yup.string().required("le champ est obligatoire"),
    email: yup.string().email("Format email non valide").required("le champ est obligatoire"),
    password: yup.string().required("le champs est obligatoire").min(5, "trop cours").max(10, "trop long"),
    confirmPassword: yup.string().required("le champs est obligatoire").oneOf([yup.ref("password")], "les mots de passes ne correspond pas "),
    rgpd: yup.boolean().oneOf([true], "vous devez accepter ...")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      tel : "",
    }
  })

  function submit(values) {
    console.log(values);
    alert(`Inscription réussie, bonjour ${values.username}`);
    handleLogin();
  }

  return (
    <div className="container p-4 mx-auto md:p-6 lg:p-8">
    <form onSubmit={handleSubmit(submit)} className="w-full p-4 mx-auto bg-blue-400 rounded shadow-md md:p-6 lg:p-8 border-radius-10">
   
    <div className="flex flex-col mb-2">
          <label htmlFor="username" className="mb-2 bg-white" >Pseudo</label>
          <input {...register('username')} type="text" id="username" name="username" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:outline-nonr focus:ring-blue-200" placeholder="Pseudo" />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="mb-2">Email</label>
          <input {...register('email')} type="email" id="email" name="email" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:outline-nonr focus:ring-blue-200 " placeholder="Email" />
          {errors.tel && <p className="text-red-500">{errors.tel.message}</p>}
        </div>

        <div className="flex flex-col mb-2">
        <label htmlFor="tel" className="mb-2">Tel</label>
        <input {...register('tel')} type="text" id="tel" name="tel" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:outline-nonr focus:ring-blue-200" placeholder="Tel" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="mb-2">Mot de passe</label>
          <input {...register('password')} type="password" id="password" name="password" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:outline-nonr focus:ring-blue-200" placeholder="Password" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="confirmPassword" className="mb-2">Confirmer Mot de passe</label>
          <input {...register('confirmPassword')} type="password" id="confirmPassword" name="confirmPassword" className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:outline-nonr focus:ring-blue-200" placeholder="Password" />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <div className="flex flex-col mb-2">
          <label htmlFor="rgpd" className="mb-2">
            <input type="checkbox" className="mb-4" id="rgpd" {...register('rgpd')} />
            J'accepte...
          </label>
          {errors.rgpd && <p className="text-red-500">{errors.rgpd.message}</p>}
        </div>

        <button className="px-4 py-2 text-white bg-blue-500 rounded-2xl hover:bg-blue-600" type="submit">s'inscrire</button>
      </form>
    </div>
  );
}