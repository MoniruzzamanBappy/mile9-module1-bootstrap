import React from "react";
import Card from "../Card/Card";

const CardGroups = () => {
    const products = [
        {id:1, name: 'Apple', price: 100000},
        {id:2, name: 'One Plus', price: 80000},
        {id:3, name: 'Samsung', price: 120000},
        {id:4, name: 'Sony', price: 70000},
    ]
  return (
    <div>
      <h1>hello</h1>
      <div className="card-group container">
        {
            products.map(product=><Card key={product.id} product={product}></Card>)
        }
      </div>
    </div>
  );
};

export default CardGroups;
