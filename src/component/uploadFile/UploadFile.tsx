"use client";
import React, { useContext, useState } from "react";
import styles from "./UploadFile.module.scss";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { uploadFile } from "@/app/uploadfile/uploadService";
import AppContext from "@/context/AppContext";
import Loader from "../common/Loader/Loader";

const UploadFile = () => {
  const router = useRouter();
  const { setLoading, loading }: any = useContext(AppContext);
  const [fileName, setfileName]: any = useState(null);

  const fileUploader = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("product_excel", fileName);
    try {
      const res: any = await uploadFile(formData);

      if (res.data.status == 200) {
        alert(res.data.msg);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log(fileName);

  function openFilePicker() {
    let input: any = document.getElementById("upload-file");
    input.click();
  }
  return (
    <div className={styles["upload-container"]}>
      {loading && <Loader />}
      {!fileName ? (
        <div className={styles["upload-input"]} onClick={openFilePicker}>
          <input
            type="file"
            id="upload-file"
            hidden
            onChange={(e: any) => setfileName(e.target.files[0])}
          ></input>
          <Image src="/uploader.svg" width={60} height={60} alt="Upload" />
          <h4>Select File</h4>
          <p>Upload Product excel file</p>
        </div>
      ) : (
        <div className={styles["file-uploaded"]}>
          <p>{fileName?.name}</p>
          <Image
            src="/closebtn.svg"
            width={30}
            height={30}
            alt="cross-svg"
            onClick={() => setfileName()}
          />
        </div>
      )}
      <button className={styles["upload-button"]} onClick={fileUploader}>
        Upload File
      </button>
    </div>
  );
};

export default UploadFile;
