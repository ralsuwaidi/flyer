import { SlCalender } from "react-icons/sl";
import { CardLineIcon } from "./CardIcon";


export default function CardIconList(props){



    return (
        <div className="flex">
        {props.event.date && props.event.active && (
          <CardLineIcon
            iconText={props.event.date.text}
            icon={<SlCalender />}
            tooltip={props.event.date.tooltip}
          />
        )}
        {props.event.date && !props.event.active && (
          <CardLineIcon
            iconText={"closed"}
            icon={<SlCalender />}
            tooltip={"event closed"}
          />
        )}
        {props.event.badgeList &&
          props.event.badgeList.map((badgeItem) => (
            <div className="ml-2">
              <CardLineIcon
                iconText={badgeItem.text}
                icon={badgeItem.icon}
                tooltip={badgeItem.tooltip}
              />
            </div>
          ))}
      </div>

    )
}