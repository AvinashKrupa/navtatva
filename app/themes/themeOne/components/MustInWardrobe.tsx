import React from "react";
import { useRouter } from "next/router";
import SectionHeader from "./SectionHeader";
import Permalink from "../../../../utils/Permalink";


const MustInWardrobe = () => {
    const router = useRouter();
    return (
        <section className="mt-4 mt-md-5 pb-md-5 mb-5">
            <div className="wrapper">
                <div className="row">
                    <SectionHeader title={"Must haves In Your Wardrobe"}/>
                    <div className="col-md-12 mt-4 mt-lg-5 position-relative  wardrobecate">
                        <div className="row">
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg1">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <img className="w-100" src="images/sarees.png" alt="" />
                                        <h4>SAREES</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg2">
                                    <a onClick={() => router.replace(Permalink.ofShop())} >
                                        <img className="w-100" src="images/lehangs.png" alt="" />
                                        <h4>LEHANGAS</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg3">
                                    <a onClick={() => router.replace(Permalink.ofShop())} >
                                        <img className="w-100" src="images/churidar.png" alt="" />
                                        <h4>Churidars</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg4">
                                    <a onClick={() => router.replace(Permalink.ofShop())} >
                                        <img className="w-100" src="images/fancy.png" alt="" />
                                        <h4>fancy</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 mt-lg-5">
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg1">
                                    <a onClick={() => router.replace(Permalink.ofShop())} >
                                        <img className="w-100" src="images/sarees.png" alt="" />
                                        <h4>SAREES</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg2">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <img className="w-100" src="images/lehangs.png" alt="" />
                                        <h4>LEHANGAS</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg3">
                                    <a onClick={() => router.replace(Permalink.ofShop())} >
                                        <img className="w-100" src="images/churidar.png" alt="" />
                                        <h4>Churidars</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                <div className="bg4">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <img className="w-100" src="images/fancy.png" alt="" />
                                        <h4>fancy</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MustInWardrobe;