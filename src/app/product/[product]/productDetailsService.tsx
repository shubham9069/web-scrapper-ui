import axios from "axios";

export function getProductDetails(id: string) {
  try {
    const res = axios.get(
      `${process.env.NEXT_PUBLIC_HOSTED_URL}/product/${id}`
    );

    return res;
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
}
export function getPriceAnalysis(payload: any) {
  try {
    const res = axios.post(
      `${process.env.NEXT_PUBLIC_HOSTED_URL}/price-get`,
      payload
    );

    return res;
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
}
