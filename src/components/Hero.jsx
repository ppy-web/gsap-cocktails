import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1,
      ease: "expo",
      stagger: 0.06,
    });
    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.5,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
  }, []);
  return (
    <div>
      <section id="hero" className="noisy">
        <h1 className="title">Mao Tai</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br />
                of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Cocktails use
                spirits (such as whiskey, vodka, gin, etc.) as the base, and are
                blended with auxiliary ingredients like fruit juice, syrup, soda
                water, and herbs, often garnished with lemon slices, mint
                leaves, or cherries. 
              </p>
              <a href="#cocktails"></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
