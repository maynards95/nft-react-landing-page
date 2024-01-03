function SponsorItem(props) {
  const logo = props.logo
  const text = props.text

  return (
    <div className='sponsor-item'>
    <img className='sponsor-item_logo"' src={logo} />
    <span>{text}</span>
  </div>
  );
}

export default SponsorItem