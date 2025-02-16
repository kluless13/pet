"use client";
import Particles from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";

const ParticleBackground = () => {
  return (
    <Particles
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent"
          },
        },
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {},
          },
        },
        particles: {
          number: {
            value: 40
          },
          shape: {
            type: "image",
            options: {
              image: {
                src: "/paw-print-icon-in-line-style-dog-or-cat-pawprint-illustration-animal-silhouette-vector.jpg",
                width: 100,
                height: 100,
              }
            },
          },
          opacity: {
            value: 0.75,
          },
          size: {
            value: { min: 30, max: 50 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: "bounce",
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground; 