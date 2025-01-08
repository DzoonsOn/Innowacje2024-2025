const Header = () => {
	return (
		<div className='rounded-lg w-full'>
			<div className='bg-red-600 text-white flex items-center justify-between px-4 py-2 rounded-t-lg'>
				<div className='flex items-center space-x-4'>
					<button></button>
					<span className='text-sm'>1</span>
					<button>
						<svg
							className='w-6 h-6 text-white'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5'></path>
						</svg>
					</button>
				</div>

				<div className='flex items-center space-x-2'>
					<button className='bg-red-400 p-2 rounded'>
						<svg
							className='w-5 h-5 text-white'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					</button>
					<button className='border border-white p-1 rounded'>
						<svg
							className='w-6 h-6 text-white'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M4 6h16M4 12h16M4 18h16'></path>
						</svg>
					</button>
				</div>
			</div>

			<div className='bg-orange-400 text-white px-4 py-2 rounded-l-lg rounded-t-lg shadow-md mt-2 mx-4'>
				ogłoszenie testowe
			</div>

			<div className='p-4'>
				<h2 className='text-lg font-semibold'>Menu główne</h2>
			</div>

			<div className='w-full h-1 bg-zinc-400'></div>
		</div>
	)
}

export default Header
