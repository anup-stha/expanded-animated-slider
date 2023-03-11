"use client";
import { useState } from "react";
import { games } from "@/constants/games";

export const CarouselItems = () => {
  const [activeItem, setActiveItem] = useState(games[0].id);

  return (
    <>
      {games.map((game) => (
        <div
          key={game.id}
          className={activeItem === game.id ? "item active" : "item"}
          onClick={(e) => {
            e.stopPropagation();
            setActiveItem(game.id);
          }}
          style={{
            backgroundImage: `url(${game.image})`,
          }}
        >
          <div className="item-desc">
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
