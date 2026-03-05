/**
 * Composant Skills - Section "CompÃ©tences"
 * Affiche les compÃ©tences organisÃ©es par catÃ©gorie
 */
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="competences" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CompÃ©tences
          </h2>
          <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maÃ®trise
          </p>
        </div>

        {/* Grille de compÃ©tences par catÃ©gorie */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
            >
              {/* Nom de la catÃ©gorie */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full" />
                {skillGroup.category}
              </h3>

              {/* Liste des compÃ©tences */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 text-sm font-medium bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

