"use client"
import { Select } from "antd";
import Aside from "../../components/products-main/aside";
import Card from "@/components/ui/card";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [cardsLoaded, setCardsLoaded] = useState(12); 

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCardsLoaded(cardsLoaded + 12); 
      setLoading(false);
    }, 1000); 
  };

  return (
    <main className="container mx-auto flex flex-col lg:flex-row mt-[70px] mb-[70px] max-w-[1240px] px-4">
    <Aside/>
    <div className="w-full lg:w-1/4 mb-4 lg:mb-0" />
    <section className="w-full lg:w-3/4">
      <div className="flex mb-2 justify-between mx-auto flex-wrap">
        <div className="flex gap-2 mb-4 lg:mb-0">
          <Select className="w-[150px]" defaultValue="Сортировать">
            <Select.Option value={12}>12</Select.Option>
            <Select.Option value={20}>20</Select.Option>
          </Select>
          <Select className="w-[150px]" defaultValue="Все продукты">
            <Select.Option value="">test-1</Select.Option>
          </Select>
        </div>
        <div className="flex gap-2">
          <Select className="w-[150px]" defaultValue="Кард">
            <Select.Option value="">test-1</Select.Option>
          </Select>
          <Select className="w-[150px]" defaultValue="Лист">
            <Select.Option value="">test-1</Select.Option>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <Card count={cardsLoaded} />
      </div>
      <div className="w-full">
        <button
          className="bg-white px-4 py-2 rounded-md w-full mt-2"
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      </div>
    </section>
  </main>
  );
}
