import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../UI/ListHeroes/ListHeroes";

export const Home = () => {
  return <ListHeroes heroes={heroesData} title="Todos los Heroes" />;
};
