import React from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { Cart } from "../../../../network/gateway/Cart";
import Permalink from "../../../../utils/Permalink";
import { occasionSetting } from "../../../../utils/sliderConfig";
import useCartStore from "../../../../zustand/cart";
import SectionHeader from "./SectionHeader";

interface iProps {
  data: any;
  onAddCart: (id: string) => void;
  onWishlist: (id: string) => void;
}

const TopCollections = (props: iProps) => {
  const route = useRouter();
  const cartItems = useCartStore((state: any) => state.cartItems);
  return (
    <section className="mt-4 mt-md-5 bg-outfits pb-5">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"Top Collections"} />
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
            <div className="ocassion-slider">
              <Slider {...occasionSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div key={index} className="thumb position-relative text-center">
                      <div className="bg1">
                        <a href="/shop">
                          <img
                            style={{ height: 380, objectFit: "contain" }}
                            className="w-100"
                            src={info.image}
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay   text-center">
                            <p>
                              <a
                                className="fs-13 font-r text-color-1"
                                href={Permalink.ofProduct(info)}
                              >
                                {info.title}
                              </a>
                            </p>
                            {/* <p className="fs-19 font-sb text-color-3 py-3">
                              {info.sale_price}
                            </p> */}

                            <div className="product-price">
                              <span className="new-price mb-0 font-sb">
                                <span>₹{info.sale_price}</span>
                              </span>
                              <span className="last-price mb-0 fs-12 font-r">
                                <span className="text-color-1">
                                  ₹{info.list_price}
                                </span>
                              </span>

                              <p className="save fs-10 font-r">
                                You save ₹
                                {info.list_price - (info.sale_price || 0)}
                              </p>
                            </div>
                            <a
                              href={Permalink.ofProduct(info)}
                              className="btn-border fs-13 text-color-3"
                              tabIndex={0}
                            >
                              More Info
                            </a>
                            <a
                              onClick={() => {
                                if (Cart.isProductInCart(info.id)) {
                                  route.replace(Permalink.ofCart());
                                } else {
                                  props.onAddCart(info.id);
                                }
                              }}
                              className="btn fs-13 "
                              tabIndex={0}
                            >
                              {cartItems?.includes(info.id) || false
                                ? "Go To Cart"
                                : "Add to Cart"}
                            </a>
                          </div>
                          <div className="speaker">
                            <a
                              onClick={() => {
                                props.onWishlist(info.id);
                              }}
                              href="#"
                              className="d-block mb-5"
                              tabIndex={0}
                            >
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

export default TopCollections;
