export default function Contact() {

  return (
    <>
      <div id="contact" className="mx-auto max-w-7xl px-2 min-h-screen sm:px-6 lg:px-8 bg-slate-800 text-white flex items-center justify-center">
        <div className="w-4/5 flex items-center justify-center">
          <div className='contact text-center flex flex-col gap-4'>
                <h1 className="text-violet-400 text-4xl font-bold">Get in touch</h1>
                <p >Do you need more information or do you have any ideas or project you want to realize?</p>
                <p>Let's talk about it!</p>
                <button><a className="transition delay-150 duration-200 ease-in-out inline-flex items-center justify-center rounded-md border border-violet-400 px-5 py-3 text-base font-medium text-violet-400 mt-4 hover:bg-violet-400 hover:text-slate-300" href="mailto:federicadivincenzo5@gmail.com">Drop me a line</a> </button>
          </div>
        </div>
      </div>
    </>
  )
}
