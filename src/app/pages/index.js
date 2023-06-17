import Header from "../../../components/commonComponents/header";
import Banner from "../../../components/banner/banner";
import CategoryCards from "../../../components/category/categoryCards";
import NewArivel from "../../../components/newArivel/newArivel";
import BestSaler from "../../../components/bestSaler/bestSaler";
import AddBanner from "../../../components/banner/addBanner";
import Footer from "../../../components/commonComponents/footer/footer";
export default function LandingPage() {
  return (
    <div >
        <Header/>
        <Banner/>
        <AddBanner imgName={'/addBanner2.webp'} />
        <CategoryCards/>
        <NewArivel />
        <AddBanner imgName={'/add.webp'} />
        <BestSaler />
        <Footer />
     </div>
  )
}
