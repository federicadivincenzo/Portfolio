import React from 'react'

export default function Experience() {

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 min-h-screen sm:px-6 lg:px-8 bg-slate-800 text-white flex items-center justify-center">
        <div className="w-4/5 projects-container">
          <p className="text-sm text-violet-400 underline-offset-4 font-semibold mb-6">.myExperience()</p>
          <div className='project-containers grid grid-cols-7'>
                <img className="col-span-4 rounded drop-shadow-md" src="https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <div className='col-span-3 project--content text-right flex flex-col'>
                  <h1>BEAM APP</h1>
                  <div className='project--text-description'>
                    <p className='p-4 bg-slate-800'>A web app to browse events in the world and find find new friends. Integrated group and private chat to organize meetings. </p>
                  </div>
                  <p>HTML, CSS, JavaScript, Stimulus, Ruby on Rails</p>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
