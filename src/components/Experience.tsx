/**
 * Composant Experience - Section "Expérience Professionnelle"
 * Affiche les expériences avec descriptions et réalisations
 */
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon parcours professionnel et mes réalisations
          </p>
        </div>

        {/* Liste des expériences */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  {/* Rôle */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  {/* Entreprise */}
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                {/* Période */}
                <span className="mt-2 sm:mt-0 inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Réalisations */}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
