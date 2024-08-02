import Image from "next/image";
import Slash from "@/assets/images/slash.svg";
import { HeartOutlined } from "@ant-design/icons";
import img5 from "../../assets/images/pngegg (34) 3.png";
import Link from "next/link";

function About() {
  const arr2 = [];
  for (let i = 0; i < 4; i++) {
    arr2.push(i);
  }
  return (
    <>
      <div className="container mx-auto max-w-[1240px] px-4 flex flex-col md:flex-row items-start gap-[25px]">
        <div className="about_left w-full md:w-[187px] bg-white h-[256px] p-[10px] mt-[20px] md:ml-[50px] flex flex-col items-center md:items-start">
          <div className="flex items-center mb-[10px] text-center md:text-left">
            <Image src={Slash} width={20} alt="Image" />
            <p>О нас</p>
          </div>
          <p className="text-center md:text-left">Вканация</p>
        </div>

        <div className="about_right bg-white py-[40px] px-[20px] md:px-[50px] mt-[20px] w-full md:w-[714px]">
          <h2 className="font-bold text-[30px] mb-[17px]">7 SPORT MARKET</h2>
          <p className="mb-[29px]">
            В составе томатов в большом количестве содержатся сахара,
            клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К,
            Н и РР, а также нужные организму человека.
          </p>

          <p className="mb-[35px]">
            Овощи содержат в себе много полезных витаминов, которые укрепляют
            здоровье и иммунитет и являются необходимым компонентом в рационе
            человека. Тепличный помидор - всегда доступен для вас и в сети
            супермаркетов “Makro” вы всегда можете найти его по выгодной цене
            и заказать их с доставкой в Ташкенте.
          </p>

          <p className="mb-[29px]">
            В составе томатов в большом количестве содержатся сахара,
            клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К,
            Н и РР, а также нужные организму человека.
          </p>

          <p className="mb-[62px]">
            Овощи содержат в себе много полезных витаминов, которые укрепляют
            здоровье и иммунитет и являются необходимым компонентом в рационе
            человека. Тепличный помидор - всегда доступен для вас и в сети
            супермаркетов “Makro” вы всегда можете найти его по выгодной цене
            и заказать их с доставкой в Ташкенте.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-[1240px]">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-[24px] text-center">Акция</h1>

          {/* <div className="flex gap-3">
            <button className="bg-white w-[40px] h-[40px] rounded-full">{"<"}</button>
            <button className="bg-white w-[40px] h-[40px] rounded-full">{">"}</button>
          </div> */}
        </div>
        <div className="flex justify-around relative flex-wrap">
          {arr2.map((e) => (
            <div key={e} className="relative mb-[50px]">
              <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative">
                <div className="absolute right-[20px] top-[20px] cursor-pointer">
                  <HeartOutlined />
                </div>
                <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                  <Image src={img5} alt="" />
                </div>
                <div className="px-3 text-center">
                  <h1>Бутса Nike Mercurial Superfly 8 FG</h1>
                  <p className="text-red-700 font-bold">500 000 uzs</p>
                  <span className="line-through opacity-[0.5] text-[#1F1D14] text-[12px]">750 000</span>
                </div>
                <Link href={"/products/single"} className="w-full">
                  <button className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg">Корзина</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
