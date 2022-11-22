import '../App.css';
import { Header } from '../components/Header';
import CardList from '../components/CardList';


function EventListView() {
  return (
    <>
    <div className='max-w-5xl mx-auto'>
      <Header/>
      <CardList/>
      

    </div>
    </>
  );
}

export default EventListView;
