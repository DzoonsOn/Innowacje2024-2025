import Elements from '../utilis/elements'
import Footer from './Footer'
import Header from './Header'
import StorageSummary from './StorageSummary'
const MainPage = () => {
	return (
		<div className='flex flex-col gap-4'>
			<Header />
			<div className='grid grid-cols-2 gap-2 mx-4'>
				{Elements.map(element => (
					<StorageSummary key={element.title} element={element} />
				))}
			</div>
			<Footer />
		</div>
	)
}

export default MainPage
