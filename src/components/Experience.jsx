import TextExperience from "./sub/_textExperience"
import React from 'react'

export default function Experience() {


  const [text, setText] = React.useState({
    title:'Marketing Analyst',
    company: 'Accenture',
    date: 'From 2020 to present',
    bullet1:'Designing and executing creative integrated corporate marketing campaigns to increase brand value and visibility.',
    bullet2: 'Designed 4 landing pages on Accenture.com',
    bullet3: 'Tracked and analyzed marketing campaign KPI’s and relevant insight to quantify campaigns progress and to strategically improve next actions.'
  })



  function changeText(e) {
    e.preventDefault()
    setText(prevText => {
        if (e.target.innerText === 'Accenture') {
          return {
            title:'Marketing Analyst',
            company: 'Accenture',
            date: 'From 2020 to present',
            bullet1:'Designing and executing creative integrated corporate marketing campaigns to increase brand value and visibility.',
            bullet2: 'Designed 4 landing pages on Accenture.com',
            bullet3: 'Tracked and analyzed marketing campaign KPI’s and relevant insight to quantify campaigns progress and to strategically improve next actions.'
          }
        } else if (e.target.innerText === 'Le Wagon') {
          return {
            title:'Web Developer Teacher Assistant',
            company: 'Le Wagon',
            date: 'From 2022 to Present',
            bullet1: 'Provide support and assistance to students and small groups to help them better understand the content and help them to complete assignments.',
            bullet2: 'Support students to overcome issues and debugging code',
            bullet3: 'Review topics taught in class with individual students who need extra support',
            }
        } else if (e.target.innerText === 'Freelancing') {
          return {
            title:'Frontend Developer',
            company: 'Freelance',
            date: 'From 2022 to Present',
            bullet1: 'Development of websites layout using HTML, CSS, Ruby on Rails, JavaScript and different JS Libraries.',
            bullet2: 'Implement feature as infinite scrolling, Ajax Search and API fetching.',
            bullet3: 'Develop UI/UX Mobile-First Design on Figma'

          }
        }
    })
  }

  return (
    <>
      <div id="experience" className="mx-auto max-w-7xl px-2 min-h-screen sm:px-6 lg:px-8 bg-slate-800 text-white flex items-center justify-center ">
        <div className="w-2/3">
          <p className="text-sm text-violet-400 underline-offset-4 font-semibold mb-6">.myExperience()</p>
            <div className="flex gap-12">
              <ul className="tabs text-slate-300" >
                <li>
                  <a href="" className="tab active active:bg-violet-700 current:border-violet-300 focus:border-l-4 focus:border-violet-300" test='test' onClick={changeText}>Accenture</a>
                </li>
                <li>
                  <a href="" className="tab active:bg-violet-700 focus:border-l-4 focus:border-violet-300" onClick={changeText}>Le Wagon</a>
                </li>
                <li>
                  <a href="" className="tab active:bg-violet-700 focus:border-l-4 focus:border-violet-300" onClick={changeText}>Freelancing</a>
                </li>
              </ul>
              <div className="flex-grow">
                <TextExperience
                  item={text}
                  />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
