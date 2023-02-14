import instagramIcon from "../assets/instagram.png"
import facebookIcon from "../assets/facebook.png"
import twitterIcon from "../assets/twitter.png"
import linkedinIcon from "../assets/linkedin.png"


const SocialMediaIcons = () => {


  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a className="hover:opacity-50 transition duration-500" href="http://www.linkedin.com" target="_blank" fel="noreferrer">
            <img src={linkedinIcon}alt="linkedin-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="http://www.twitter.com" target="_blank" fel="noreferrer">
            <img src={twitterIcon} alt="twitter-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="http://www.facebook.com" target="_blank" fel="noreferrer">
            <img src={facebookIcon} alt="facebook-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500" href="http://www.instagram.com" target="_blank" fel="noreferrer">
            <img src={instagramIcon} alt="instagram-link" />
        </a>
    </div>
  )
}

export default SocialMediaIcons