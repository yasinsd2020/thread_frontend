import Header from "../../../components/commonComponents/header";
import Banner from "../../../components/banner/banner";
import CategoryCards from "../../../components/category/categoryCards";

export default function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <Banner />
        <CategoryCards />
      </div>
    </div>
  );
}
