import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Permalink from "../../../../utils/Permalink";
import SectionHeader from "./SectionHeader";
import { useRouter } from "next/router";
interface IProps {
  brand: Array<any>;
  loading: boolean
}

const MoreBrandsToExplore = (props: IProps) => {
  const [brands, setBrands] = useState([1, 2, 3, 4, 5])
  const router = useRouter();
  return (
    <section className="mt-4 mt-md-5 brand">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"More Brands To Explore"}/>
          <div className="col-md-12 mt-4 mt-lg-5">
            <ul className="d-block text-center">
              {props.brand.map((info, index) => {
                return (
                  <li
                    key={index}
                    style={{ backgroundColor: "white" }}
                    className="align-items-center justify-content-center d-inline-flex"
                  >
                    <a  onClick={() => router.replace(Permalink.ofShop())} >
                      <img
                        style={{ maxWidth: 180, maxHeight: 180 }}
                        src={info.image || "images/brand-1.png"}
                        alt="brand"
                      />
                    </a>
                  </li>
                );
              })}

              {props.loading && brands.map((info, index) => {
                return (
                  <li
                    key={index}
                    className="align-items-center justify-content-center d-inline-flex">
                    <Skeleton style={{ width: 180, height: 100 }} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreBrandsToExplore;

const params = {
  id: "bridal",
};
