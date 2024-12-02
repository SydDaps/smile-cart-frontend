import Carousel from "./carousel";
import { IMAGE_URLS } from "./constants";

const Product = () => (
  <div className="px-6 pb-6">
    <div className="w-2/5">
      <Carousel imageUrls={IMAGE_URLS} title="Infinix Inbook" />
    </div>
  </div>
);

export default Product;
