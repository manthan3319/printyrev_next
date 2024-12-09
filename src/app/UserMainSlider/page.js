"use client";
import React, { useEffect, useState } from "react";
import { HomeSliderData } from "../Data/page";
import { motion } from "framer-motion";
import Link from "next/link";

const UserMainSlider = () => {
  const [inView, setInView] = useState(false);

  const backgroundStyle = {
    backgroundImage: "url('Images/sliderbg-only.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "800px",
    width: "100%",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000c2",
    zIndex: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("slider");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      style={backgroundStyle}
      className="flex flex-col items-center justify-center"
    >
      <div style={overlayStyle}></div>

      <div className="lg:max-w-[1440px] px-[20px] m-auto relative z-10">
        {HomeSliderData.map((data, index) => (
          <div
            key={index}
            id="slider"
            className="w-[60%] m-auto"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          >
            <motion.div
              className="text-white text-center py-20"
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 100,
                scale: inView ? 1 : 0.9,
              }}
              transition={{
                duration: 1.2,
                ease: [0.68, -0.55, 0.27, 1.55],
              }}
            >
              <h1 className="text-[60px] font-bold font-poppins">
                {data.title}
              </h1>
              <p className="mt-4 text-[22px] font-poppins">{data.disciption}</p>

              <ul className="mt-4 font-onest ">
                {data.ulname.map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      x: inView ? 0 : -30,
                    }}
                    transition={{
                      delay: 0.2 * index,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  >
                   <p className="bg-[#d1cccc21] p-[10px] mb-[5px] inline-block rounded-sm">{item.title}</p> 
                  </motion.li>
                ))}
              </ul>

              <div>
                <Link href="/" className="bg-black font-onest inline-block mt-[50px] py-[15px] px-[20px] rounded-md">Explore Our Posters</Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMainSlider;
