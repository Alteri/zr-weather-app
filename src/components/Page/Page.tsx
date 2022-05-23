import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageStyled } from './styled';
import { addCompareCities } from '../../store/fetch';

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCompareCities());
  }, [dispatch]);

  return <PageStyled>{children}</PageStyled>;
};

export default Page;
