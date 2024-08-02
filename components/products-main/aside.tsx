import React from "react";
import Slider from "../ui/slider";
import { Select } from "antd";

export default function Aside() {
  return (
    <aside className="bg-white p-4 max-w-[330px] mx-auto md:mx-0 md:w-[330px]">
      <h1 className="text-[24px] mb-4">Фильтр</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-[14px] mb-2">Цена</h2>
          <Slider />
        </div>
        <div>
          <h2 className="text-[14px] mb-2">Артикуль</h2>
          <Select className="w-full md:w-[160px]">
            <option value="test-1">test-1</option>
            <option value="test-2">test-2</option>
            <option value="test-3">test-3</option>
          </Select>
        </div>
        <div>
          <h2 className="text-[14px] mb-2">Выберите категорию:</h2>
          <Select className="w-full md:w-[160px]">
            <option value="test-1">test-1</option>
            <option value="test-2">test-2</option>
            <option value="test-3">test-3</option>
          </Select>
        </div>
        <div>
          <h2 className="text-[14px] mb-2">Новинка</h2>
          <Select className="w-full md:w-[160px]">
            <option value="test-1">test-1</option>
            <option value="test-2">test-2</option>
            <option value="test-3">test-3</option>
          </Select>
        </div>
        <button className="w-full bg-[#FBD029] py-2 text-center">Показать Результат</button>
      </div>
    </aside>
  );
}
