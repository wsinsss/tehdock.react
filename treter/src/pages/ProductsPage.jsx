import { useEffect, useState } from "react"

export default function ProductsPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getData() {

            const resp = await fetch('https://api.escuelajs.co/api/v1/products?limit=1&skip=0')
            const data = await resp.json()
            if (resp.ok) {
                setProducts(data)
            }

        }

        getData()
    }, [])

    return (

        <div className="grid grid-cols-4 gap-8">


            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        category={product.category.name}
                        images={product.images}
                        price={product.price}
                    />
                ))
            }
        </div>
    )
}
