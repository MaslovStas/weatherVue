const element = document.querySelector(".app");
const but = document.querySelector(".button");

async function loadWeather(arguments) {
	const url =
		"https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "289e47d0dfmsh8d74c82e635ad3dp1bc686jsn0859ae9abdaf",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const responseResult = await response.json();
		console.log(responseResult.current.condition.icon);
		element.innerHTML = `<img src="${responseResult.current.condition.icon}" />`;
	} catch (error) {
		console.log(error);
	}
}
but.onclick = loadWeather;
