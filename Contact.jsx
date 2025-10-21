import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    // Simule un envoi de mail
    setTimeout(() => {
      setStatus("Message envoyé avec succès ✅");
    }, 1500);
  };

  return (
    <section id="contact" className="text-center">
      <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <input className="border p-2 w-80 rounded" type="text" placeholder="Votre nom" required />
        <input className="border p-2 w-80 rounded" type="email" placeholder="Votre email" required />
        <textarea className="border p-2 w-80 rounded" rows="4" placeholder="Votre message" required></textarea>
        <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition">
          Envoyer
        </button>
      </form>
      {status && <p className="mt-3 text-green-700">{status}</p>}
    </section>
  );
}
