import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4 min-h-screen bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contáctanos</h1>
          <p className="text-gray-500 text-center mb-8">
            Cuéntanos sobre tu negocio y te ayudamos a crecer.
          </p>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <ContactForm />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-400 text-sm text-center py-6">
        <p>© 2026 Centro de Negocios Santiago · SERCOTEC · Manuel Rodríguez Sur 749, Santiago</p>
      </footer>
    </>
  );
}
