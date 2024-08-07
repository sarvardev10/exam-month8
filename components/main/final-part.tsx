import Image from "next/image";
import img4 from "../../assets/images/pngegg (44) 1.png";
import img from "../../assets/images/Rectangle 24275.png";
import img2 from "../../assets/images/Rectangle 24276.png";
import { TruckOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Final() {
 
  const route = useRouter()

  function handleNavigation(){
    route.push("/contact")
  }

  return (
    <div>
      <div className="max-w-[1240px] mx-auto p-2">
        <h1 className="text-[24px] mb-[40px] mt-[70px] text-center sm:text-center lg:text-left" >Полезное</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-3">
          <div className="w-full lg:w-[600px] bg-white p-[20px] lg:p-[35px]">
            <h1 className="text-[hsl(49,22%,10%)] text-[24px] lg:text-[32px]">
              Как правильно выбрать эллиптический тренажер?
            </h1>
            <p className="text-[14px] lg:text-[16px] opacity-[0.7] mt-[20px]">
              Эллиптические тренажёры популярны среди людей любого возраста и с
              разным уровнем физической подготовкb Эллиптические тренажёры
              популярны среди людей любого возраста и с разным уровнем
              физической подготовки...
            </p>
          </div>

          <div className="w-full lg:w-[600px] flex flex-col justify-between">
            <div className="h-[200px] lg:h-[350px] bg-white grid justify-center items-center pl-[90px]">
              <Image src={img4} alt="" className="w-[60%]"/>
            </div>
            <button className="h-[40px] bg-white mt-2 lg:mt-0" onClick={handleNavigation}>
              Посмотреть Все
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2">
        <h1 className="text-[24px] mt-[70px] mb-[40px] text-center sm:text-center lg:text-left">Примущества</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="w-full h-[250px] bg-white px-[32px] py-[50px] lg:py-[100px] relative flex flex-col items-center">
            <TruckOutlined className="text-[48px] mb-4" />
            <p>Доставка по всему Узбекистану</p>
          </div>
          <div className="w-full h-[250px] bg-white px-[32px] py-[50px] lg:py-[100px] relative flex flex-col items-center">
            <TruckOutlined className="text-[48px] mb-4" />
            <p>Доставка по всему Узбекистану</p>
          </div>
          <div className="w-full h-[250px] bg-white px-[32px] py-[50px] lg:py-[100px] relative flex flex-col items-center">
            <TruckOutlined className="text-[48px] mb-4" />
            <p>Доставка по всему Узбекистану</p>
          </div>
          <div className="w-full h-[250px] bg-white px-[32px] py-[50px] lg:py-[100px] relative flex flex-col items-center">
            <TruckOutlined className="text-[48px] mb-4" />
            <p>Доставка по всему Узбекистану</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 sm:hidden xl:block">
        <h1 className="text-[24px] mt-[70px] mb-[40px] text-center sm:text-center lg:text-left">О нас</h1>
        <div className="grid justify-center">
          <Image src={img} alt="" width={1200} />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 mb-[80px] mt-[80px]">
        <div className="grid justify-center">
          <Image src={img2} alt="" width={1000} />
        </div>
      </div>
    </div>
  );
}
