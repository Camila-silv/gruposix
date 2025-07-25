import {
  Cta,
  ProductsSection,
  TestimonialsSection,
  Hero
} from "../../components";
import metabolic from "../../assets/images/metabolic/metabolic.webp";
import mobileMetabolic from "../../assets//images/metabolic/mobile.webp";
import rejuvenation from "../../assets//images/rejuvenation/rejuvenation.webp";
import mobileRejuvenation from "../../assets//images/rejuvenation/mobile.webp";

export default function Home() {
  return (
    <div>
      <Hero />

      <ProductsSection
        mobileMetabolic={mobileMetabolic}
        metabolic={metabolic}
        rejuvenation={rejuvenation}
        mobileRejuvenation={mobileRejuvenation}
      />

      <Cta />

      <TestimonialsSection
        mobileMetabolic={mobileMetabolic}
        metabolic={metabolic}
        rejuvenation={rejuvenation}
        mobileRejuvenation={mobileRejuvenation}
      />
    </div>
  );
}
