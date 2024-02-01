import './style.css'

function Button(props) {
  const { text } = props
  return <button className="button">{text}</button>
}

export default Button
