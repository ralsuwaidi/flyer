import { CardItem } from "./CardItem";
import { data } from "../data";



export default function CardList() {
  const flyerList = data.flyers.map((data) => (
    <div key={data.id} className="my-5 md:my-0">
      <CardItem event={data}  />
    </div>
  ));

  return (
    <>
      <div class="md:grid md:grid-cols-3 md:gap-3">{flyerList}</div>
    </>
  );
}
