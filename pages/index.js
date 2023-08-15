import Header from "../components/commonComponents/header";
import Banner from "../components/banner/banner";
import CategoryCards from "../components/category/categoryCards";
import NewArivel from "../components/newArivel/newArivel";
import BestSaler from "../components/bestSaler/bestSaler";
import AddBanner from "../components/banner/addBanner";
import Footer from "../components/commonComponents/footer/footer";

export default function LandingPage() {
  return (
    <div >
        {/* <Header/> */}
        <Banner/>
        <AddBanner imgName={'https://seoulish.kr/cdn/shop/files/Frame_4_3a8ca808-619e-435e-b7e6-429e4f0991bb_1880x.png?v=1687163375'} />
        <CategoryCards/>
        <NewArivel />
        <AddBanner imgName={'https://seoulish.kr/cdn/shop/files/Frame_6_6a430396-c6f5-4b71-bbec-fa0129609e0a_1880x.png?v=1687163447'} />
        {/* <BestSaler /> */}
        {/* <Footer /> */}
     </div>
  )
}
