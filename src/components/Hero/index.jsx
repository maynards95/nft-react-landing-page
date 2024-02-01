import Button from '@/components/Button'
import './style.css'

function Hero(props) {
  const { heroImage } = props
  return (
    <section className="hero">
      <div className="hero_left">
        <span className="hero_left-launching">Launching Soon</span>
        <h1 className="hero_left-heading">An NFT like no other</h1>
        <p>
          Don't miss out on the release of our new NFT. Sign up below to recieve
          updates when we go live.
        </p>
        <Button className="hero_left-button" text="Sign Up" />
      </div>
      <div className="hero_right">
        <div className="hero_right-image-wrapper">
          <img className="hero_right-image" src={heroImage} alt="hero image" />
          <div className="hero_right-image-shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
