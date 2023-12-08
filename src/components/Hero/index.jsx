
const Hero = () => {
  return(
    <section className="grid grid-cols-[50px_auto] sm:grid-cols-[100px_auto] gap-4 p-4 sm:py-6 border-b dark:border-neutral-800">
      <img src="/favicon.svg" alt="" className="max-w-[100px] bg-neutral-800 rounded-full" />
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-neutral-600 dark:text-neutral-200 text-2xl font-semibold">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-l to-blue-600 from-purple-500 dark:from-blue-600 dark:to-purple-400 ">
            Lucas Fuentes
          </span>
        </h2>
        <p className="text-neutral-400 dark:text-neutral-400 text-md">Frontend Developer</p>
      </div>
    </section>
  )
}

export { Hero }