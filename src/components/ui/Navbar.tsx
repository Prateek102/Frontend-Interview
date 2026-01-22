import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer"
        >
          CA Monk
        </h1>

        <nav className="flex gap-6 items-center">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => scrollToId("about")}>About</button>
          <button onClick={() => scrollToId("contact")}>Contact</button>

          <Button
            variant="secondary"
            onClick={() => scrollToId("create-blog")}
          >
            Create Blog
          </Button>
        </nav>
      </div>
    </header>
  );
}
