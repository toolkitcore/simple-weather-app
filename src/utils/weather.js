export const isSunny = (temp, isCelsius) => {
    const threshold = isCelsius ? 20 : 68;
    return temp > threshold;
}

const formatDate = (timestamp, options) => {
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat('vi-vn', options).format(date);
}

export const formatWeatherData = (data) => {
    console.log(data);
    const timestamp = data.dt;
    const dayOfWeek = formatDate(timestamp, { weekday: 'long' });
    const stringDate = formatDate(timestamp, { day: 'numeric', month: 'short', year: 'numeric' });
    
    return {
        dayOfWeek,
        stringDate,
        description: data?.weather[0].main,
        temp: Math.ceil(data.main.temp),
        minTemp: Math.ceil(data.main.temp_min),
        maxTemp: Math.ceil(data.main.temp_max),
        windSpeed: Math.ceil(data.wind.speed),
        humidity: data.main.humidity,
    };
}
