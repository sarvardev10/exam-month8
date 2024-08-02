import { Carousel } from "antd";
import img1 from "../../assets/images/pngwing 1.png";
import img2 from "../../assets/images/Group 48097028.png";
import img3 from "../../assets/images/Group 48097038.png";
import img4 from "../../assets/images/pngwing 3.png";
import Image from "next/image";

export default function Slider() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "400px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }

  return (
    <div>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="xl:max-w-[800px] xl:h-[500px] sm:max-w-[350px] sm:h-[200px] max-w-full h-auto">
          <Carousel arrows infinite={true} autoplay>
            {arr.map((e) => (
              <div key={e}>
                <div
                  style={contentStyle}
                  className="relative flex justify-between items-center p-2 text-[#1F1D14]"
                >
                  <div className="w-[300px] h-[300px] bg-[#d32f2f] z-[1] absolute rounded-full sm:right-[20px] md:right-[40px] lg:right-[60px]"></div>
                  <div className="absolute w-[700px] xl:block sm:hidden h-[300px] bg-[#BDD400] z-[1] rotate-[115deg] bottom-0 right-[-300px]"></div>
                  <div className="flex flex-col items-start text-start xl:max-w-[350px] sm:max-w-[150px] z-[999] ml-5">
                    <h1 className="font-extrabold text-[20px] sm:text-[24px] md:text-[28px]">
                      Бутсы Nike Phantom GT2 Elite FG
                    </h1>
                    <button className="py-[5px] sm:py-[8px] md:py-[10px] px-[10px] sm:px-[12px] md:px-[15px] border-2 border-[#FBD029] rounded-lg">
                      Подробности
                    </button>
                  </div>
                  <Image
                    src={img1}
                    width={350}
                    height={350}
                    className="bg-contain z-[999] max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="w-[320px] h-[200px]">
            <Image src={img2} alt="123" />
          </div>
          <div className="w-[320px] h-[200px]">
            <Image src={img3} alt="123" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full mb-[70px] py-10">
        <div className="container mx-auto">
        <div className="max-w-[1240px] mx-auto px-4">
  <h1 className="text-[24px] mb-5 text-center sm:text-left">Каталог</h1>
</div>
          <Carousel infinite={true} autoplay>
            {arr.map((e) => (
              <div key={e}>
                <div className="flex justify-center sm:justify-between flex-wrap">
                  <div className="w-[180px] h-[240px] bg-blue-300 flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-red-300 hidden sm:flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-yellow-300 hidden sm:flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-purple-300 hidden sm:flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-gray-300 hidden sm:flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
