import { SlCalender, SlGhost } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CardLineIcon } from "./CardIcon";

export const CardItem = (props) => {
  return (
    <Link to={`events/` + props.event.id}>
      <div class="md:max-w-md md:mx-auto mx-3 md:m-2 bg-white border border-gray-200 rounded-2xl  dark:bg-gray-800 dark:border-gray-700">
        <img
          class="rounded-t-2xl object-cover w-full h-32"
          src={props.event.image}
          alt=""
        />
        <div class="p-5">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
            {props.event.title}
          </h5>
          <p class="mb-3 font-sm text-sm text-gray-500 dark:text-gray-400 text-ellipsis overflow-hidden h-16">
            {props.event.description}
          </p>
          {props.event.date && (
            <CardLineIcon iconText={props.event.date} icon={<SlCalender />} tooltip="no deadline"/>
          )}
        </div>
      </div>
    </Link>
  );
};
