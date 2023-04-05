import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import ModalCard from '../../components/ModalCard/ModalCard';
import { useScrollBlock } from '../../hooks/UseScrollBlock';
import { ModalCardType } from 'types/Types';
import './Home.scss';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [modalCardInfo, setModalCardInfo] = useState<ModalCardType>({});
  const [openModal, setOpenModal] = useState(false);
  const [classModal, setClassModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const changeLoading = (value: boolean) => {
    setLoading(value);
  };

  const getModalInfoCard = (obj: object) => {
    setModalCardInfo(obj);
  };

  const changeModalState = (value: boolean) => {
    setOpenModal(value);
  };

  useEffect(() => {
    setClassModal((prev) => !prev);
  }, [openModal]);

  openModal ? blockScroll() : allowScroll();

  return (
    <div className='home'>
      <div className='home__container'>
        <Search loading={changeLoading} />
        <ModalCard
          modalCardInfo={modalCardInfo}
          changeModalState={changeModalState}
          classModal={classModal}
        />
        <CardList
          loading={changeLoading}
          loadingState={loading}
          getModalInfoCard={getModalInfoCard}
          changeModalState={changeModalState}
        />
      </div>
    </div>
  );
};

export default Home;
