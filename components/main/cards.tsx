import Image from "next/image";
import img5 from "../../assets/images/pngegg (34) 3.png";
import img6 from "../../assets/images/pngegg (34) 9.png";
import img7 from "../../assets/images/pngegg (34) 10.png";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import Cookie from "js-cookie";
import { useState, useEffect } from "react";
import { getProduct } from "@/service/product.service";
import { postLike } from "@/service/wishlist.service";

// Define the Product type
type Product = {
  product_id: string;
  product_name: string;
  cost: number;
  discount?: number;
  image_url?: string[];
  liked?: boolean;
};

type SectionProps = {
  title: string;
  defaultImage: string;
  data: Product[];
  postData: (id: string) => void;
  isTokenExist: boolean;
};

const Section = ({ title, defaultImage, data, postData, isTokenExist }: SectionProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 flex-wrap px-6">
        <h1 className="text-[24px]">{title}</h1>
        <div className="flex gap-3">
          {/* <button className="bg-white w-[40px] h-[40px] rounded-full">{"<"}</button>
          <button className="bg-white w-[40px] h-[40px] rounded-full">{">"}</button> */}
        </div>
      </div>
      <div className="flex justify-around relative flex-wrap gap-4 md:gap-8">
        {data.map((product) => (
          <div key={product.product_id} className="relative">
            <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
              {isTokenExist && (
                <div
                  className="absolute right-[20px] top-[20px] cursor-pointer"
                  onClick={() => postData(product.product_id)}
                >
                  {product.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
                </div>
              )}
              <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                <Image
                  src={product.image_url && product.image_url[0] ? product.image_url[0] : defaultImage}
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
                {title === "Акция" && product.discount && product.discount > 0 && (
                  <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                    {Math.ceil(product.cost / (1 - product.discount / 100))} uzs
                  </span>
                )}
              </div>
              <Link
                onClick={() => Cookie.set("product_id", product.product_id)}
                href={`/${product.product_id}`}
                className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
              >
                Корзина
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Cards() {
  const [data, setData] = useState<Product[]>([]);
  const [isTokenExist, setIsTokenExist] = useState(false);

  useEffect(() => {
    const checkTokenExist = () => {
      const token = Cookie.get("token");
      setIsTokenExist(!!token);
    };

    const getData = async () => {
      try {
        const response = await getProduct(4, 1);
        if (response && response.status === 200) {
          setData(response.data.products);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    checkTokenExist();
    getData();
  }, []);

  const postData = async (id: string) => {
    try {
      const response:any= await postLike(id);
      if (response && response.status === 201) {
        setData(prevData =>
          prevData.map(product =>
            product.product_id === id ? { ...product, liked: !product.liked } : product
          )
        );
      } else {
        console.error('Error posting like:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting like:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
    <div className="max-w-[1240px] w-full mx-auto">
      <Section
        title="Акция"
        defaultImage={img5.src}
        data={data}
        postData={postData}
        isTokenExist={isTokenExist}
      />
    </div>
    <div className="max-w-[1240px] w-full mx-auto mt-[70px]">
      <Section
        title="Новинки"
        defaultImage={img6.src}
        data={data}
        postData={postData}
        isTokenExist={isTokenExist}
      />
    </div>
    <div className="max-w-[1240px] w-full mx-auto mt-[70px]">
      <Section
        title="Продукты"
        defaultImage={img7.src}
        data={data}
        postData={postData}
        isTokenExist={isTokenExist}
      />
    </div>
  </div>
  
  );
}
