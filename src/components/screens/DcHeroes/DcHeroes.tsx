import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { ListHeroes } from "../../UI/ListHeroes/ListHeroes";
import { heroesData } from "../../../data/heroes";

export const DcHeroes = () => {
  const [heros, setHeros] = useState<IHeroes[]>([]);

  const handleGetHeroesDc = () => {
    const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
    setHeros(result);
  };

  useEffect(() => {
    handleGetHeroesDc();
  }, []);

  return<ListHeroes heroes={heros} title = "Heroes DC Comics"/>
};
