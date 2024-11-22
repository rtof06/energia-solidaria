import Image from 'next/image';
import Instagram from "@/public/img/InstagramP.png";
import Twitter from "@/public/img/TwitterX.png";
import TikTok from "@/public/img/TikTok.png";
import Linkedin from "@/public/img/LinkedInP.png";
import Youtube from "@/public/img/YouTube.png";
import Facebook from "@/public/img/Facebook.png";
import logoAmplexus from "@/public/img/logo-amplexus.png";

export default function Footer() {
  const redesSociais = [
    { id: "instagram", link: "https://instagram.com/fiap", img: Instagram, alt: "Logo Instagram" },
    { id: "twitter", link: "https://twitter.com/fiap", img: Twitter, alt: "Logo X" },
    { id: "tiktok", link: "https://tiktok.com/@fiap", img: TikTok, alt: "Logo TikTok" },
    { id: "linkedin", link: "https://linkedin.com/company/fiap", img:Linkedin, alt: "Logo LinkedIn" },
    { id: "youtube", link: "https://youtube.com/fiap", img: Youtube, alt: "Logo Youtube" },
    { id: "facebook", link: "https://www.facebook.com/fiap", img: Facebook, alt: "Logo Facebook" }
  ];

  return (
    <footer className="bg-main-color flex justify-between max-sm:flex-col max-sm:items-center p-5 bg-main-color-low-opacity text-center">
      <div>
        <p className="text-lg font-bold">Siga nas redes sociais:</p>
        <ul className="list-none p-0 flex justify-center">
          {redesSociais.map((rede) => (
            <li key={rede.id} className="inline-block mx-1">
              <a href={rede.link} className="inline-block">
                <Image src={rede.img} alt={rede.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <Image src={logoAmplexus} alt="Logo da Amplexus" width={40} height={20} />
        </div>
        <p className="text-sm text-gray-600">© 2024 Porto & FIAP</p>
      </div>
    </footer>
  );
}