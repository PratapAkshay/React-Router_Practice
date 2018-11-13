import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Product from './Product'

const NeastingRoute = ({match}) => {
    const productData = [
        {
          id: 1,
          name: 'NIKE Liteforce Blue Sneakers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
          status: 'Available'
        
        },
        {
          id: 2,
          name: 'Stylised Flip Flops and Slippers',
          description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
          status: 'Out of Stock'
        
        },
        {
          id: 3,
          name: 'ADIDAS Adispree Running Shoes',
          description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
          status: 'Available'
        },
        {
          id: 4,
          name: 'ADIDAS Mid Sneakers',
          description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
          status: 'Out of Stock'
        },
        
    ];

    const LinkList = productData.map((product)=>{
        return(
            <li>
                <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
            </li>
        )
    });

    return(
        <React.Fragment>
            <div>
                <ul>
                    {LinkList}
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path={`${match.url}/:productId`}
                    render={ (props) => <Product data= {productData} {...props} />}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}
export default NeastingRoute;