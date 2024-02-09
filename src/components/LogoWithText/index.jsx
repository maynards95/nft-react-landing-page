import './style.css'

function LogoWithText(props) {
  const { logo, title, descriptionTop, descriptionBottom } = props
  return (
    <div className="logo-with-text">
      <img className="logo-with-text_image" src={logo} alt="ethereum logo" />
      <h3 className="logo-with-text-heading">{title}</h3>
      <span>{descriptionTop}</span>
      <span>{descriptionBottom}</span>
    </div>
  )
}

export default LogoWithText
