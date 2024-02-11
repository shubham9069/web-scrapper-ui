import Home from "@/component/home/Home";
import { getAllProduct } from "./homeService";

const page = async () => {
  const res: any = await getAllProduct();
  let product = res.data;

  return <Home product={product} />;
};
export default page;
