'use client'
import { useRouter } from 'next/navigation'
import './style/Categories.css'

const ProductsSection = ({ products }) => {
	const router = useRouter()

	const handleRedirect = shortageId => {
		router.push(`/${shortageId}`)
	}
	return (
		<div className='gridContainer'>
			{products.map(product => (
				<button key={product.shortageId} className='button' onClick={() => handleRedirect(product.shortageId)}>
					Brak produktu o ID {product.shortageId}
					<div className='redSquareStyle'>1</div>
				</button>
			))}
		</div>
	)
}

export default ProductsSection
