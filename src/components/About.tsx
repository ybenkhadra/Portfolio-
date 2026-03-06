/**
 * Composant About - Section "À propos de moi"
 * Affiche la description personnelle et les informations de base
 */
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="apropos" className="scroll-mt-20 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-slate-500 to-sky-600 flex items-center justify-center shadow-2xl">
                <span className="text-8xl sm:text-9xl text-white font-bold">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              {/* Décoration */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-slate-600/30 -z-10" />
            </div>
          </div>

          {/* Texte à propos */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Salut, je suis{" "}
              <span className="text-slate-600 dark:text-slate-400">
                {personalInfo.name}
              </span>
            </h3>

            {/* Description avec sauts de ligne préservés */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.about.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Informations rapides */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-slate-600 dark:text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Localisation
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-slate-600 dark:text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Email
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton CV */}
            <div className="mt-8">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Voir mon LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

