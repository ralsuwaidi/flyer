import { Tooltip } from "flowbite-react";

function CardLineIcon(props) {
  return (
    <>
      <Tooltip content={props.tooltip}>
        <div className="flex border rounded items-center py-0.5 px-1.5 max-w-fit text-gray-500 text-xs">
          <div className="">{props.icon}</div>
          <p className="ml-2  ">{props.iconText}</p>
        </div>
      </Tooltip>
    </>
  );
}

export { CardLineIcon };
