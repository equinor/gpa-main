import styled from 'styled-components';
import {Color} from '../../common/Color';

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  padding: 5px 10px;
  background-color: ${Color.LIGHT_GRAY};
  color: ${Color.GRAY};
  border: none;
  border-bottom: 1px solid ${Color.GRAY};
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
  color: ${Color.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px;
`;