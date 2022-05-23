import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCityToCompare } from '../../store/fetch';
import { AddNewCityButton } from './styled';
import { Form, InputGroup, Button, Alert, Offcanvas } from 'react-bootstrap';
import { normalizeText } from '../../utils/slugify';

const AddNewCity = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [show, setShow] = useState(false);
  const isError = useSelector((state: { errorCompare: string }) => state.errorCompare);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addNewCityToCompare(normalizeText(cityName)));
    setShow(false);
  };

  return (
    <>
      <AddNewCityButton onClick={() => setShow(true)}>
        Dodaj nowe miasto do porównania
      </AddNewCityButton>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="bottom" name="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Porównaj miasto</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                placeholder="Wpisz miasto"
                type="text"
                autoFocus
                value={cityName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCityName(e.target.value)}
              />
              <Button type="submit">Szukaj</Button>
            </InputGroup>
            {isError && (
              <Alert className="mt-2" variant="danger">
                Nie znaleziono pasującej lokalizacji.
              </Alert>
            )}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddNewCity;
