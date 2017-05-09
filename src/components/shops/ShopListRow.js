import React from 'react';
import {Link} from 'react-router';
import {Image} from 'semantic-ui-react';
const ShopListRow = ({shop}) => {
  return (
    <tr>
      <td><Link to={'/shop/'+shop.id}>{shop.title}</Link></td>
      <td><Image
        src={shop.img}
        size="small"
        as={Link} to={'/shop/'+shop.id}
      /></td>
      <td>{shop.category}</td>
    </tr>
  );
};

export default ShopListRow;
