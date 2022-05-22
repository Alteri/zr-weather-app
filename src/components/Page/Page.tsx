import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PageStyled } from "./styled";
import { fetchStaticCities } from "../../store/fetch";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaticCities());
  }, [dispatch]);

  return <PageStyled>{children}</PageStyled>;
};

export default Page;
