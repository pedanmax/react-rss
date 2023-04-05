import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import ModalCard from '../../components/ModalCard/ModalCard';
import { ModalCardType } from 'types/Types';
import './Home.scss';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [modalCardInfo, setModalCardInfo] = useState<ModalCardType>({});
  const [openModal, setOpenModal] = useState(false);
  const changeLoading = (value: boolean) => {
    setLoading(value);
  };
  const getModalInfoCard = (obj: object) => {
    setModalCardInfo(obj);
    console.log(obj);
  };
  console.log(modalCardInfo);
  return (
    <div className='home'>
      <div className='home__container'>
        <Search loading={changeLoading} />
        <ModalCard modalCardInfo={modalCardInfo} />
        <CardList
          loading={changeLoading}
          loadingState={loading}
          getModalInfoCard={getModalInfoCard}
        />
      </div>
    </div>
  );
};

export default Home;
