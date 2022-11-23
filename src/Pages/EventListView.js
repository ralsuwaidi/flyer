import "../App.css";
import { Header } from "../components/Header";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet-async";

function EventListView() {
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
        <Header />
        <CardList />
      </div>
    </>
  );
}

export default EventListView;
