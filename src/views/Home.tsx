import React from "react";
import { Search } from "../components/Search";

type HomeProps = {
  isError: boolean;
};

const Home = ({ isError }: HomeProps) => {
  return <Search isError={isError} />;
};

export default Home;
