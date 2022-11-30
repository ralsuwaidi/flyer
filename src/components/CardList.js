import { CardItem } from "./CardItem";
import { data } from "../data";

export default function CardList(props) {
  const flyerList = data.flyers
  .filter(function(obj){
    if (!props.showAll) {
      
      return obj.active
    }
    return obj
  })
  .map((data) => 
  (
    <div key={data.id} className="my-5 md:my-0">
      <CardItem event={data} />
    </div>
  ));

  return (
    <>
      <div class="md:grid md:grid-cols-3 md:gap-3">{flyerList}</div>
    </>
  );
}
