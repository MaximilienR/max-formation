import React, { useState } from "react"; // Importer useState
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { signup } from "../../api/auth.api";

// Importer les icônes d'œil de React Icons (par exemple, de 'fa' pour Font Awesome)
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  // Schéma de validation avec Yup (inchangé, sauf si vous voulez ajouter d'autres règles)
  const schema = yup
    .object({
      username: yup.string().required("Le pseudo est obligatoire"),
      email: yup
        .string()
        .email("Format d'e-mail non valide")
        .required("L'e-mail est obligatoire"),

      password: yup
        .string()
        .required("Le mot de passe est obligatoire")
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .max(64, "Le mot de passe ne peut pas dépasser 64 caractères")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,64}$/,
          "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial."
        ),
      confirmPassword: yup
        .string()
        .required("La confirmation du mot de passe est obligatoire")
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
      rgpd: yup
        .boolean()
        .oneOf(
          [true],
          "Vous devez accepter les conditions d'utilisation et la politique de confidentialité"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",

      rgpd: false,
    },
  });

  // États pour la visibilité des mots de passe
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Fonctions pour basculer la visibilité
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  async function submit(values) {
    console.log("Valeurs du formulaire soumises :", values);
    try {
      const response = await signup(values);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erreur API lors de l'inscription :", errorData);
        toast.error(
          errorData.message || "Une erreur est survenue lors de l'inscription."
        );
        return;
      }

      const successData = await response.json();
      console.log("Succès API inscription :", successData);
      toast.success(
        successData.messageOk ||
          "Inscription réussie ! Veuillez vérifier vos e-mails."
      ); // Correction du messageOk pour la réponse backend
      reset();
    } catch (error) {
      console.error("Erreur lors de l'appel API pour l'inscription :", error);
      toast.error(
        "Échec de l'inscription. Problème de connexion ou de serveur."
      );
    }
  }

  return (
    <div className="flex justify-center px-12">
      <form
        onSubmit={handleSubmit(submit)}
        className="container mx-auto p-4 bg-sky-900 rounded-2xl"
      >
        <div className="border-b border-gray-900/10 pb-12 space-y-12">
          <h1 className="text-3xl text-center mt-4 font-bold text-yellow-400">
            Créer un compte
          </h1>
          <p className="mt-1 text-sm/6 text-amber-50 text-center">
            Remplissez les champs ci-dessous pour vous inscrire
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Pseudo */}
            <div className="sm:col-span-6">
              <input
                {...register("username")}
                type="text"
                id="username"
                placeholder="Votre pseudo"
                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 mt-4"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            {/* E-mail */}
            <div className="sm:col-span-6">
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="votre@email.com"
                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 mt-4"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Mot de passe */}
            <div className="relative sm:col-span-6">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Mot de passe"
                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 mt-4"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white cursor-pointer top-6"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Confirmation mot de passe */}
            <div className="relative sm:col-span-6">
              <input
                {...register("confirmPassword")}
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirmez le mot de passe"
                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-white text-center outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-yellow-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 mt-4"
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white cursor-pointer top-6"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* RGPD */}
        <div className="mb-6">
          <label
            htmlFor="rgpd"
            className="block mb-2 text-sm font-bold text-amber-50 cursor-pointer"
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

        <div className="flex justify-center mt-4">
          <button className="rounded-md bg-[#A3DC7F] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
