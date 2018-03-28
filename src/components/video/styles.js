import styled from 'styled-components';
import colors from '../../utils/colors';

const firstBreakPoint = '800px';
const secondBreakPoint = '470px';

export const Container = styled.div`
  padding: 60px 0;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.BUTTON_FONT_COLOR};
  background-blend-mode: overlay;
  display: flex;
  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    padding: 30px 0;
  }
`;

export const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  padding-left: 60px;
  @media (max-width: ${firstBreakPoint}) {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

export const DescriptionText = styled.div`
  max-width: 500px;
  font-size: 22px;
  white-space: pre-line;
  font-family: 'Open Sans';
  text-align: center;
  font-weight: bold;
  color: ${colors.WHITE};
`;

export const DecorationImage = styled.img`
  margin-top: 48px;
  @media (max-width: ${firstBreakPoint}) {
    display: none;
  }
`;

export const VideoElement = styled.video`
  width: 438px;
  @media (max-width: ${secondBreakPoint}) {
    width: 340px;
  }
`;
