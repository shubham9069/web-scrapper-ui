import ProductDetails from "../../../component/productDetails/ProductDetails";
import { getProductDetails } from "./productDetailsService";

const page = async (context: any) => {
  const res: any = await getProductDetails(context.params.product);
  let product = res.data;

  return <ProductDetails productData={product[0]} />;
};

export default page;
