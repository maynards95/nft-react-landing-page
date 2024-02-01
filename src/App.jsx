import './App.css'
import SponsorItemList from '@/components/SponsorItemList'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nft19941 from '@/assets/nft-19941.png'
import NftCard from '@/components/NftCard'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft19941} />
        <SponsorItemList />
        <NftCard
          image={Nft19941}
          name="Abmord"
          price="2.99"
          daysLeft={10}
          number={23323}
        />
      </div>
    </div>
  )
}

export default App
