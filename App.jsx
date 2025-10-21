import { motion } from "framer-motion";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}>
      <header className="absolute top-4 left-4 flex items-center space-x-3">
        <motion.img 
          src="/logo.png" 
          alt="Logo SNTR" 
          className="w-20 h-20" 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          Société Nouvelle des Travaux du Rif
        </h1>
      </header>
      <main className="text-center mt-40">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Bâtir l’avenir avec excellence
        </h2>
      </main>
      <footer className="mt-auto p-10 bg-white bg-opacity-80 w-full">
        <Contact />
      </footer>
    </div>
  );
}
