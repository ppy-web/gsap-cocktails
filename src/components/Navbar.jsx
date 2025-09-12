import { navLinks } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(15px)",
        duration: 1,
        ease: "power3.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="#hero" className="flex items-center gap-2">
          <img src={`${import.meta.env.VITE_BASE_URL}/images/logo.png`} alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
