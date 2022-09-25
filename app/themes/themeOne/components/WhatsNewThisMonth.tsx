import React from "react";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";
interface iProps {
  data: any;

}

const WhatsNewThisMonth = (props: iProps) => {
  return (
    <section className="month-trend mt-4 mt-md-5 " >
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"What’s New This Month"} />
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
            <div className="Preference-slider">
              <Slider {...preferenceSliderSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div className="thumb position-relative text-center"  >
                      <div className="bg1" style={{backgroundImage:`url(${info.image})`}}>
                        <img
                          className="w-100"
                          src={info.image}
                          style={{ height: 420, }}
                          alt=""
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1">
                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                            Straight Kurti
                          </p>
                        </div>
                      </div>
                    </div>);
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewThisMonth;
