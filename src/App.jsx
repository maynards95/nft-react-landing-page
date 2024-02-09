import './App.css'
import SponsorItemList from '@/components/SponsorItemList'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nft19941 from '@/assets/nft-19941.png'
import Nft55555 from '@/assets/nft-55555.png'
import EthereumLogoColorful from '@/assets/ethereum-logo.png'
import Ethereum from '@/assets/ethereum.png'
import NftCardList, { nfts } from '@/components/NftCardList'
import NftCardWithText from '@/components/NftCardWithText'
import LogoWithText from '@/components/LogoWithText'
import LinkToOpenSea from '@/components/LinkToOpenSea'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft19941} />
        <NftCardWithText
          nftData={nfts[0]}
          title="Full Release 6/10"
          descriptionTop={
            <>
              Four exclusive NFTs have been launched ahead of schedule,
              available for bidding on <LinkToOpenSea color="black" />.
            </>
          }
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="orange"
          imageOnRight={true}
        />
        <SponsorItemList />
        <NftCardList />
        <NftCardWithText
          nftData={nfts[0]}
          title="Full Release 6/10"
          descriptionTop={
            <>
              Four exclusive NFTs have been launched ahead of schedule,
              available for bidding on <LinkToOpenSea color="dark" />.
            </>
          }
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out!"
          color="green"
        />
        <div className="App_logo-with-text">
          <LogoWithText
            logo={EthereumLogoColorful}
            title="Experience a Unique NFT"
            descriptionTop="Ensure you're part of our groundbreaking NFT launch. Register below to stay informed when we debut on 18/9."
            descriptionBottom="Ensure you're part of our groundbreaking NFT launch. Register below to stay informed when we debut on 18/9. Don't miss out!"
          />{' '}
          <LogoWithText
            logo={Ethereum}
            title="Experience a Unique NFT"
            descriptionTop="Ensure you're part of our groundbreaking NFT launch. Register below to stay informed when we debut on 18/9."
            descriptionBottom="Ensure you're part of our groundbreaking NFT launch. Register below to stay informed when we debut on 18/9. Don't miss out!"
          />
        </div>
        <Hero heroImage={Nft55555} />
      </div>
    </div>
  )
}

export default App
