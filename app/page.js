import StorageSummary from '@/src/StorageSummary'
import Elements from '@/utilis/elements'
import './globals.css'

const Home = () => {
	return (
		<div className='grid grid-cols-2 gap-2 mx-4'>
			{Elements.map(element => (
				<StorageSummary key={`${element.taskNumber}-${element.task2Number}`} element={element} />
			))}
		</div>
	)
}

export default Home
