import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import ModalCard from '../../components/ModalCard/ModalCard';
import { ModalCardType } from 'types/Types';
import './Home.scss';

const Home = () => {
  const [modalCardId, setModalCardId] = useState<number | string>('');
  const [openModal, setOpenModal] = useState(false);

  const getModalCardId = (value: number | string) => {
    setModalCardId(value);
  };

  const changeModalState = (value: boolean) => {
    setOpenModal(value);
  };
  return (
    <div className='home'>
      <div className='home__container'>
        <Search />
        {modalCardId && (
          <ModalCard
            modalCardId={modalCardId}
            changeModalState={changeModalState}
            getModalCardId={getModalCardId}
          />
        )}
        <CardList getModalCardId={getModalCardId} />
      </div>
    </div>
  );
};

export default Home;
