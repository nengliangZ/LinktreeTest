import styled from 'styled-components';
import COLOR from './color';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Pragraph1 = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: ${COLOR.BLACK};
  margin: 0px;
  text-align: center;
`;

export const Logo = styled.img`
  margin-top: 20px;
`;
