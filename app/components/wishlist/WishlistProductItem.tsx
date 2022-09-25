import React, { useState, useEffect } from "react";
import { Cart } from "../../../network/gateway/Cart";
import { CatalogService } from "../../../network/gateway/Catalog";
import Permalink from "../../../utils/Permalink";
import useCartStore from "../../../zustand/cart";
import { useRouter } from "next/router";
import ProductQuickView from "../product/ProductQuickView";
import ProductQuickViewLoader from "../loader/ProductQuickViewLoader";
import LocalStorageService from "../../../utils/storage/LocalStorageService";


const WishlistProductItem = (props: any) => {
    const router = useRouter();
    const [wishlistItems, setWishlistITems] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const cartItems = useCartStore((state: any) => state.cartItems);
    const [quickViewStatus, setQuickViewStatus] = useState(false);
    const [openProductQuickView, setOpenProductQuickView] =
        useState<boolean>(false);
    const [selectedProductData, setSelectedProductData] = useState<Array<any>>(
        []
    );

    useEffect(() => {
        getProduct(props.id);
    }, []);

    function getProduct(id: any) {
        let aa: any = []
        CatalogService.getInstance()
            .getProducDetail(id)
            .then((data: any) => {
                setWishlistITems(data.data.data.attributes)
                setLoading(false)

            })
            .catch((error) => { });
        return aa
    }
    function addtoCart(id: any) {
        const params = {
            data: {
                id: id,
                type: "cart_item",
                quantity: 1,
            },
        };
        Cart.getInstance()
            .addToCart(params)
            .then((info: any) => {
                console.log("info", info);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    function getProductDetail(id: any) {
        CatalogService.getInstance()
            .getProducDetail(id)
            .then((response: any) => {
                if (response.data) {
                    setSelectedProductData(response.data.data);
                    setOpenProductQuickView(true);
                    setQuickViewStatus(false);
                } else {
                    console.log("ERROR:", response.data);
                }
            })
            .catch((error) => { });
    }
    return (<>
        {!loading && <div className="col-md-6 col-lg-3 mb-4 mb-md-0 mb-2">
            <div className="collection position-relative">
                <a href="#">
                    <div className="imgsec">
                        {wishlistItems.images && wishlistItems.images.length > 0 ? (
                            <a href={Permalink.ofProduct(props)}>
                                <img src={wishlistItems.images[0]} className="w-100" style={{ height: 380 }} />
                            </a>
                        ) : null}

                    </div>
                    {/* <div className="wishlistitem d-flex align-items-center justify-content-end">
                        <h4 className="fs-13 font-sb me-1"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi me-1 bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>234  <span className="fs-11 font-r  text-white me-1">Others</span></h4>
                        <p className="fs-10 font-r text-color-8">have this in their wishlists</p>
                    </div> */}
                </a>

                <div className="hoverBlock"><a href="#">
                </a><div className="overlay   text-start"><a href="#">
                    <h4 className="fs-16 font-sb text-color-2">{wishlistItems.name}</h4>
                    <p className="fs-14 font-r text-color-1 py-2">{wishlistItems.description}
                    </p><div className="product-rating mb-3 mt-0">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </div>
                    <p className="fs-20 font-sb text-color-5">
                        <i className="fas fa-indian-rupee-sign fa-fw" />{" "}   {wishlistItems?.discountPrice?.currencies.INR.amount}
                    </p>

                </a>
                        <a className="btn btnbg fs-13 " tabIndex={0}>{cartItems?.includes(props.id) || false
                            ? "Go To Cart"
                            : "Add to Cart"}</a>
                        <div className="btnbarcart">
                            <a className="btn fs-13 quick m-2" tabIndex={0} onClick={() => {
                                getProductDetail(props.id);
                                setQuickViewStatus(true);
                            }} >Quick View</a>
                            <a className="btn fs-13 m-2" tabIndex={0} onClick={() => {
                                if (LocalStorageService.getAccessToken()) {
                                    if (Cart.isProductInCart(props.id)) {
                                        router.push("/cart");
                                    } else {
                                        addtoCart(`${props?.id}`)
                                    }
                                }
                            }}>{cartItems?.includes(props.id) || false
                                ? "Go To Cart"
                                : "Add to Cart"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        {!quickViewStatus && openProductQuickView && (
            <ProductQuickView
                openProductQuickView={openProductQuickView}
                setOpenProductQuickView={setOpenProductQuickView}
                data={selectedProductData}
                onSelectedProduct={(id: any) => {
                    getProductDetail(id);
                }}
            />
        )}
        {quickViewStatus && (
            <ProductQuickViewLoader
                quickViewStatus={quickViewStatus}
                setQuickViewStatus={setQuickViewStatus}
            />
        )}

    </>)

}

export default WishlistProductItem;