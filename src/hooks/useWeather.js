import { useQuery } from "@tanstack/react-query";

const BASE_URL = 'https://api.openweathermap.org';

const useWeather = (location, isCelsius) => {
    const tempUnits = isCelsius ? 'metric' : 'imperial';
    const endpoint = `/data/2.5/forecast?q=${ location }&units=${ tempUnits }&appid=${ import.meta.env.VITE_API_KEY }`;

    const { data } = useQuery({
        queryKey: [location, isCelsius],
        queryFn: async () => {
            const res = await fetch(BASE_URL + endpoint);
            const data = await res.json();

            return data;
        }
    });

    return data;
};

export default useWeather;