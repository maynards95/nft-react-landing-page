import './App.css'
import SponsorItemList from '@/components/SponsorItemList'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nft19941 from '@/assets/nft-19941.png'
import NftCard from '@/components/NftCard'
import NtfCardList from './components/NftCardList'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={Nft19941} />
        <SponsorItemList />
        <NtfCardList />
      </div>
    </div>
  )
}

export default App
