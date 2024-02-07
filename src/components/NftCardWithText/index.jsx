import NftCard from '@/components/NftCard'
import './style.css'

function NftCardWithText(props) {
  const {
    nftData,
    title,
    descriptionTop,
    descriptionBottom,
    color,
    imageOnRight,
  } = props

  return (
    <div
      className={`nft-card-with-text ${color} ${imageOnRight ? 'image-on-right' : ''}`}
    >
      <NftCard
        name={nftData.name}
        image={nftData.image}
        daysLeft={nftData.daysLeft}
        price={nftData.price}
        number={nftData.number}
      ></NftCard>
      <div className="nft-card-with-text_text">
        <h3 className='nft-card-with-text_title'>{title}</h3>
        <div className="nft-card-with-text_description">
          <p>{descriptionTop}</p>
          <p>{descriptionBottom}</p>
        </div>
        <span className="nft-card-with-text_text-check-it-out">
          Check out the collection {'>'}
        </span>
      </div>
    </div>
  )
}

export default NftCardWithText
