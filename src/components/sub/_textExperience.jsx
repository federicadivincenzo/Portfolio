
export default function TextExperience(props) {
  console.log(props)
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">{props.item.title} <span className="text-violet-400">@ {props.item.company}</span></h1>
      <p className="text-sm text-slate-300 mb-4">{props.item.date}</p>
      <ul className="leading-loose" >
        <li><span className="text-violet-400">❋</span> {props.item.bullet1}</li>
        <li><span className="text-violet-400">❋</span> {props.item.bullet2}</li>
        <li><span className="text-violet-400">❋</span> {props.item.bullet3}</li>
      </ul>
    </div>
  )


}
