import React, { useEffect, useState } from "react";
import StatusBar from "./StatusBar";
import SearchBar from "./SearchBar";
import Wheather from "./Wheather";
import PanelTemp from "./PanelTemp";
import ForeCastPanel from "./ForeCastPanels";
import "../../index.css"
export default function Day3() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Hanoi");
  useEffect(() => {
  handleSearch();
}, []);
  const handleSearch = async () => {
  if (!city.trim()) return alert("Nhập tên thành phố");

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=${encodeURIComponent(city)}&days=2`
    );
    const data = await res.json();

    const currentWeather = data.current;

    const todayHours = data.forecast.forecastday[0]?.hour || [];
    const tomorrowHours = data.forecast.forecastday[1]?.hour || [];
    const allHours = [...todayHours, ...tomorrowHours];

    const now = new Date();
    const currentHour = now.getHours();

    // Tìm vị trí giờ hiện tại (theo định dạng giờ của API)
    const nowHourIndex = allHours.findIndex((h) => {
      const hourTime = new Date(h.time);
      return hourTime.getHours() === currentHour && hourTime.getDate() === now.getDate();
    });

    // Lấy 4 giờ: now + 3 giờ tiếp theo
    const next4Hours = allHours.slice(nowHourIndex, nowHourIndex + 4);

    setCurrent(currentWeather);
    setForecast(next4Hours);
  } catch (err) {
    console.error("Lỗi API:", err);
  }
};


  return (
    <div
      className="mx-auto my-4 border-4 bg-gradient-to-t from-sky-400 to-indigo-400 border-black rounded-4xl overflow-hidden shadow-lg bg-white"
      style={{ width: 430, height: 932 }}
    >
      <StatusBar />
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <Wheather data={current} />
      <PanelTemp data={current} />
      <ForeCastPanel forecast={forecast} />
    </div>
  );
}
