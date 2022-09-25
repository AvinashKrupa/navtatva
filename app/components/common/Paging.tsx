import React from "react";
import ReactPaginate from "react-paginate";

const Paging = (props: any) => {

    const pagginationHandler = (page: any) => {
        const currentPath = props.router.pathname;
        const currentQuery = {...props.router.query}; //Copy current query to avoid its removing
        currentQuery.page = page.selected + 1; 

        props.router.replace({
            pathname: currentPath,
            query: currentQuery,
        });
    }
    
    return (
        <>
            <nav>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    activeClassName={'active'}
                    containerClassName={'pagination justify-content-center mt-5'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    previousLinkClassName={'prev'}
                    nextLinkClassName={'next'}
                    initialPage={props.currentPage - 1}
                    pageCount={props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pagginationHandler}
                />
            </nav>
        </>
    )
}

export default Paging;