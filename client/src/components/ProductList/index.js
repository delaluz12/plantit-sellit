import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Loading from "../Loading/Loading";

import ReactPaginate from "react-paginate";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  // console.log(data);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  const filterProducts = () => {
    // console.log("inside filteredProducts", state);
    if (!currentCategory) {
      return state.products;
    }

    // const firstTen = state.products.slice(0, 10);

    const categoryFiltered = state.products.filter(
      (product) => product.category._id === currentCategory
    );
    // const paginatedProductList = displayProd(0, categoryFiltered);

    return categoryFiltered;
  };

  // END OF FilterProducts()

  // console.log(filterProducts());
  // grab the data you want to display. i.e. have 1000 products but only want to display 500 .slice (0,500)
  // const [displayProducts, setDisplayProducts] = useState(
  //   state.products.slice(0, 15)
  // );
  // console.log(displayProducts);
  // create state that will hold page # that the User is currently on in the pagination i.e. pg 2 out of 15 that displays 10 products per page
  // const [pageNum, setPageNum] = useState(0);

  // how many products we want per page
  // const prodPerPage = 5;

  // pages visited or products already viewed i.e. if on page 2 with 10 products it means we have already seen 20 products or two pages
  // const pagesVisited = pageNum * prodPerPage;

  // display the correct products on each page by slicing from the pagesVisited (last viewed product) to the next # products perPage i.e. if 10 and on page 4 it would slice(40, 50)
  // const displayProd = (currentPg, arrToPaginate) => {
  //   const productPerPg = 5;
  //   console.log("inbound Arr ", { arrToPaginate });
  //   const paginatedArr = arrToPaginate.slice(
  //     currentPg * productPerPg,
  //     (currentPg + 1) * productPerPg
  //   );
  //   console.log("outbound paginatedArr", { paginatedArr });
  //   return paginatedArr;
  // };

  // determines how many pages in our pagination depending on product length
  // const pageCount = Math.ceil(displayProd.length / prodPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNum(selected);
  // };

  return (
    <div className="my-2">
      <h2>Our Products:</h2>

      {state.products.length ? (
        <div className="flex-row-shop">
          {filterProducts().map((product, index) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <Loading /> : null}
    </div>
  );
}

export default ProductList;

{
  /* <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtnns'}
          previousLinkClassName={'prevBtn'}
          nextLinkClassName={'nextBtnn'}
          activeClassName={'activePagination'}
          disabledClassName={'disabledPagination'}/> */
}
