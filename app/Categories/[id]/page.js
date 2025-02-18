import ProductsSection from '@/components/ProductSection'
import '@/components/style/Categories.css'
const CategoriesID = async ({ params: { id } }) => {
	let products = []

	try {
		const response = await fetch(`http://localhost:5195/api/ProductShortages/categories/${id}/products`, {
			cache: 'no-cache',
		})

		const productsData = await response.json()
		if (!id) return null
		products = productsData
	} catch (e) {}

	// console.log(products)
	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			<h1 className='header'>
				<div>STS</div>
				<div className='redDivStyle'>Kamery</div>
			</h1>

			<div className='title'>
				<h2>Kategorie</h2>
			</div>

			<ProductsSection products={products} />
		</div>
	)
}

export default CategoriesID
