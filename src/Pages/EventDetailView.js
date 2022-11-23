import FlyerForm from "../components/Form";
import { Breadcrumb, Button, Modal } from "flowbite-react";
import { HiListBullet, HiOutlineCheck } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Helmet } from "react-helmet-async";
import { CardLineIcon } from "../components/CardIcon";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import CardIconList from "../components/CardIconList";

export default function EventDetailView() {
  let { eventId } = useParams();
  const event = data.flyers.find((obj) => obj.id === eventId);
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Page Metadata */}
      <Helmet>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Helmet>


      {/* Breadcrumb */}
      <div className="bg-white max-w-2xl lg:max-w-7xl mx-auto px-3  ">
        <div className="pt-6">
          <Breadcrumb aria-label="Default breadcrumb">
            <Breadcrumb.Item href="/flyer" icon={HiListBullet}>
              Event List
            </Breadcrumb.Item>
            <Breadcrumb.Item>{event.id}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="mt-4">
            <img
              src={event.image}
              className="lg:col-span-2 h-64 lg:h-52 w-full object-cover rounded-xl"
            />
          </div>

          <Modal show={showModal} size="md" popup={true} onClose={() => {setShowModal(false)}}>
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineCheck className="mx-auto mb-4 h-14 w-14 text-white dark:text-gray-200 bg-green-400 rounded-full" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Your form has been submitted!
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="gray" onClick={() => {setShowModal(false)}}>
                    close
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* Event info */}
          <div className=" pt-10 pb-16  lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-4 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {event.title}
              </h1>

              <div className="mt-5">
                <CardIconList event={event} />
              </div>
            </div>

            <div className="py-10 lg:col-span-2 px-2 sm:px-0 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{event.description}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{event.details}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="mt-4 lg:mt-0">
              <FlyerForm event={event} setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
