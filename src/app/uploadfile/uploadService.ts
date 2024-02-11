import axios from "axios";

export function uploadFile(payLoad: any) {
  try {
    const res = axios.post(
      `${process.env.NEXT_PUBLIC_HOSTED_URL}/upload-excel`,
      payLoad
    );

    return res;
  } catch (err) {
    return { err: { message: "Network Fail" } };
  }
}
