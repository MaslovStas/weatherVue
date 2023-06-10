import getApi from "@/utils/getApi";
import handlerForecast from "@/utils/handlerForecast";

export const weatherModule = {
	state: {
		forecasts: {},
		currentCoords: "",
	},
	getters: {
		isForecast(state) {
			return !!state.currentCoords;
		},
		forecast(state) {
			return state.forecasts[state.currentCoords];
		},
	},
	mutations: {
		setCurrentCoords(state, coords) {
			state.currentCoords = coords;
		},
		addForecast(state, forecast) {
			state.forecasts[state.currentCoords] = forecast;
		},
	},
	actions: {
		async getWeather({ commit }, query) {
			const forecast = await getApi(
				"https://weatherapi-com.p.rapidapi.com/forecast.json",
				{
					q: `${query}`,
					days: "10",
				}
			);
			const coords = `${forecast.location.lat},${forecast.location.lon}`;
			commit("setCurrentCoords", coords);
			commit("addForecast", handlerForecast(forecast));
		},
	},
	namespaced: true,
};
