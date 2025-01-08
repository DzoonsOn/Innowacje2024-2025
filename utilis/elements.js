import BagSvg from '@/src/assets/BagSvg'
import CalendarSvg from '@/src/assets/CalendarSvg'
import CameraSvg from '@/src/assets/CameraSvg'
import ClipboardSvg from '@/src/assets/ClipboardSvg'
import PiSvg from '@/src/assets/PiSvg'
import WarehouseSvg from '@/src/assets/WarehouseSvg'

const Elements = [
	{
		divColor: 'bg-blue-500',
		colorCircle: 'bg-blue-600',
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
		content: 'Priorytetowe zgłoszenia serwisowe',
	},
	{
		divColor: 'bg-orange-500',
		colorCircle: 'bg-orange-600',
		svg: <CalendarSvg />,
		title: 'Zmiany Layoutów',
		topicOne: 'Promocje',
		taskNumber: 7,
		done: 20,
		topicTwo: 'Regularne',
		task2Number: 18,
		done2: 35,
	},
	{
		divColor: 'bg-amber-500',
		colorCircle: 'bg-amber-700',
		svg: <PiSvg />,
		title: 'Poprawność stoków',
		topicOne: ' ',
		taskNumber: 8,
		done: 15,
		content: 'Weryfikacja WMS ZIC na grupe',
	},
	{
		divColor: 'bg-red-500',
		colorCircle: 'bg-red-600',
		svg: <ClipboardSvg />,
		title: 'Kontrola Procesów',
		topicOne: 'Audyt',
		taskNumber: 9,
		done: 12,
		topicTwo: 'Optymalizacja',
		task2Number: 4,
		done2: 8,
		content: 'Monitorowanie jakości procesów',
	},
	{
		divColor: 'bg-teal-500',
		colorCircle: 'bg-teal-600',
		svg: <WarehouseSvg />,
		title: 'Zarządzanie Zapasami',
		topicOne: 'Dostawy',
		taskNumber: 15,
		done: 20,
		topicTwo: 'Odbiory',
		task2Number: 10,
		done2: 18,
		content: 'Kontrola i uzupełnianie zapasów',
	},
	{
		divColor: 'bg-purple-500',
		colorCircle: 'bg-purple-600',
		svg: <BagSvg />,
		title: 'Etykiety i Elementy POS',
	},
	{
		divColor: 'bg-green-500',
		colorCircle: 'bg-green-600',
		svg: <CameraSvg />,
		href: 'MainProduct',
		textXl: true,
		topicOne: 'Kamery',
		taskNumber: 12,
		done: 25,
	},
]

export default Elements
