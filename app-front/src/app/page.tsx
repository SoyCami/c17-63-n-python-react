import Footer from "@/components/layouts/Footer/Footer";
import Main from '@/app/Main/Page/Main'
import HeaderScreen from '@/components/layouts/HeaderScreen/HeaderScreen';
import TopEvents from "@/app/TopEvents/page";
import Header from "@/components/layouts/Header/Header";
import MainScreen from "@/app/MainScreen/Page";
import FooterScreen from "@/components/layouts/FooterScreen/FooterScreen";

export default function Home() {
  return (

      <div>
          <Header/>
          <MainScreen/>
          <FooterScreen/>
      </div>
  );
}
