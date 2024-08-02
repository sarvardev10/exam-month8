"use client";
import "./globals.css";

import { Slider , Cards , FinalPart} from "@/components";


export default function Home() {


  return (
    <div className="mt-6">
      <Slider />
      <Cards/>
      <FinalPart/>
    </div>
  );
}
