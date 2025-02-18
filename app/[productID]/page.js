import React from 'react'
import Link from 'next/link'
import Product from '@/components/Product'
const MainPage = async ({ params: { productID } }) => {
	let product

	if (!productID) return <p>No product ID provided</p>

	try {
		const response = await fetch(`http://localhost:5195/api/ProductShortages/${productID}`, {
			cache: 'no-cache',
		})

		const productData = await response.json()
		product = productData
	} catch (e) {}

	return (
		<Product
			shortageId={product.shortageId}
			productName={product.productName}
			shelfUnit={product.shelfUnit}
			shelfNumber={product.shelfNumber}
			productNumber={product.productNumber}
		/>
	)
}

export default MainPage
