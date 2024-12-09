"use client";
import React, { useEffect, useState } from "react";
import { TitleFn } from "../Functions/Functions";
import Image from "next/image";
import { imgurl } from "../Cradisial/Cradisial"; // This is the base URL for images
import Slider from "react-slick";
import { getCategoryWithProduct } from "../API/page";
import Link from "next/link";
import { frame1 } from "../../../public/Images/Images";
const CurrentTrends = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategoryWithProduct(); // No need for an argument
      console.log(response);
      if (response.success && response.data.length >= 1) {
        setCategories(response.data);
      } else {
        console.error("Failed to fetch categories:", response.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-[50px]">
      <div className="lg:max-w-[1440px] m-auto px-[20px]">
        <div className="text-center">
          <TitleFn title="Current Trends" />
        </div>
        <div>
          <Slider {...settings}>
            {categories.map((item) => (
              <div key={item._id}>
                <Link href="/">
                  <div className="border-[1px] border-lightgray p-[10px] rounded-sm">
                    <div>
                      {/* Use dynamic image source */}
                      <Image
                        src={`${imgurl}/${item.image}`} 
                        className="object-cover min-h-[350px]"
                        alt="product img"
                        width={500}
                        height={350} 
                      />
                    </div>
                    <div>
                      <p className="text-darkGray text-[18px] font-onest">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CurrentTrends;
