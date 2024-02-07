import './style.css'
import ButtonBorder from '@/assets/button-border.png'

function Button(props) {
  const { text } = props
  return <button className="button">{text}</button>
}

export default Button
