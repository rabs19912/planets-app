import styled from "styled-components";

export const PlanetBox = styled.div`
  background: #ffffff;
  border-radius: 25px;
  margin-bottom: 25px;
  padding: 60px 40px 50px;
`;

export const PlanetName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 25px;
  letter-spacing: -0.015em;

  color: #1c0674;
`;
export const PlanetItem = styled.div`
  margin-bottom: 10px;
  & span {
    font-weight: bold;
  }
`;