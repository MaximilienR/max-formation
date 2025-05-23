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
    <div className="container flex items-center justify-center min-h-screen p-4 mx-auto md:p-6 lg:p-8">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-md p-6 bg-blue-400 rounded-lg shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-white">
          Créer un Compte
        </h2>

        {/* Pseudo */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-bold text-white"
          >
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            name="username"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-700 outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            placeholder="Votre pseudo"
          />
          {errors.username && (
            <p className="mt-1 text-xs text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* E-mail */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-white"
          >
            E-mail
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-700 outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            placeholder="votre@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Mot de passe */}
        <div className="relative mb-4">
          {" "}
          {/* Ajout de 'relative' pour positionner l'icône */}
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-bold text-white"
          >
            Mot de passe
          </label>
          <input
            {...register("password")}
            // Bascule le type de l'input en fonction de l'état showPassword
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-700 outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            placeholder="Votre mot de passe"
          />
          {/* Icône d'œil */}
          <span
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 cursor-pointer top-6"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
            {/* Affiche l'icône appropriée */}
          </span>
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirmer le mot de passe */}
        <div className="relative mb-4">
          {" "}
          {/* Ajout de 'relative' */}
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-bold text-white"
          >
            Confirmer le mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            // Bascule le type de l'input en fonction de l'état showConfirmPassword
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-700 outline-1 -outline-offset-1 outline-yellow-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
            placeholder="Confirmez votre mot de passe"
          />
          {/* Icône d'œil pour la confirmation */}
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 cursor-pointer top-6"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* RGPD */}
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

        <button
          className="w-full px-4 py-2 text-white transition duration-150 ease-in-out bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
