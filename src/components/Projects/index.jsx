import { ProjectArticle } from "../ProjectArticle";

const projects = [
  {
    title: 'Campus Virtual ISEI',
    desc: 'Esta plataforma fue desarrollada para el Instituto Superior ISEI con el objetivo de facilitar el aprendizaje y la enseñanza, por medio de cursos y contenidos online.',
    techs: 'ReactJs • Vite • TailwindCss • JS',
    slides: [
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ]
  },
  {
    title: 'Distri DAF - Control de gastos',
    desc: 'El objetivo de esta aplicacion fue solucionar el problema que tenia la empresa para controlar el balance de gastos e ingresos.',
    techs: 'SvelteKit • Vercel • Vite • TailwindCss • JS',
    slides: [
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
      "https://wallpapercave.com/wp/wp3386769.jpg",
      "https://wallpaperaccess.com/full/809523.jpg",
      "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ]
  },
]

const Projects = () => {
  return (
    <section className="p-4 sm:py-6 border-b dark:border-neutral-800">
      <h2 className="text-neutral-600 dark:text-neutral-200 text-lg font-semibold mb-6">Proyectos que realicé</h2>
      <div className="flex flex-col gap-14">
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