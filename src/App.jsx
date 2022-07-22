import { useState } from 'react';
import CardList from './components/CardList';
import Modal from './components/Modal';
import LocalAnime from './assets/LocalAnime';
import './App.css';

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);

  };

  return (
    <div className="App">
      <CardList
        title="Studio Ghibli"
        LOCAL_API={LocalAnime}
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Series"
        BASE_URL='https://edgemony-backend.herokuapp.com/series'
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        modalVisibility={onHandleModal}
      />
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
    </div>
  );
}

export default App;