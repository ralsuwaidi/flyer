import "../App.css";
import { Header } from "../components/Header";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

function EventListView() {
  const [showAll, setShowAll] = useState(false)
  return (
    <>
      <Helmet>
        <title>Coders(hq) flyer</title>
        <meta
          name="description"
          content="Find an active flyer and participate as a judge, attendee or even a host. All our events are different."
          title="Flyer List"
        />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        <Header setShowAll={setShowAll} showAll={showAll}/>
        <CardList showAll={showAll} />
      </div>
    </>
  );
}

export default EventListView;
