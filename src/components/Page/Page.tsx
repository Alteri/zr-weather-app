import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageStyled } from './styled';
import { addCompareCities, fetchCity } from '../../store/fetch';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  const dispatch = useDispatch();
  const currentCity = localStorage.getItem('currentCity') || '';
  const initialCity = currentCity && JSON.parse(currentCity);

  useEffect(() => {
    dispatch(addCompareCities());
    initialCity && dispatch(fetchCity(initialCity));
  }, [dispatch]);

  return <PageStyled>{children}</PageStyled>;
};

export default Page;
