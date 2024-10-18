import React, { useEffect, useState } from "react";

export const Header = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      //
      const endOfOffer = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59,
        999
      );

      const difference = endOfOffer.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("La oferta ha terminado!");
      }
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header
        className={`flex justify-center items-center bg-red-500 
          jtm-container
        `}
      >
        <h1>La oferta termina en: </h1>
        <p>{timeLeft}</p>
      </header>
    </>
  );
};
