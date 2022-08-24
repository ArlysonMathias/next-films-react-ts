import styled from "styled-components";

export const SliderContainer = styled.div`
  display: inline-block;
  flex-wrap: wrap;
  max-width: 100vw;
  max-height: 100vh;
  margin: 1.875rem auto;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

    .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }
  .swiper-pagination-bullet-active {
    background-color: #718096;
  }

  .swiper-button-prev {
    color: #718096;
  }

  .swiper-button-next {
    color: #718096;
  }
  
`;
