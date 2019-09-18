import styled from 'styled-components';

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding: 5px 10px;
  background-color: #F7F7F7;
  color: #6F6F6F;
  border: none;
  border-bottom: 1px solid #6F6F6F;
  font-size: 16px;
  font-family: Equinor,serif;
  line-height: 24px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #6F6F6F;
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px;
`;