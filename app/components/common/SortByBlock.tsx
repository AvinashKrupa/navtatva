import React, { useState } from "react";

const SortByBlock = (props: any) => {
    const [sortBy, setSortBy] = useState("created_at")

    const handleSort = (type: string) => {
        setSortBy(type);
        const currentPath = props.route.pathname;
        const currentQuery = { ...props.route.query };
        currentQuery['sort_by'] = type;
        props.route.replace({
            pathname: currentPath,
            query: currentQuery,
        });
    }

    return (
        <>
            <div className="sorting mt-4 mb-5">
                <span className="textlight">Sort</span>
                <button
                    type="button"
                    className={"btn-sorting " + (sortBy == 'relevance' ? 'active' : '')}
                    onClick={() => handleSort('relevance')}
                >
                    Relevance
                </button>
                <button
                    type="button"
                    className={"btn-sorting " + (sortBy == 'popular' ? 'active' : '')}
                    onClick={() => handleSort('popular')}
                >
                    Popular
                </button>
                <button
                    type="button"
                    className={"btn-sorting " + (sortBy == 'created_at' ? 'active' : '')}
                    onClick={() => handleSort('created_at')}
                >
                    All New
                </button>
                <button
                    type="button" 
                    className={"btn-sorting " + (sortBy == 'price' ? 'active' : '')}
                    onClick={() => handleSort('price')}
                >
                    Price <i className="fas fa-angle-down fa-fw" />
                </button>
                <button
                    type="button"
                    className={"btn-sorting " + (sortBy == 'minimum_order_quantity' ? 'active' : '')}
                    onClick={() => handleSort('minimum_order_quantity')}
                >
                    Min Order Qty <i className="fas fa-angle-down fa-fw" />
                </button>
            </div>
        </>
    )
}

export default SortByBlock;