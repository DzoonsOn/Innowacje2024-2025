import BagSvg from '@/components/assets/BagSvg'
import CalendarSvg from '@/components/assets/CalendarSvg'
import CameraSvg from '@/components/assets/CameraSvg'
import ClipboardSvg from '@/components/assets/ClipboardSvg'
import PiSvg from '@/components/assets/PiSvg'
import WarehouseSvg from '@/components/assets/WarehouseSvg'
import '@/app/globals.css'

const Elements = [
	{
		divColor: 'bg-blue-600',
		colorCircle: 'bg-blue-700',
		svg: <PiSvg />,
		title: 'Dołożenia',
		topicOne: 'Magazyn',
		taskNumber: 5,
		done: 10,
		topicTwo: 'Szyflady',
		task2Number: 3,
		done2: 5,
		content: 'więcej szczegółów',
	},
	{
		divColor: 'bg-red-500',
		colorCircle: 'bg-red-600',
		svg: <WarehouseSvg />,
		title: 'Odłożenie do magazynu',
		topicOne: ' ',
		textXl: true,
		taskNumber: 0,
		done: 10,
		content: 'Otwarte dostawy',
	},
	{
		divColor: 'bg-gray-400',
		colorCircle: 'bg-gray-800',
		svg: <CalendarSvg />,
		title: 'C&C',
		topicOne: ' ',

		textXl: true,
		done: ' ',
		topicTwo: ' ',
		task2Number: 'BRAK DANYCH',
		done2: ' ',
	},
	{
		divColor: 'bg-yellow-600',
		colorCircle: 'bg-yellow-500',
		svg: <PiSvg />,
		title: 'Poprawność stoków',
		topicOne: ' ',
		textXl: true,
		taskNumber: 549,
		done: 1,
		content: 'Liczba Flag / Weryfikacja WMS',
	},
	{
		divColor: 'bg-red-500',
		colorCircle: 'bg-red-600',
		svg: <ClipboardSvg />,
		title: 'Etykiety i elementy POS',

		done: 12,
		topicTwo: 'ETYKIETY',
		task2Number: 1,
		done2: 0,
	},
	{
		divColor: 'bg-gray-400',
		colorCircle: 'bg-gray-300',
		textXl: true,
		title: null,
		textXl: true,
		done: null,
		topicTwo: ' ',
		task2Number: 'Informacje o artykule',
		done2: ' ',
	},
	{
		divColor: ' bg-purple-500 ',
		colorCircle: ' bg-purple-600 ',
		svg: <BagSvg />,
		title: 'Zmiany Layotów',
		topicOne: 'Promocje',
		taskNumber: 200,
		done: 1,
		topicTwo: 'Mega',
		task2Number: 10,
		done2: 18,
		content: '',
	},
	{
		divColor: 'bg-green-500 ',
		colorCircle: 'bg-green-600 ',
		svg: <CameraSvg />,
		href: 'Categories',
		textXl: true,
		topicOne: 'Kamery',
		taskNumber: 12,
		done: 25,
	},
]

export default Elements
