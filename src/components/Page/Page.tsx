import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageStyled } from './styled';
import { addCompareCities, fetchCity } from '../../store/fetch';

type PageProps = {
  children: ReactNode;
};

const currentCity = localStorage.getItem('currentCity') || '';
const initialCity = JSON.parse(currentCity);

const Page = ({ children }: PageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCompareCities());
    dispatch(fetchCity(initialCity));
  }, [dispatch]);

  return <PageStyled>{children}</PageStyled>;
};

export default Page;
