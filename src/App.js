import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CarCard from "./components/CarCard";
import ButtonMsg from "./components/ButtonMsg";

const carsData = [
    ["Ferrari LaFerrari", "Hybrid V12, 963 KM"],
    ["Bugatti Chiron", "W16, 1500 KM"],
    ["Lamborghini Aventador", "V12, 740 KM"],
    ["Koenigsegg Jesko", "V8, 1600+ KM"],
    ["McLaren P1", "Hybrid V8, 903 KM"],
    ["Porsche 918 Spyder", "Hybrid V8, 887 KM"],
    ["Aston Martin Valkyrie", "V12, 1160 KM"],
    ["Rimac Nevera", "Elektryczny, 1914 KM"],
    ["Pagani Huayra", "V12 AMG, 730 KM"],
    ["Ferrari SF90 Stradale", "Hybrid V8, 1000 KM"],
  ];
  
const quotes = [
  "🚗💡 Fun fact: Bugatti Chiron osiąga 100 km/h w 2.4 sekundy!",
  "🚗💡 Ciekawostka: Koenigsegg Jesko ma skrzynię z 9 sprzęgłami!",
  "🚗💡 Hasło dnia: Aerodynamika potrafi dać więcej niż moc.",
  "🚗💡 Fun fact: Rimac Nevera to najszybszy elektryczny samochód świata.",
  "🚗💡 Pagani tworzy elementy wnętrza ręcznie — nawet śrubki!",
];

export default function App() {
  const [search, setSearch] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [randomQuote, setRandomQuote] = useState("");

 
  useEffect(() => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  const filteredCars = carsData.filter((car) =>
    car[0].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
      <Header title="Portal o SuperSamochodach" />

      <ButtonMsg />

      
      <input
        type="text"
        placeholder="Szukaj samochodu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      
      <div className="quote-box">
        {randomQuote}
      </div>

      
      <div className="cards-container">
        {filteredCars.map((car, index) => (
        <CarCard key={index} title={car[0]} description={car[1]} />

        ))}
      </div>
    </div>
  );
}
