import './style.css'

const LinkToOpenSea = (props) => {
  const { color } = props
  return (
    <a
      className={`opensea-link ${color}`}
      href="https://opensea.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      OpenSea
    </a>
  )
}

export default LinkToOpenSea
