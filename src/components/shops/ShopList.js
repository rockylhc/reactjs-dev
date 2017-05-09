import React from 'react';
import ShopListRow from './ShopListRow';

const ShopList = ({shops}) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {shops.map(shop =>
          <ShopListRow key={shop.id} shop={shop}/>
        )}
      </tbody>
    </table>
  );
}

export default ShopList;
