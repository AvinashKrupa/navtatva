import React from "react";
import Slider from "react-slick";
import { customerSliderSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";

const OurValuedCustomers = () => {
  return (
    <section className="mt-5 mostSearch">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"Our Valued Customers"}/>
          <div className="col-md-12">
            <div className="customerSlider mt-4 mt-lg-5">
              <Slider {...customerSliderSetting}>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <img src="images/client.png" alt="" />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Aarav Patel
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <img className="w-100" src="images/review-1.png" alt="" />
                  <p className="mt-4 mt-md-5 ">
                    I really loved the fabric . It's pure cotton and soft. It is
                    going to fit you perfectly in the bust area but you might
                    need to alter it in the waist area.
                  </p>
                </div>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <img src="images/client.png" alt="" />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Aarav Patel
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <img className="w-100" src="images/review-2.png" alt="" />
                  <p className="mt-4 mt-md-5 ">
                    I really loved the fabric . It's pure cotton and soft. It is
                    going to fit you perfectly in the bust area but you might
                    need to alter it in the waist area.
                  </p>
                </div>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <img src="images/client.png" alt="" />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Aarav Patel
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <img className="w-100" src="images/review-3.png" alt="" />
                  <p className="mt-4 mt-md-5 ">
                    I really loved the fabric . It's pure cotton and soft. It is
                    going to fit you perfectly in the bust area but you might
                    need to alter it in the waist area.
                  </p>
                </div>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <img src="images/client.png" alt="" />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Aarav Patel
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <img className="w-100" src="images/review-2.png" alt="" />
                  <p className="mt-4 mt-md-5">
                    I really loved the fabric . It's pure cotton and soft. It is
                    going to fit you perfectly in the bust area but you might
                    need to alter it in the waist area.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuedCustomers;
