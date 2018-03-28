import styled from 'styled-components';

const lastBreakPoint = '820px';

export const Container = styled.div`
  padding: 50px 0;
  @media (max-width: ${lastBreakPoint}) {
    padding-top: 20px;
    padding-bottom: 0px;
  }
`;
