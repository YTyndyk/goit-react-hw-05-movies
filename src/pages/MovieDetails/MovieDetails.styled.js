import styled from 'styled-components';
export const Container = styled.div`
  min-height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.backdrop_path});
`;
