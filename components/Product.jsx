'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'
import './style/Product.css'

const Modal = ({ onClose, onConfirm, productCategory }) => {
	return (
		<div className='modal-overlay'>
			<div className='modal-content'>
				<h2>Czy na pewno ten produkt został dodany?</h2>
				<div className='modal-buttons'>
					<button onClick={onConfirm} className='confirm-button'>
						<Link href={`/Categories/${productCategory}`}>Potwierdź</Link>
					</button>
					<button onClick={onClose} className='cancel-button'>
						Anuluj
					</button>
				</div>
			</div>
		</div>
	)
}

const Product = ({ shortageId, productName, shelfUnit, shelfNumber, productNumber, productCategory }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAdded, setIsAdded] = useState(false)

	const handleUnAddProduct = () => {
		setIsModalOpen(true)
	}

	const handleModalClose = () => {
		setIsModalOpen(false)
	}

	const handleModalConfirm = () => {
		setIsAdded(true)
		setIsModalOpen(false)
	}

	const stylessAddButton =
		'items-center justify-center px-3 py-4 text-md font-semibold text-white rounded-full shadow-md'
	const stylesInfoDiv =
		'w-full flex justify-center py-2 bg-gray-200 rounded-lg text-gray-800 font-semibold shadow-md hover:bg-gray-300'

	const ImagePath = `/zdjecia/image_${shortageId}.png`

	return (
		<div className='mx-auto bg-white rounded-lg shadow-md p-4 border my-2'>
			<Link href={`/Categories/${productCategory}`}>
				<FaArrowLeft className='arrowback' />
			</Link>
			<div className='pb-4 flex flex-col mx-auto lg:w-1/4 md:w-1/2'>
				<h1 className='text-center text-xl text-black font-bold mb-1'>Product ID {shortageId}</h1>
				<div className='h-0.5 bg-slate-600 self-stretch'></div>
			</div>

			<div className='relative mx-auto lg:w-1/3 w-[60%] lg:h-96 h-[380px] bg-green-300 mb-4'>
				<Image src={ImagePath} alt='Detected Items' width={400} height={200} className='w-full h-full object-cover' />
			</div>

			<div className='flex justify-center lg:gap-40 gap-14 mb-4'>
				<button className={`${stylessAddButton} bg-red-500 hover:bg-red-800`}>
					<Link href={`/Categories/${productCategory}`}>
						<p>Nie dodano</p>
					</Link>
				</button>
				<button onClick={handleUnAddProduct} className={`${stylessAddButton} bg-green-500 hover:bg-green-800`}>
					<p>&nbsp;&nbsp;Dodano&nbsp;&nbsp;</p>
				</button>
			</div>

			<div className='flex flex-col space-y-3 lg:w-1/2 mx-auto'>
				<div className={stylesInfoDiv}>Regał {shelfUnit}</div>
				<div className={stylesInfoDiv}>Półka {shelfNumber}</div>
				<div className={stylesInfoDiv}>Numer produktu od lewej {productNumber}</div>
			</div>
			{isModalOpen && (
				<Modal onClose={handleModalClose} onConfirm={handleModalConfirm} productCategory={productCategory} />
			)}
		</div>
	)
}

export default Product
