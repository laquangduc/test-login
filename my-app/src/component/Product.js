import React from 'react'

const Product = (props) => {
    console.log(props)
    return (
        <div>
            <h1>day la tranng product</h1>

            {props.product && props.product.map((product,index) =>{
                return (
                    <div key={index}>{product.name}</div>
                )
            })}
        </div>
    )
}

export default Product
