import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const footerContent = {
  footerText: "Website by Christian Palacios",
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/rune-encoder",
      icon: FaGithub,
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://linkedin.com/in/christian-palacios-3536281aa/",
      icon: FaLinkedin,
    },
    {
      id: 3,
      name: "Indeed",
      url: "https://profile.indeed.com/p/christianp-j1b1fb2",
      icon: SiIndeed,
    },
    {
      id: 4,
      name: "Twitter",
      url: "https://twitter.com/rune_encoder",
      icon: FaTwitterSquare,
    },
    {
      id: 5,
      name: "Instagram",
      url: "https://www.instagram.com/rune_encoder/",
      icon: FaInstagram,
    },
    {
      id: 6,
      name: "TikTok",
      url: "https://www.tiktok.com/@rune_encoder",
      icon: FaTiktok,
    },
    {
      id: 7,
      name: "Spotify",
      url: "https://open.spotify.com/user/1238388654?si=w9VCJZNHSyO980eQ_OVUEw",
      icon: FaSpotify,
    },
  ],
};

export default footerContent;
