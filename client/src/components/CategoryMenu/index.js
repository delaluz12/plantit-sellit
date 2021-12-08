import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import SpaIcon from '@material-ui/icons/Spa';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

 

  return (
    <div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 id="sidebarTitle">CATEGORIES</h3>
          <ul className="sidebarList">
            <li className="allProducts" onClick={() => {window.location.reload()}}><SpaIcon id="categoryIcon" />All Products</li>
            {categories.map((item) => (
              <li
                id="categoryLi"
                className="sidebarListItem categoryLi"
                key={item._id}
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                <SpaIcon id="categoryIcon" />
                {item.name}
              </li>
            ))}
          </ul>

        </div>
      </div>

      
    </div>
  );
}

export default CategoryMenu;
