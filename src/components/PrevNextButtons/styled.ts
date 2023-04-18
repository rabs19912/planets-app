import styled from "styled-components";
import { device } from "../../styled/device";

type StyledButtonProps = {
  hide?: boolean;
};

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  padding-bottom: 20px;

  @media (min-width: ${device.tablet}) {
    max-width: 315px;
    margin: 0 auto;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: 20px;
  padding: 10px 20px;
  text-transform: capitalize;
  border-radius: 7px;
  background-color: #fff;
  color: #1c0674;
  border-color: #1c0674;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  width: 100px;

  opacity: ${(props) => (props.hide ? "1" : "0")};
`;
