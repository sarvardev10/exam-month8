import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, XOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Logo from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center mb-4 lg:mb-0">
            <Image src={Logo} alt="logo" width={50} height={50} />
            <h3 className="font-bold ml-3">Sport Market</h3>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <p className="mt-2 flex items-center"><PhoneOutlined className="mr-2" />+998 (90) 202-80-91</p>
            <p className="mt-2 flex items-center"><MailOutlined className="mr-2" />fuck@fgnma.com</p>
          </div>
          <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
            <p className="flex items-center"><EnvironmentOutlined className="mr-2" /> Tashkent Sh. Chilonzor 9 kvartal 35 uy</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg font-semibold">Подписаться</h4>
            <div className="flex mt-2">
              <input type="email" placeholder="fuck@fgnma.com" className="p-2 rounded-l-lg border border-gray-400 text-black" />
              <button className="p-2 bg-blue-500 text-white rounded-r-lg">Отправить</button>
            </div>
            <div className="flex mt-4">
              <a href="#" className="text-white mx-2"><InstagramOutlined className="text-xl" /></a>
              <a href="#" className="text-white mx-2"><FacebookOutlined className="text-xl" /></a>
              <a href="#" className="text-white mx-2"><XOutlined className="text-xl" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-900 py-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-center lg:text-left">© 2022 All Rights Reserved</p>
          <div className="flex mt-4 lg:mt-0">
            <a href="#" className="text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-white mx-2">Terms of Use</a>
            <a href="#" className="text-white mx-2">Sales and Refunds</a>
            <a href="#" className="text-white mx-2">Legal</a>
            <a href="#" className="text-white mx-2">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
