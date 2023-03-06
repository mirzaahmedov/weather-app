import axios from "@/lib/axios"

export const queryDailyForecast = async ({  }) => {
  return axios.get("/dailyForecast")
}
