import React from "react";
import Slider from "react-slick";
import { customerSliderSetting } from "../../../utils/sliderConfig";

const DetailMobile = () => {
  return (
    <div className="main d-lg-none d-block">
      <Slider {...customerSliderSetting}>
        <div className="slider slider-for">
          <div>
            <img className="w-100" src="/images/detail-img.png" alt="" />
          </div>
          <div>
            <img className="w-100" src="/images/detail-img.png" alt="" />
          </div>
          <div>
            <img className="w-100" src="/images/detail-img.png" alt="" />
          </div>
          <div>
            <img className="w-100" src="/images/detail-img.png" alt="" />
          </div>
          <div>
            <img className="w-100" src="/images/detail-img.png" alt="" />
          </div>
          <div>
            <img className="w-100" src="/images/detail-img.png" alt="" />
          </div>
        </div>
        <div className="slider slider-nav">
          <div className="mx-2">
            <img className="w-100" src="/images/detail-thumb3.png" alt="" />
          </div>
          <div className="mx-2">
            <img className="w-100" src="/images/detail-thumb3.png" alt="" />
          </div>
          <div className="mx-2">
            <img className="w-100" src="/images/detail-thumb3.png" alt="" />
          </div>
          <div className="mx-2">
            <img className="w-100" src="/images/detail-thumb3.png" alt="" />
          </div>
          <div className="mx-2">
            <img className="w-100" src="/images/detail-thumb3.png" alt="" />
          </div>
          <div className="mx-2">
            <img className="w-100" src="/images/detail-thumb3.png" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DetailMobile;
