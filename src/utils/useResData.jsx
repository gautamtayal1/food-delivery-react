import { useState, useEffect } from "react";
import { RESTAURANT_LIST_URL } from "./links";

export default function useResData() {
  const [restaurantsList, setRestaurantList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(RESTAURANT_LIST_URL);
      const json = await data.json();
      setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    fetchData();
  }, []);

  return { restaurantsList, setRestaurantList };
}
