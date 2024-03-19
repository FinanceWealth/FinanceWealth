import { useRef, useEffect, useState } from "react";
import "../../styles/parallax.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Parallax() {
  const [background, setBackground] = useState(20);

  useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top top",
                end: "2000 bottom",
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    setBackground(Math.ceil(self.progress * 100 + 20))
                },
            },
        });
        tl.to(
          montanha3.current,
          {
              y: "-=70",
          },
          0
      );
      tl.to(
        montanha2.current,
          {
              y: "-=20",
          },
          0
      );
      tl.to(
        montanha1.current,
          {
              y: "+=5",
          },
          0
      );
      tl.to(
        copy.current,
        {
            y: "0%",
            opacity: 0
        },
        0
      );
      });
      return () => ctx.revert();
    }, []);


  const parallaxRef = useRef(null);
  const montanha3 = useRef(null);
  const montanha2 = useRef(null);
  const montanha1 = useRef(null);
  const copy = useRef(null);


  // style={{ background: `linear-gradient(#069e2d, #03440c ${background}%, #058e3f, #005c02 )` }} 
  return (

    <div className="parallax-outer" >
      <div ref={parallaxRef} className="parallax " >
        <img ref={montanha3} className="montanha-3" src="../images/parallax/Camada2.png"/>
        <img ref={montanha2} className="montanha-2" src="/images/parallax/Camada1.png" />
        <img ref={montanha1} className="montanha-1" src="/images/parallax/Background.png" alt="ODE"/>
      </div>
      <div ref={copy} className="copy">
        <h1>Finance Wealth</h1>
        <span>No Finance Wealth, acreditamos que a liberdade financeira é o alicerce para uma vida plena e próspera. Nosso compromisso é fornecer insights valiosos, ferramentas inovadoras e orientação especializada para ajudá-lo a tomar decisões financeiras inteligentes e alcançar seus objetivos.</span>
        <button className="copy__button"><a href="./pages/register">Inscrever-se</a></button>
      </div>
    </div>
  )}
