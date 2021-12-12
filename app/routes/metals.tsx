import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Auvi - Precious Metals",
    description: "Auvi Precious Metals Price Tracking",
  };
};

export default function Metals() {
  return (
    <div>
      <main>
        <h2>Precious Metals</h2>
      </main>
      <aside>
        <p>
          Vik wise Ivar Horsetail Snorri Yuletide the Thing Ivar Horsetail
          Rogaland leather. Grim the Hersir sail arm fjord, flee paid ells of
          wool Christianity Flosi Ivar. Weather NorthGlera Ondott Crow knives
          head sharp Grettir Olaf. Rowing Ofaera Olvir the question sheep King
          Solvi, Hrutafjord sharp knife flesh hill. Leather Fridrek spear
          husband whey wife thither brother Grim the Hersir.
        </p>
      </aside>
    </div>
  );
}
