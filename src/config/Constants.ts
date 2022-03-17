export const config = {
	API_URL: process.env.API_URL,
	MONGO_CONNECTION:
		'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWD + '@cluster0.ihph7.mongodb.net/' + process.env.DB_CLUSTER + '?retryWrites=true&w=majority',
}
