import './style.css'
import EthereumLogo from '@/assets/ethereum-logo.png'

function NftCard(props) {
  const { image, number, name, price, daysLeft } = props
  return (
    <div className="nft-card">
      <img className="nft-card_img" src={image} alt={`nft-card-${name}`} />
      <div className="nft-card_details">
        <span className="nft-card_details-series">Gloop series</span>
        <span className="nft-card_details-top-bid">Top bid</span>
        <span className="nft-card_details-name">{name}</span>
        <span className="nft-card_details-price">
          <img
            className="nft-card_details-ethereum-logo"
            src={EthereumLogo}
            alt="ethereum-logo"
          />{' '}
          {price}
          <span>ETH</span>
        </span>
        <span className="nft-card_details-number">#{number}</span>
        <span className="nft-card_details-days-left">{daysLeft} days left</span>
      </div>
    </div>
  )
}

export default NftCard
