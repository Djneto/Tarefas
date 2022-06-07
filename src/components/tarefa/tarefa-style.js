import styled, { css } from 'styled-components';

export const Row = styled.div`
  width: 500px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  border-radius: 8px;
  border: 3px solid #000000;
  padding: 10px;
  font-size: 1.25em;

  ${(props) => {
    if (props.$mode === 'complete')
      return css`
        text-decoration: line-through;
        opacity: 0.2;
      `;
  }}
`;

export const Content = styled.div`
  cursor: pointer;
`;

export const Boxicons = styled.div`
  display: flex;
  align-items: center;
`;

export const EditButton = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
