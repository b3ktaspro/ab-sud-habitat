import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Réalisations", path: "/projects" },
    { label: "À propos", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <button
            type="button"
            onClick={handleLogoClick}
            className="
    flex
    items-center
    gap-3
    cursor-pointer
    group
    transition-all
    duration-300
  "
          >
            <img
              src="/images/logo/logo.jpeg"
              alt="AB Sud Habitat"
              className="
      h-18
      w-18
      rounded-xl
      object-cover
      transition-transform
      duration-300
      group-hover:scale-105
    "
            />

            <div className="text-left">
              <h2
                className="
        text-base
        font-semibold
        text-[#111A5B]
        transition-colors
        duration-300
        group-hover:text-[#2F4ED8]
      "
              >
                AB Sud Habitat
              </h2>

              <p className="text-[11px] text-slate-500">Hérault • Occitanie</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-slate-600 transition hover:text-[#111A5B]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="rounded-xl bg-[#111A5B] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Demander un devis
            </Link>
          </div>

          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={24} className="text-[#111A5B]" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[999] bg-black/20 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ml-auto h-full w-full bg-white"
            >
              <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
                <div>
                  <h2 className="font-semibold text-[#111A5B]">
                    AB Sud Habitat
                  </h2>

                  <p className="text-xs text-slate-500">Hérault • Occitanie</p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-4xl font-light text-[#111A5B]"
                >
                  ×
                </button>
              </div>

              <div
                className="
    flex
    min-h-[calc(100dvh-80px)]
    flex-col
    justify-between
    p-6
    pb-20
  "
              >
                <nav className="flex flex-col">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className="
                          block
                          border-b
                          border-slate-100
                          py-5
                          text-2xl
                          font-semibold
                          text-[#111A5B]
                        "
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="
                      mb-14
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#111A5B]
                      px-6
                      py-4
                      text-base
                      font-medium
                      text-white
                    "
                  >
                    Demander un devis
                  </Link>

                  <div className="space-y-2 text-sm text-slate-500">
                    <p>Béziers • Hérault</p>
                    <p>absudhabitat@gmail.com</p>
                    <p>06 50 45 06 66</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
