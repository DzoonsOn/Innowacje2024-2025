// Function to extract the last number from a URL string
const extractLastNumberFromUrl = url => {
	const matches = url.match(/\d+$/) // Matches digits at the end of the string
	return matches ? matches[0] : 'No number at the end'
}

export default extractLastNumberFromUrl
