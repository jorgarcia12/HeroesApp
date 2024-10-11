import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../UI/ListHeroes/ListHeroes";

export const MarvelHeroes = () => {
  const [heros, setHeros] = useState<IHeroes[]>([]);

  const handleGetHeroesDc = () => {
    const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
    setHeros(result);
  };

  useEffect(() => {
    handleGetHeroesDc();
  }, []);

  return <ListHeroes heroes={heros} title="Heroes Marvel Comics" />;
};
