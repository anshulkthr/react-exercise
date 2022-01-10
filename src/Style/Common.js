import styled from "styled-components";

export const Grid = styled.div`
  margin-bottom: 30px;
`;

export const ListConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.div`
  flex: 1 1 220px;
`;

export const Img = styled.img`
  max-width: 100%;
  width: 250px;
  height: 200px;
`;

export const ItemTitle = styled.h5``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.direction};
  padding: 5px;
`;

export const Col = styled.div`
  width: 30%;
  margin-right: 28px;
`;

export const SiteWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;