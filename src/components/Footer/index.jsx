import './style.css'
import AppLogo from '@/assets/app-logo.png'
import FacebookLogo from '@/assets/facebook.png'
import InstagramLogo from '@/assets/instagram.png'
import TwitterLogo from '@/assets/twitter.png'
import TikTokLogo from '@/assets/tiktok.png'

function Footer() {
  return (
    <section className="footer">
      <div className="footer-top">
        <section className="footer-nftlanding">
          <img className="footer-logo" src={AppLogo} alt="app logo" />
          <div>Exclusive NFT Collection</div>
          <img
            className="facebook-logo"
            src={FacebookLogo}
            alt="Facebook logo"
          />
          <img
            className="instagram-logo"
            src={InstagramLogo}
            alt="Instagram logo"
          />
          <img className="twitter-logo" src={TwitterLogo} alt="Twitter logo" />
          <img className="tiktok-logo" src={TikTokLogo} alt="TikTok logo" />
        </section>
        <div className="footer-links">
          <div className="footer-about">
            <h6 className="footer-about-title">About</h6>
            <div className="footer-about-descriptions">
              <p>About</p>
              <p>Terms</p>
              <p>Legal</p>
            </div>
          </div>
          <div className="footer-nft">
            <h6 className="footer-nft-title">Nft</h6>
            <div className="footer-nft-descriptions">
              <p>OpenSea</p>
              <p>Maker</p>
              <p>Learn</p>
            </div>
          </div>
          <div className="footer-contact">
            <h6 className="footer-contact-title">Contact</h6>
            <div className="footer-contact-descriptions">
              <p>Press</p>
              <p>Support</p>
            </div>
          </div>
          <div className="footer-social">
            <h6 className="footer-social-title">Social</h6>
            <div className="footer-social-descriptions">
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">© Copyright 2024</div>
        <span className="footer-launching">Launching June 2024</span>
      </div>
    </section>
  )
}

export default Footer
