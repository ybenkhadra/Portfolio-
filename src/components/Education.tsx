/**
 * Composant Education - Section "Formation"
 * Affiche le parcours acadÃ©mique sous forme de timeline
 */
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Formation
          </h2>
          <div className="w-20 h-1 bg-slate-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mon parcours acadÃ©mique et mes qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white dark:border-gray-800 z-10" />

                {/* Carte */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                    {/* PÃ©riode */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/50 rounded-full mb-3">
                      {edu.period}
                    </span>

                    {/* DiplÃ´me */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>

                    {/* Ã‰tablissement */}
                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-1">
                      {edu.institution}
                    </p>

                    {/* Localisation */}
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                      ðŸ“ {edu.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

