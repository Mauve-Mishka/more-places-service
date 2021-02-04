import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import axios from 'axios';
import { colors, query } from '../utils';

const MorePlacesSectionContainer = styled.section`
  background-color: ${colors.culturedgray};
  padding: 32px 0;
  @media (min-width: ${query.medium}) {
    padding: 48px 0;
  }
`;

const MorePlacesSection = () => {

  const defaultState = [
    {
      thumbnailUrl: 'https://placekitten.com/336/324',
      isSuperhost: false,
      isSaved: false,
      houseType: '',
      beds: null,
      stayName: '',
      price: null
    }
  ];

  const [ places, setPlaces ] = useState(defaultState);
  const [ page, setPage ] = useState(1);
  const [ perPage, setPerPage ] = useState(4); // needs to update based on page width

  useEffect(() => {
    const fetchInitialState = async () => {
      const { data } = await axios.get('/places');
      setPlaces(data);
    };
    fetchInitialState();
  }, []);

  const updatePage = (direction) => {
    if (direction > 0) {
      page === (places.length / perPage) ? setPage(1) : setPage(page + 1);
    } else {
      page === 1 ? setPage(places.length / perPage) : setPage(page - 1);
    }
  };

  return (
    <MorePlacesSectionContainer>
      <SectionHeader page={page} pages={places.length / perPage} updatePage={updatePage} />
    </MorePlacesSectionContainer>
  );
};

export default MorePlacesSection;