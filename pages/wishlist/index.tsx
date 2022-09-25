import React, { useState, useEffect } from "react";
import Header from "../../app/themes/themeOne/components/Header";
import { NextPage } from "next";
import { Wishlist } from "../../network/gateway/Wishlist";
import WishlistProductItem from "../../app/components/wishlist/WishlistProductItem";
import Loader from "../../app/components/loader/loader";
import useUserStore from "../../zustand/store";
import shallow from "zustand/shallow";
import WishlistLoader from "../../app/components/loader/WishlistLoader";

const WishlistScreen: NextPage = () => {

    const isLogin = useUserStore((state: any) => state.isLogin, shallow);
    const setLoginPopup = useUserStore((state: any) => state.showLogin);
    const [wishlistProductIds, setWishlistProductIds] = useState([])

    useEffect(() => {
        if (isLogin) {
            getAllWishist();
        } else {
            setLoginPopup(true);
        }
        //deleteWishListEntry();
    }, [isLogin]);

    function getAllWishist() {
        Wishlist.getInstance()
            .getWishlist()
            .then((data: any) => {
                let newWishlist: any = []
                data.data.included.cwishlists.map((each: any) => {
                    if (each?.relationships.wproducts) {
                        if (each?.relationships.wproducts.data?.length > 0) {
                            return newWishlist.push(each.relationships?.wproducts?.data[0])
                        }
                    }
                })
                setWishlistProductIds(newWishlist)

            })
            .catch((error) => { });
    }

    function deleteWishListEntry() {
        let entries: any =[];
        entries.map( (item: any) => {
            Wishlist.getInstance()
            .deleteWishListEntry(item.id)
            .then((data: any) => {
                console.log("wishlist entry delted", data)
            })
            .catch((error) => console.log(error));
        })
        return true;
    }
    return (
        <div className="mycollection">
            <div className="wrapper">
                {/* Header */}
                <Header />
                {!wishlistProductIds.length && <WishlistLoader />}
                {/* End Header */}
                {wishlistProductIds.length > 0 && <section className="productBar mt-4 mt-md-5">
                    <ul className="breadcrumb">
                        <li className="fs-40 font-b text-color-2 list-inline-item"><a className="text-color-1" href="#">My Collections</a></li>
                        <li className="fs-40 font-b text-color-2 list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg></li>
                        <li className="fs-40 font-b text-color-2 list-inline-item"><span className="text-color-3">Kurtis</span></li>
                        <li className="ms-auto align-self-end"><a type="button" className=" bundle-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                            Create Bundle
                        </a></li>
                    </ul>

                    <div className="mt-4 mt-lg-5 mb-3">
                        <div className="row">
                            {wishlistProductIds?.map((each: any, index: number) => {
                                return (
                                    <WishlistProductItem key={index} id={each.id} size={wishlistProductIds.length} />
                                )
                            })}
                        </div>
                    </div>
                </section>}

                <div className="modal fade wishlistPopup" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header ">
                                <h5 className="modal-title fs-32 font-b text-color-3 text-center mx-auto" id="exampleModalLabel"><svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg> Create Bundle</h5>
                                <button type="button" className="btn-close mx-0" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <p className="fs-16 font-sb text-color-1 mb-4">Choose upto 3 products in this Collection</p>
                                <div className="row scroll">
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-4">
                                        <div className="category-area" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                        <div className="category-area" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            <label className="cateory-checkbox">
                                                <input type="checkbox" />
                                                <div className="imgsec"> <img className="w-100" src="images/img1.png" alt="" /></div>
                                                <span className="checkmark" />
                                                <div className="overlay   text-start">
                                                    <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                                                    <p className="fs-10 font-r text-color-1 py-2">Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
                                                    </p></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn">Create Bundle</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );

};

export default WishlistScreen;
