import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCity } from "../../store/fetch";
import { slugify, normalizeText } from "../../utils/slugify";
import { Form, InputGroup, Button, Alert } from "react-bootstrap";
import { errorSelector } from "../../store/selectors";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const errorInfo = useSelector(errorSelector);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(fetchCity(normalizeText(cityName)));
    errorInfo && navigate(`/${slugify(cityName)}`, { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          placeholder="Wpisz miasto"
          type="text"
          autoFocus
          value={cityName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCityName(e.target.value)
          }
        />
        <Button type="submit">Szukaj</Button>
      </InputGroup>
      {errorInfo && (
        <Alert className="mt-2" variant="danger">
          Nie znaleziono pasującej lokalizacji.
        </Alert>
      )}
    </Form>
  );
};

export default Search;
