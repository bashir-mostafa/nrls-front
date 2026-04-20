import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const socialLinks = {
  email: {
    icon: faEnvelope,
    text: "support@nrls.com",
    to: "mailto:support@nrls.com",
  },
  facebook: {
    icon: faFacebookF,
    text: "مركز روج آفا للدراسات الاستراتيجية NRLS",
    to: "https://www.facebook.com/nrls.rojava",
  },
  twitter: {
    icon: faTwitter,
    to: "https://twitter.com/nrls_rojava",
    text: "nrls_rojava",
  },
  youtube: {
    icon: faYoutube,
    text: "nrlsrojava",
    to: "https://www.youtube.com/channel/UCsuhGM9jLlGgu93F5VyVeAw?view_as=subscriber",
  },
  whatsapp: {
    icon: faWhatsapp,
    text: "+963993822054",
    to: "https://wa.me/963993822054",
  },
  instagram: {
    icon: faInstagram,
    text: "nrlsrojava",
    to: "https://www.instagram.com/nrlsrojava",
  },
};
