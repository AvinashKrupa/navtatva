import React from "react";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";

interface iProps {
  data: any;

}
const ComplimentYourOutfits = (props:iProps) => {
  return (
    <section className="mt-4 mt-md-5 complement pb-5">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="heading2">
              <h2>Compliment your Outfits</h2>
            </div>
          </div>
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
            <div className="Preference-slider">
              <Slider {...preferenceSliderSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div className="thumb position-relative text-center">
                      <div className="bg1" style={{backgroundImage:`url(${info.image})`}}>
                        <img
                          className="w-100"
                          style={{ height: 420, }}
                          src={info.image}
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplimentYourOutfits;
