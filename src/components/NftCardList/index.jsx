import './style.css'
import NftCard from '@/components/NftCard'
import Nft11381 from '@/assets/nft-11381.jpg'
import Nft23232 from '@/assets/nft-23232.jpg'
import Nft33333 from '@/assets/nft-33333.jpg'
import Nft43234 from '@/assets/nft-43234.jpg'

export const nfts = [
  {
    image: Nft43234,
    name: 'Ecm',
    price: 1.99,
    daysLeft: 3,
    number: 43234,
  },
  {
    image: Nft23232,
    name: 'Azmod',
    price: 1.23,
    daysLeft: 20,
    number: 23232,
  },
  {
    image: Nft33333,
    name: 'Ramod',
    price: 1.78,
    daysLeft: 15,
    number: 33333,
  },
  {
    image: Nft11381,
    name: 'Ezmod',
    price: 1.56,
    daysLeft: 18,
    number: 11381,
  },
]

function NftCardList() {
  return (
    <div className="nft-card-list">
      {nfts.map((nft) => {
        return (
          <NftCard
            image={nft.image}
            name={nft.name}
            price={nft.price}
            daysLeft={nft.daysLeft}
            number={nft.number}
          />
        )
      })}
    </div>
  )
}

export default NftCardList
