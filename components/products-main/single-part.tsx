"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { getSingleProduct } from "@/service/product.service";
import { useEffect, useState } from "react";

export default function SinglePart() {
  const [product, setProduct] = useState<any>({});
  console.log(product);

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "400px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };

  const getData = async () => {
    const res = await getSingleProduct();
    if (res && res.data) {
      setProduct(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-center p-4">
      <div className="w-full xl:max-w-[800px] sm:max-w-[500px] sm:h-auto xl:h-auto sm:mb-[240px] xl:mb-[50px]">
        <Carousel arrows infinite={true} autoplay>
          {product.image_url && product.image_url.length > 0 ? (
            product.image_url.map((e: string) => (
              <div key={e}>
                <div
                  style={contentStyle}
                  className="relative flex justify-between items-center px-2 text-[#1F1D14]"
                >
                  <div className="grid justify-center items-center sm:pl-[80px] xl:pl-[170px]">
                    <Image
                      src={e}
                      width={350}
                      height={350}
                      className="bg-contain z-[999]"
                      alt={product.product_name}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={contentStyle}>
              <p>No images available</p>
            </div>
          )}
        </Carousel>
      </div>
      <div className="w-full xl:w-[400px] h-auto gap-5 bg-white p-7 sm:mb-9">
        <h1 className="text-[32px] font-medium w-full xl:w-[310px]">
          {product.product_name}
        </h1>
        <p className="text-[14px] mt-2 mb-2 font-normal">{product.description}</p>
        <p>
          В комплекте:
          <span className="font-semibold ml-3">{product.count + " шт"}</span>
        </p>
        <p>
          Страна производства:
          <span className="font-semibold ml-3">{product.made_in}</span>
        </p>
        <p>
          Макс и Мин возраст:
          <span className="font-semibold ml-3">
            {product.age_min + " - " + product.age_max}
          </span>
        </p>
        <p>
          Цвет:
          <span className="font-semibold ml-3">{product.color}</span>
        </p>
        <p>
          Для:
          <span className="font-semibold ml-3">{product.for_gender}</span>
        </p>
        <span className="mt-7 mb-5 text-[24px]">{"Цена: " + product.cost}</span>
        <div className="mt-5 mb-5 flex gap-3">
          <button className="w-[120px] h-[40px] bg-[#FBD029]">Корзина</button>
          <button className="w-[120px] h-[40px] border-[#FBD029] border-2">
            Сравнить
          </button>
        </div>
      </div>
    </div>
  );
}
