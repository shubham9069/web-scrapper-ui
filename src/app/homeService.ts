import axios from "axios";

export function getAllProduct() {
  try {
    const res = axios.get(
      `${process.env.NEXT_PUBLIC_HOSTED_URL}/get-all-product`
    );

    return res;
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
}
