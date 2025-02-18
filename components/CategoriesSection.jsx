'use client'
import { useRouter } from 'next/navigation'
import './style/Categories.css'

const CategoriesSection = ({ categories }) => {
	const router = useRouter()

	const handleRedirect = departmentId => {
		router.push(`/Categories/${departmentId}`)
	}

	return (
		<div className='gridContainer'>
			{categories.map(category => (
				<button key={category.departmentId} className='button' onClick={() => handleRedirect(category.departmentId)}>
					{category.departmentName}
					<div className='redSquareStyle'>{category.productCount}</div>
				</button>
			))}
		</div>
	)
}

export default CategoriesSection
