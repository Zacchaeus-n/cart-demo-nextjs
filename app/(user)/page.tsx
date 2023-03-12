import React from "react";
import { previewData } from "next/headers";

const HomePage = () => {
  // checking if in preview mode
  let _previewData: any = previewData()
  if (Object.keys(_previewData).length > 0) {
    console.log("_previewData: ", _previewData)
    return <div className="">Preview Mode</div>;
  }

  return <div className="">Published Mode</div>;
};

export default HomePage;
