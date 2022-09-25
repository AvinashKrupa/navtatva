import React, { useEffect, useState } from "react";
import { CatalogService } from "../../../../network/gateway/Catalog";
import Slider from "react-slick";
import { bannerSliderSettings } from "../../../../utils/sliderConfig";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import constants from "../../../constants/constant";

const FestiveSaleBanner = () => {

    const [bannerUrl, setBannerUrl] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [banners, setBanners] = useState<any>([])
    useEffect(() => {
        getBannersData();

    }, []);

    function getBannersData() {
        CatalogService.getInstance()
            .getBanner()
            .then((info: any) => {
                setBannerUrl(info?.data?.data[0].attributes.image.data.attributes.url);
                setLoading(false)
                console.log("this is Banner", info)
                setBanners(info?.data?.data)
            });
    }

    return (
        <>
            {
                loading ?
                    <Skeleton height={500} style={{ borderRadius: 25, }} /> :
                    <section className="category mt-5 mt-md-5">
                        <Slider {...bannerSliderSettings}>
                            {banners?.map((items: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <div className="col-md-12 col-lg-12" >
                                            <img  className="w-100" src={`${constants.assetsBaseURL}${bannerUrl}`} alt="" />
                                        </div>
                                    </div>)
                            })}
                        </Slider>
                    </section>
            }
        </>
    )
}

export default FestiveSaleBanner;