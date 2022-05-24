import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PageStyled } from './styled';
import { addCompareCities, fetchCity } from '../../store/fetch';
import { slugify } from '../../utils/slugify';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCity = localStorage.getItem('currentCity') || '';
  const initialCity = currentCity && JSON.parse(currentCity);

  useEffect(() => {
    dispatch(addCompareCities());
    if (initialCity) {
      dispatch(fetchCity(initialCity));
      navigate(`/${slugify(initialCity)}`, { replace: true });
    }
  }, [dispatch]);

  return <PageStyled>{children}</PageStyled>;
};

export default Page;
