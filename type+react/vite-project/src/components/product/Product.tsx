import React from 'react'

type ProductProps = {
    id: number,
    name: string,
    price: number,
    description: string
} 
const Product: React.FC<ProductProps> = ({ id, name, price, description }: ProductProps) => {
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>price: {price}</p>
            <p>description: {description}</p>

        </div>
    )
}
export default Product