import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getCoursById } from "../api/cours.api";
import { shop } from "../api/shop.api";
import { toast } from "react-hot-toast";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cours, setCours] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;

  const totalStars = 5;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCoursById(id);
        setCours(data);
        setLoading(false);
      } catch (error) {
        toast.error("Erreur lors du chargement du cours : " + error.message); // ✅ toast d'erreur
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  async function handleBuy(data) {
    if (!email) {
      toast.warning("Veuillez vous connecter."); // ✅ toast d'avertissement
      return;
    }

    try {
      const payload = {
        ...data,
        email,
        coursId: id,
      };
      const response = await shop(payload);
      if (response?.success) {
        toast.success("Merci pour votre achat !"); // ✅ toast de succès
        navigate("/contenu");
      } else {
        toast.error(response?.error || "Une erreur s'est produite."); // ✅ toast d'erreur
      }
    } catch (error) {
      toast.error("Erreur : " + error.message); // ✅ toast d'erreur
    }
  }

  if (loading) return <p className="mt-8 text-center text-white">Chargement...</p>;
  if (!cours) return <p className="mt-8 text-center text-red-400">Cours introuvable.</p>;

  return (
    <div className="flex justify-center px-12">
      <div className="container mx-auto p-4 bg-sky-900 rounded-2xl font-['Josefin_Sans'] text-[#dfe4ea]">
        <h1 className="mt-4 text-3xl font-bold text-center text-yellow-400">
          {cours.name}
        </h1>

        {cours.image && (
          <div className="flex justify-center mt-6">
            <img
              src={cours.image}
              alt={cours.name}
              className="object-cover w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        )}

        <section className="mt-6 text-center">
          <p className="max-w-3xl mx-auto text-lg text-amber-50">{cours.description}</p>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-xl font-semibold text-white">Niveau :</h2>
          <div className="text-2xl text-yellow-400">
            {"★".repeat(cours.niveau || 3)}
            {"☆".repeat(totalStars - (cours.niveau || 3))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-2 text-xl font-semibold text-white">Prix :</h2>
          <div className="text-2xl font-bold text-green-400">GRATUIT</div>
        </section>

        <form onSubmit={handleSubmit(handleBuy)} className="mt-6">
          <div className="mb-6">
            <label
              htmlFor="rgpd"
              className="block mb-2 text-sm font-bold cursor-pointer text-amber-50"
            >
              <input
                type="checkbox"
                id="rgpd"
                {...register("rgpd", {
                  required: "Vous devez accepter les conditions.",
                })}
                className="mr-2 leading-tight"
              />
              J'accepte les conditions d'utilisation et la politique de confidentialité
            </label>
            {errors.rgpd && (
              <p className="mt-1 text-xs text-red-600">{errors.rgpd.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-[#8ccf64] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Acheter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
