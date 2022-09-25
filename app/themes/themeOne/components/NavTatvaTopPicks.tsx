import React from "react";
import Slider from "react-slick";
import { Cart } from "../../../../network/gateway/Cart";
import Permalink from "../../../../utils/Permalink";
import { occasionSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";
import { useRouter } from "next/router";
import useCartStore from "../../../../zustand/cart";
interface iProps {
  data: any;
  onAddCart: (id: string) => void;

}

const NavTatvaTopPicks = (props: iProps) => {
  const route = useRouter();
  const cartItems = useCartStore((state: any) => state.cartItems);
  return (
    <section className="mt-4 mt-md-5 bg-outfits pb-5">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"NavTatva’s Top Picks"} />
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
            <div className="ocassion-slider">
              <Slider {...occasionSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div className="thumb position-relative text-center" key={index}>
                      <div className="bg1">
                        <a href="#">
                          <img
                              style={{ height: 380, objectFit: "contain" }}
                            className="w-100"
                            src={info.image}
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay   text-center">
                            <p className="fs-13 font-r text-color-1">
                            <a
                                className="fs-13 font-r text-color-1"
                                href={Permalink.ofProduct(info)}
                              >
                                {info.title}
                              </a>
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                            ₹{info.sale_price}
                            </p>
                            <a
                              href={Permalink.ofProduct(info)}
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a  onClick={() => {
                                if (Cart.isProductInCart(info.id)) {
                                  route.replace(Permalink.ofCart());
                                } else {
                                  props.onAddCart(info.id);
                                }
                              }}className="btn fs-13 " tabIndex={0}>
                           {cartItems?.includes(info.id) || false
                                ? "Go To Cart"
                                : "Add to Cart"}
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/volume.png" />
                            </a>
                            <a href="#" className="d-block  mb-5" tabIndex={0}>
                              <img src="images/swap.png" />
                            </a>
                          </div>
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

export default NavTatvaTopPicks;
