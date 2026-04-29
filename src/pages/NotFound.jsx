import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-muted-foreground max-w-md mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
        >
          <Home size={18} />
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-2 rounded-lg border hover:bg-secondary transition"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>
    </div>
  );
};