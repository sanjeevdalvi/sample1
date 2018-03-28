import styled from 'styled-components';
import Text from '../../utils/text';

export const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Message = Text.extend`
  display: block;
  text-align: center;
  font-size: 18px;
  margin: 30px auto 50px;
`;
export const Spinner = styled.div`
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #13a89e; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
