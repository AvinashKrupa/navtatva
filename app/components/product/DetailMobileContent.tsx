import React from "react";

const DetailMobileContent = () => {
    return (
        <div className="product-content d-block d-lg-none">
            <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
            <p className="fs-14 font-r text-color-1 mt-2">
                Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
            </p>
            <div className="custom-radios">
                <p className="fs-12 font-r text-color-1 mt-4 mb-3">Color</p>
                <div>
                    <input
                        type="radio"
                        id="color-1"
                        name="color"
                        defaultValue="color-1"
                        defaultChecked
                        tabIndex={0}
                    />
                    <label htmlFor="color-1">
                        <span>
                            <div />
                        </span>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="color-2"
                        name="color"
                        defaultValue="color-2"
                        tabIndex={0}
                    />
                    <label htmlFor="color-2">
                        <span>
                            <div />
                        </span>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="color-3"
                        name="color"
                        defaultValue="color-3"
                        tabIndex={0}
                    />
                    <label htmlFor="color-3">
                        <span>
                            <div />
                        </span>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="color-4"
                        name="color"
                        defaultValue="color-4"
                        tabIndex={0}
                    />
                    <label htmlFor="color-4">
                        <span>
                            <div />
                        </span>
                    </label>
                </div>
            </div>
            <p className="fs-12 font-r text-color-1 mt-4 mb-3">
                size available
            </p>
            <ul className="size d-flex">
                <li>S</li>
                <li>M</li>
                <li className="available">L</li>
                <li className="select">XL</li>
                <li className="available">XXL</li>
                <li className="custom-size">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-rulers me-2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                    </svg>
                    Custome Size
                </li>
                <li className="sizechart">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-bar-chart-fill me-2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                    </svg>
                    Size Chart
                </li>
            </ul>
            <ul className="length mt-4">
                <li>
                    <span className="fs-12 font-r text-color-5">
                        Sleeve Length
                    </span>
                    <p className="fs-14 font-r text-color-2">
                        Three-Quarter Sleeve
                    </p>
                </li>
                <li>
                    <span className="fs-12 font-r text-color-5">Fabric</span>
                    <p className="fs-14 font-r text-color-2">Viscose Rayon</p>
                </li>
                <li>
                    <span className="fs-12 font-r text-color-5">Pattern</span>
                    <p className="fs-14 font-r text-color-2">Printed</p>
                </li>
                <li>
                    <span className="fs-12 font-r text-color-5">Wash Care</span>
                    <p className="fs-14 font-r text-color-2">Hand Wash</p>
                </li>
            </ul>
        </div>
    )
}

export default DetailMobileContent;