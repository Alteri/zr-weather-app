import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddNewCityButton } from './styled';
import { FormWrapper } from './styled';
import { Search } from '../Search';

const AddNewCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isError = useSelector((state: { errorCompare: string }) => state.errorCompare);

  return (
    <>
      <AddNewCityButton onClick={() => setIsOpen(!isOpen)}>
        Dodaj nowe miasto do porównania
      </AddNewCityButton>
      {isOpen && (
        <FormWrapper>
          <Search isError={!!isError} isCompareForm />
        </FormWrapper>
      )}
    </>
  );
};

export default AddNewCity;
