import React from 'react';
import { useSelector } from 'react-redux';
import { AddNewCityButton } from './styled';
import { FormWrapper } from './styled';
import { Search } from '../Search';

const AddNewCity = () => {
  const isError = useSelector((state: { errorCompare: string }) => state.errorCompare);

  return (
    <>
      <AddNewCityButton>Dodaj nowe miasto do porównania</AddNewCityButton>
      <FormWrapper>
        <Search isError={!!isError} isCompareForm />
      </FormWrapper>
    </>
  );
};

export default AddNewCity;
