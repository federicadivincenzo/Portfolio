export default function Hero() {
  return (
    <>
      <div id="hero" className="mx-auto max-w-7xl px-2 min-h-screen sm:px-6 lg:px-8 bg-slate-800 text-white flex items-center justify-center">
        <div className="w-2/3">
          <p className=" text-sm text-violet-400 underline-offset-4 font-semibold mb-2">.sayWhoIAm('Federica')</p>
          <h1 className="text-6xl font-bold mb-4">Hello, I am Federica<span className="text-violet-400">.</span></h1>
          <p className="w-5/6 leading-loose mb-4 text-slate-300 text-lg">I am a Junior Frontend Developer specialized in creating and developing <span className="underline decoration-violet-400 underline-offset-4">creative webistes</span> and turing <span className="underline decoration-violet-400 underline-offset-4">ideas into ditial experiences</span>. Currently focusing on personal projects and mastering <span className="underline decoration-violet-400 underline-offset-4">React</span>. </p>
          <div className="inline-flex rounded-md shadow">
            <a
              href="#about"
              className="transition delay-150 duration-200 ease-in-out inline-flex items-center justify-center rounded-md border border-violet-400 px-5 py-3 text-base font-medium text-violet-400 hover:bg-violet-400 hover:text-slate-300"
            >
              Check out more
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
