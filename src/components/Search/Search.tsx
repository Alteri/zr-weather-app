import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCity, addNewCityToCompare } from '../../store/fetch';
import { slugify, normalizeText } from '../../utils/slugify';
import { Input, InputWrapper, Button, Alert } from './styled';

type SearchProps = {
  isError?: boolean;
  isCompareForm?: boolean;
};

const Search = ({ isError, isCompareForm }: SearchProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isCompareForm) {
      dispatch(addNewCityToCompare(normalizeText(cityName)));
    } else {
      dispatch(fetchCity(normalizeText(cityName)));
      navigate(`/${slugify(cityName)}`, { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          placeholder="Wpisz miasto"
          type="text"
          autoFocus={!isCompareForm}
          value={cityName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCityName(e.target.value)}
        />
        <Button type="submit">{isCompareForm ? 'Dodaj' : 'Szukaj'}</Button>
      </InputWrapper>
      {isError && <Alert>Nie znaleziono pasującej lokalizacji.</Alert>}
    </form>
  );
};

export default Search;
