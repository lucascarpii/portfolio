import { ProjectArticle } from "../ProjectArticle";

const projects = [
  {
    title: 'Campus Virtual ISEI',
    desc: 'Esta plataforma fue desarrollada para el Instituto Superior ISEI con el objetivo de facilitar el aprendizaje y la enseñanza, por medio de cursos y contenidos online.',
    techs: 'ReactJs • Vite • TailwindCss • JS',
    slides: [
      "/public/campusvi/index.png",
      "/public/campusvi/cursos.png",
      "/public/campusvi/home.png",
      "/public/campusvi/dark-home.png",
    ]
  },
  {
    title: 'Distri DAF - Control de gastos',
    desc: 'El objetivo de esta aplicacion fue solucionar el problema que tenia la empresa para controlar el balance de gastos e ingresos.',
    techs: 'SvelteKit • Vercel • Vite • TailwindCss • JS',
    slides: [
      "/public/distri-daf/home.png",
      "/public/distri-daf/clients.png",
      "/public/distri-daf/prov.png",
      "/public/distri-daf/chart.png",
      "/public/distri-daf/dark-home.png",
    ]
  },
]

const Projects = () => {
  return (
    <section id="projects" className="p-4 sm:py-6 border-b dark:border-neutral-800">
      <h2 className="text-neutral-600 dark:text-neutral-200 text-lg font-semibold mb-6">Trabajos como Freelance</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectArticle
            key={index}
            title={project.title}
            desc={project.desc}
            techs={project.techs}
            slides={project.slides}
          />
        ))}
      </div>
    </section>
  )
}

export { Projects }