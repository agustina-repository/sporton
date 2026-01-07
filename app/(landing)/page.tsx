import CategorySection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import Product from "./components/home/product";



export default function Home() {
  return (
  <main>
    <HeroSection />
    <CategorySection />
    <Product />
  </main>
  );
}
