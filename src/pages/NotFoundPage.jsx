import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full border mb-6">
          <ExclamationTriangleIcon className="w-7 h-7" />
        </div>

        <h2 className="text-xl font-semibold mb-6">Page Not Found</h2>

        <Link
          to="/"
          className="px-6 py-2 bg-black text-white rounded-full text-sm hover:opacity-90 transition"
        >
          Go To Homepage
        </Link>
      </main>

      <Footer />
    </div>
  );
}
