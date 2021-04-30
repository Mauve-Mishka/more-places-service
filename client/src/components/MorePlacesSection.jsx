import React, { useState, useEffect } from 'react';
const { styled } = window;
import SectionHeader from './SectionHeader';
import CarouselSection from './CarouselSection';
import SaveModal from './SaveModal';
import axios from 'axios';
import { colors, query } from '../utils';

const MorePlacesSectionContainer = styled.section`
  background-color: rgb(247, 247, 247);
  font-family: "Roboto";
  margin: 0;
  padding: 32px 24px;
  width: 100%;
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
      id: 1,
      thumbnailUrl: 'https://placekitten.com/330/220',
      isSuperhost: false,
      isSaved: false,
      houseType: '',
      beds: null,
      stayName: '',
      price: null
    },
    {
      id: 1,
      thumbnailUrl: 'https://placekitten.com/330/220',
      isSuperhost: false,
      isSaved: false,
      houseType: '',
      beds: null,
      stayName: '',
      price: null
    },
    {
      id: 1,
      thumbnailUrl: 'https://placekitten.com/330/220',
      isSuperhost: false,
      isSaved: false,
      houseType: '',
      beds: null,
      stayName: '',
      price: null
    },
    {
      id: 1,
      thumbnailUrl: 'https://placekitten.com/330/220',
      isSuperhost: false,
      isSaved: false,
      houseType: '',
      beds: null,
      stayName: '',
      price: null
    },
  ];

  const [ places, setPlaces ] = useState(defaultState);
  const [ page, setPage ] = useState(1);
  const [ perPage, setPerPage ] = useState(window.innerWidth >= 1128 ? 4 : 3);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ activeItem, setActiveItem ] = useState(0);

  useEffect(async () => {
    const { data } = await axios.get(`/places/${window.location.pathname.split('/')[2]}`);
    if (data) {
      setPlaces(data);
    }
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updatePage = (direction) => {
    if (direction > 0) {
      page === (places.length / perPage) ? setPage(1) : setPage(page + 1);
    } else {
      page === 1 ? setPage(places.length / perPage) : setPage(page - 1);
    }
  };

  const updateSaved = (index) => {
    let placesCopy = [ ...places ];
    placesCopy[index].isSaved = !placesCopy[index].isSaved;
    setPlaces(placesCopy);
  };

  return (
    <>
      { places[0].price !== null &&
        <MorePlacesSectionContainer>
          <SectionInnerContainer>
            <SectionHeader
              page={page}
              pages={places.length > 1 ? places.length / perPage : 12 }
              updatePage={updatePage}
            />
            <CarouselSection
              page={page}
              perPage={perPage}
              places={places}
              setActive={setActiveItem}
              toggleModal={toggleModal}
            />
          </SectionInnerContainer>
          <SaveModal
            active={activeItem}
            isOpen={isModalOpen}
            isSaved={places[activeItem].isSaved}
            toggleModal={toggleModal}
            updateSaved={updateSaved}
          />
        </MorePlacesSectionContainer>
      }
    </>
  );
};

export default MorePlacesSection;