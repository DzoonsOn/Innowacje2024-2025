import React from 'react'
import Link from 'next/link'
import Product from '@/components/Product'
const MainPage = async ({ params: { productID } }) => {
	let product

	try {
		const response = await fetch(`http://localhost:5195/api/ProductShortages/${productID}`, {
			cache: 'no-cache',
		})

		const productData = await response.json()
		if (!productID) return null
		product = productData
	} catch (e) {}

	return (
		<Product
			shortageId={product.shortageId}
			productName={product.productName}
			shelfUnit={product.shelfUnit}
			shelfNumber={product.shelfNumber}
			productNumber={product.productNumber}
			productCategory={product.departmentId}
		/>
	)
}

export default MainPage
