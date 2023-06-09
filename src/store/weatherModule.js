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
		async getWeather({ commit }, coords) {
			const forecast = await getApi(
				"https://weatherapi-com.p.rapidapi.com/forecast.json",
				{
					q: `${coords}`,
					days: "10",
				}
			);
			commit("setCurrentCoords", coords);
			commit("addForecast", handlerForecast(forecast));
		},
	},
	namespaced: true,
};
