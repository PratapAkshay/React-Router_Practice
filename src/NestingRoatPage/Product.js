import React from 'react';
import {Link,Route} from 'react-router-dom';

const Product = ({match,data}) => {
    const product = data.find(p=>p.id==match.params.productId);
    if(product){
        return(
            <div>
                <table>
                    <th>{product.name}</th>
                    <tr>
                        <td>Product ID</td>
                        <td>{product.id}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{product.description}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{product.status}</td>
                    </tr>
                </table>
            </div>
        )
    }
    else{
        return(<h2> Sorry. Product doesnt exist </h2>);
    }
}
export default Product;