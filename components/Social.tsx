import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "/" },
  { icon: <FaLinkedin />, path: "/" },
  { icon: <FaWhatsapp />, path: "/" },
  { icon: <FaFacebook />, path: "/" },
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
        <Link className={iconStyles} key={i} href={item.path}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
