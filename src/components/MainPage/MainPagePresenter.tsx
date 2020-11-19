import React from 'react';
import OMainPage from '../../commons/atomic/organisms/OMaingPage';
import OMainNav from '../../commons/atomic/organisms/OMainNav';
import { MainPageWrapper } from './MainPage.styles';

const MainPagePresenter = () => {
  return (
    <MainPageWrapper>
      <OMainNav />
      <OMainPage />;
    </MainPageWrapper>
  );
};

export default MainPagePresenter;
