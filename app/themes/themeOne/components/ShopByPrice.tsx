import React from "react";
import SectionHeader from "./SectionHeader";

const ShopByPrice = () => {
    return (
        <section className="ShopPrice">
            <div className="row">
                <SectionHeader title={"Shop By Price"}/>
                <div className="col-md-12 pt-5">
                    <ul className="text-center d-block d-lg-flex justify-content-center">
                        <li className="bg1 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                            ₹999
                        </li>
                        <li className="bg2 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                            ₹1,999
                        </li>
                        <li className="bg3 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                            ₹3,999
                        </li>
                        <li className="bg4 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center">
                            ₹6,999
                        </li>
                        <li className="bg5 fs-64 mx-3 d-inline-block d-lg-flex  align-items-center justify-content-center">
                            ₹9,999
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ShopByPrice;