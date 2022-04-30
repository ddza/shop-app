import styled from 'styled-components';
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  // height: 340px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #e5e7eb;
  background-color: white;
  top: 90px;
  right: 0;
  z-index: 5;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */

  &&::-webkit-scrollbar { /* WebKit */
  width: 0;
  height: 0;
`;
export const LinkToShop = styled(Link)`
  text-align: center;
  margin: auto auto 0;
  max-width: 170px;
   width: 100%;
`;
