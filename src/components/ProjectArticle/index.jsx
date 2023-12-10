import Carousel from "../Carousel"

const ProjectArticle = (props) => {
  return (
    <article className="px-4 border-b dark:border-neutral-800 pb-8">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-neutral-600 dark:text-neutral-200 text-md font-semibold"> • {props.title}</h3>
        <p className="text-neutral-400 dark:text-neutral-400 text-sm">
          {props.desc}
        </p>
        <span className="text-neutral-400 dark:text-neutral-500 text-sm">
          {props.techs}
        </span>
      </div>
      <Carousel slides={props.slides} />
    </article>
  )
}

export { ProjectArticle }