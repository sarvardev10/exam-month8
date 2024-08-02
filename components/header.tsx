"use client"
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import {
  AlignLeftOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Menu from "./ui/burger-menu";
import { Login } from "./ui";

export default function Header() {
  return (
    <header className="bg-[#1F1D14]">
      <nav className="py-1 flex justify-between items-center container mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 lg:gap-20">
          <Link
            href={"/"}
            className="flex max-w-[70px] text-[20px] font-semibold gap-2 text-white items-center"
          >
            <Image src={logo} alt="Logo" width={50} height={50} />
            <h1>Sport Product</h1>
          </Link>
          <ul className="hidden xl:flex text-white gap-3 lg:gap-6 sm:hidden">
            <li className="text-[16px]">
              <Link href={"/products"}>Продукты</Link>
            </li>
            <Link href={"/contact"}>
              <li className="text-[16px]">
                <p>Контакты</p>
              </li>
            </Link>
            <li className="text-[16px]">
              <Link href={"/pay"}>Оплата и Доставка</Link>
            </li>
            <li className="text-[16px]">
              <Link href={"#"}>Новости</Link>
            </li>
            <li className="text-[16px]">
              <Link href={"/about"}>О нас</Link>
            </li>
          </ul>
        </div>
        <div className="hidden gap-2 lg:gap-4 text-white xl:flex sm:hidden">
          <a
            className="text-[16px] flex gap-1 items-center"
            href="tel:+998971566690"
          >
            <PhoneOutlined />
            +998 (90) 202-80-91
          </a>
          <a
            className="text-[16px] flex gap-1 items-center"
            href="mailto:tursunovabdulloh858@gmail.com"
          >
            <MailOutlined />
            sarvarbek6073@gmail.com
          </a>
        </div>
        <div className="sm:block xl:hidden">
          <Menu />
        </div>
      </nav>
      <div className="bg-white py-2">
        <div className="container mx-auto max-w-[1240px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 items-center">
            <button className="bg-[#1F1D14] text-white flex items-center py-2 px-4 sm:px-6 gap-3 rounded-lg">
              <AlignLeftOutlined />
              <p>Каталог</p>
            </button>
            <label
              htmlFor="input"
              className="w-full max-w-[300px] bg-[#F2F2F2] flex items-center rounded-lg"
            >
              <input
                type="text"
                className="bg-transparent w-full outline-none p-2"
              />
              <span className="w-[40px] h-[20px] flex items-center justify-center">
                <SearchOutlined />
              </span>
            </label>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <Login />
            <Link href={"/wishlist"}>
              <button className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                <HeartOutlined />
              </button>
            </Link>
            <button className="px-4 py-2 bg-[#F2F2F2] rounded-lg flex items-center gap-1">
              <ShoppingCartOutlined />
              <span className="hidden sm:inline">Корзина</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
