import './style.css'


function LogoWithText(props) {
  const { logo,title, descriptionTop, descriptionBottom } = props
  return (
    <div className="logo-with-text">
      <img
        className="logo-with-text_image"
        src={logo}
        alt="ethereum logo"
      />
      <h3 className='logo-with-text-heading'>{title}</h3>
      <p>{descriptionTop}</p>
      <p>{descriptionBottom}</p>
    </div>
  )
}

export default LogoWithText
