
const Hero = () => {
  return(
    <section className="grid grid-cols-[100px_auto] gap-4 sm:py-6 border-b dark:border-neutral-800">
      <img src="/favicon.svg" alt="" className="bg-neutral-800 rounded-full" />
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-neutral-600 dark:text-[#D2C2B0] text-2xl font-semibold">Lucas Daniel Fuentes</h2>
        <p className="text-neutral-400 dark:text-neutral-400 text-md">Frontend Developer | JavaScript | ReactJS | HTML • CSS</p>
      </div>
    </section>
  )
}

export { Hero }