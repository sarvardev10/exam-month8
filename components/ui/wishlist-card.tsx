"use client";
import { HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { getLike, postLike } from "@/service/wishlist.service";
import { useEffect, useState } from "react";

export default function WishlistCard() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getLike(10, 1);
    setData(res?.data.products);
  };
  useEffect(() => {
    getData();
  }, []);
  const postData = async (id: any) => {
    const response = await postLike(id);
    if (response && response.status === 201) {
      console.log(response.data);
      getData();
    }
  };
  

  return (
    <div className="container mx-auto flex justify-around relative flex-wrap gap-4 md:gap-8">
      {data?.map((product: any) => (
        <div
          key={product.product_id}
          className="relative w-[250px] h-[350px] bg-white flex flex-col items-center justify-between shadow-md"
        >
          <div
            className="absolute right-[20px] top-[20px] cursor-pointer"
            onClick={() => postData(product.product_id)}
          >
            <HeartOutlined />
          </div>
          <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
            <Image
              src={product?.image_url[0]}
              alt={product.product_name}
              width={150}
              height={194}
            />
          </div>
          <div className="px-3 text-center">
            <h1 className="text-[14px] sm:text-[16px] md:text-[18px]">
              {product.product_name}
            </h1>
            <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
              {product.cost} uzs
            </p>
            {product.discount > 0 && (
              <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                {Math.ceil(product.cost / (1 - product.discount / 100))} uzs
              </span>
            )}
          </div>
          <Link
            onClick={() => Cookies.set("product_id", product.product_id)}
            href={`/${product.product_id}`}
            className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
          >
            Корзина
          </Link>
        </div>
      ))}
    </div>
  );
}