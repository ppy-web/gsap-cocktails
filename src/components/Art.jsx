import gsap from "gsap";
import { goodLists, featureLists } from "../../constants/index.js";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center center",
        maskSize: "400%",
        duration: 5,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <div id="art">
      <div className="container max-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}/images/check.png`}
                  alt="check"
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src={`${import.meta.env.VITE_BASE_URL}images/under-img.jpg`}
              alt="cocktails"
              className="abs-center masked-img size-full abject-contain"
              style={{
                maskImage: `url(${
                  import.meta.env.VITE_BASE_URL
                }/images/mask-img.png`,
              }}
            />
          </div>
          <ul className="space-y-4 will-fade">
            {featureLists.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worth Perfection</h2>
          <div id="masked-content">
            <h3>Made with Ppy, Popured in the USA</h3>
            <p>
              The materials are of high quality and the craftsmanship is
              exquisite. Made just for You
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
