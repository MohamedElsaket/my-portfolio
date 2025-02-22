import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MohamedElsaket" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mohamed-elsaket-996285276",
  },
  { icon: <FaWhatsapp />, path: "https://wa.me/+201030848281" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/mohamed.elsaket.5" },
];

export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => (
        <Link className={iconStyles} key={i} href={item.path} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
