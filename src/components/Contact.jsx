import { openingHours, socials } from "../../constants/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
      ease: "power2.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #content p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
      })
      .to("#f-right-leaf", {
        duration: 1,
        y: "-50",
        repate: -1,
        yoyo: true,
        ease: "power2.inOut",
      }).to("#f-left-leaf", {
        duration: 1,
        repate: -1,
        y: "-50",
        ease: "power2.inOut",
        yoyo: true,
      }, '<');
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>334,Rag, Blive, #502, Ca 9123 </p>
        </div>
        <div>
          <h3>Call Us</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
