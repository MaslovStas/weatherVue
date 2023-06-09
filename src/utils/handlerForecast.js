const DAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thirsday",
	"Friday",
	"Saturday",
];

const handlerForecast = (forecast) => ({
	name: forecast.location.name,
	temp: forecast.current.temp_c + "°",
	text: forecast.current.condition.text,
	icon: forecast.current.condition.icon,
	minmax: `Min: ${forecast.forecast.forecastday[0].day.mintemp_c}°, max: ${forecast.forecast.forecastday[0].day.maxtemp_c}°`,
	hour: [
		...forecast.forecast.forecastday[0].hour,
		...forecast.forecast.forecastday[1].hour,
	].map((hour) => ({
		time: new Date(hour.time).getHours(),
		icon: hour.condition.icon,
		desc: hour.temp_c + "°",
	})),
	day: forecast.forecast.forecastday.map((day, index) => ({
		day: index !== 0 ? DAYS[new Date(day.date).getDay()] : "Today",
		icon: day.day.condition.icon,
		temp: day.day.avgtemp_c + "°",
	})),
});

export default handlerForecast;
