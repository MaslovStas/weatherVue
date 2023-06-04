import axios from "axios";

const getApi = async (url, params) => {
	const options = {
		method: "GET",
		url: url,
		params: params,
		headers: {
			"X-RapidAPI-Key": "289e47d0dfmsh8d74c82e635ad3dp1bc686jsn0859ae9abdaf",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export default getApi;
