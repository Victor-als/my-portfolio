/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const ParticlesComponent = () => {
  useEffect(() => {
      (window as any).particlesJS("particles-container-interactive", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 1000 } },
          color: { value: "#3b0039" },
          shape: {
            type: "circle",
            polygon: { nb_sides: 1 },
          },
          opacity: {
            value: 1,
            random: false,
           
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#080891",
            opacity: 6,
            width: 0.4,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          modes: {
            grab: { distance: 400, line_linked: { opacity: 10 } },
            bubble: {
              distance: 800,
              size: 10,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });

  }, []);

  return (
    <>
      <div
        id="particles-container-interactive"
        className="absolute top-0 left-0 w-full h-full z-20"
      />

    </>
  );
};

export default ParticlesComponent;
