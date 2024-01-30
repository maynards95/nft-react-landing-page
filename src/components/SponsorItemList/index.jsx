import SponsorItem from '../SponsorItem'

import LogoOpendoor from '@/assets/logo-opendoor.png' //figure out why alias is not working properly?
import LogoBoomerang from '@/assets/logo-boomerang.png'
import LogoBlimp from '@/assets/logo-blimp.png'
import LogoDroplet from '@/assets/logo-droplet.png'

function SponsorItemList() {
  return (
    <div classname="sponsor-item-list">
      <SponsorItem logo={LogoBoomerang} text="Boomerang" />
      <SponsorItem logo={LogoBlimp} text="Blimp" />
      <SponsorItem logo={LogoDroplet} text="Droplet" />
      <SponsorItem logo={LogoOpendoor} text="Opendoor" />
    </div>
  )
}

export default SponsorItemList
