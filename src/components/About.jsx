export default function About() {
  return (
    <>
      <div id="about" className="mx-auto max-w-7xl px-2 min-h-screen sm:px-6 lg:px-8 bg-slate-800 text-white flex items-center justify-center">
        <div className="w-2/3">
          <p className="text-sm text-violet-400 underline-offset-4 font-semibold mb-6">.aboutMe()</p>
          <p className="w-5/6 leading-loose mb-4 text-slate-300 text-base">
            <p>Hello! My name is Federica and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! </p>
            <p>Fast-forward to today, and I’ve had the privilege of joining Le Wagon intesive Bootcamp where I designed, implemented and shipped to production Beam app and a clone of AirBnB using OOP and MVC principles. </p>
            <p>My main focus these days is building accessible, inclusive products and mastering React Framework.</p>
            <p>At the moment I am working as Marketing Assistan in Accenture where I have been responisble of desgigning 4 lading pages on the external Website.</p>
          </p>

          <p className="text-sm text-violet-400 underline-offset-4 font-semibold mb-2">.myTechnologies() </p>
          <div class="grid grid-cols-2 gap-2 w-4/6">
            <div >
              <ul className="list-disc list-inside text-slate-300">
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript (ES6)</li>
              </ul>
            </div>
            <div >
              <ul className="list-disc list-inside text-slate-300">
                <li>mySQL & postgreSQL</li>
                <li>Heroku</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
