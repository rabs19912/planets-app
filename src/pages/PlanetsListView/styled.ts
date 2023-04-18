import styled from "styled-components";
import { device } from "../../styled/device";

export const SelectsContainers = styled.div`
  padding: 0 30px;
  margin-bottom: 20px;

  @media (min-width: ${device.tablet}) {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: flex-end;
    & .filter-select,
    & .sort-select {
      width: 300px;
    }
    & .filter-select {
      margin-left: 20px;
    }
  }
`;

export const PlanetsContainer = styled.div`
  padding: 0 30px;

  @media (min-width: ${device.tablet}) {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
  }
`;

export const NoResultsText = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  padding: 0 30px;
`;
