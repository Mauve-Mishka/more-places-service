import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import CarouselSection from './CarouselSection';
import axios from 'axios';
import { colors, query } from '../utils';

const MorePlacesSectionContainer = styled.section`
  background-color: ${colors.culturedgray};
  font-family: "Roboto";
  margin: 0;
  padding: 32px 24px;
  width: auto;
  @media (min-width: ${query.medium}) {
    padding: 48px 40px;
  }
  @media (min-width: ${query.large}) {
    padding: 48px 80px;
  }
`;

const SectionInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1128px;
  width: 100%;
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
  const [ perPage, setPerPage ] = useState(window.innerWidth >= 1128 ? 4 : 3);

  useEffect(() => {
    const fetchInitialState = async () => {
      const { data } = await axios.get('/places/test');
      setPlaces(data);
    };
    fetchInitialState();
  }, []);

  useEffect(() => {
    const updatePagination = () => {
      if (window.innerWidth >= 1128 && perPage !== 4) {
        setPerPage(4);
      } else if (window.innerWidth < 1128 && perPage !== 3) {
        setPerPage(3);
      }
    };
    window.addEventListener('resize', updatePagination);
    return () => window.removeEventListener('resize', updatePagination);
  }, [perPage]);

  const updatePage = (direction) => {
    if (direction > 0) {
      page === (places.length / perPage) ? setPage(1) : setPage(page + 1);
    } else {
      page === 1 ? setPage(places.length / perPage) : setPage(page - 1);
    }
  };

  return (
    <MorePlacesSectionContainer>
      <SectionInnerContainer>
        <SectionHeader
          page={page}
          pages={places.length / perPage}
          updatePage={updatePage}
        />
        <CarouselSection
          page={page}
          perPage={perPage}
          places={places}
        />
      </SectionInnerContainer>
    </MorePlacesSectionContainer>
  );
};

export default MorePlacesSection;