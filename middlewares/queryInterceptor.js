export const queryReport = async (req, res, next) => {
	const params = req.params;
	const url = req.url;
	console.log(
		`Report from http://localhost:5500${url} with parameter:`,
		params
	);
	next();
};