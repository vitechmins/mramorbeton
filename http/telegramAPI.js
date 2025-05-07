import axios from 'axios'

const token = '7485938744:AAGVBInU8gSyn7w0OGlelHzWvSzNC4C0N1o'
const chat_id = '-1002186363353'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`

export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}






