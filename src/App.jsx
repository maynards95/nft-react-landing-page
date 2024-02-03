import './App.css'
import SponsorItemList from '@/components/SponsorItemList'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nft19941 from '@/assets/nft-19941.png'
import NftCardList, { nfts } from '@/components/NftCardList'
import NftCardWithText from '@/components/NftCardWithText'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft19941} />
        <SponsorItemList />
        <NftCardList />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 23/12"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="orange"
          imageOnRight={true}
        />
      </div>
    </div>
  )
}

export default App
