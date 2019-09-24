import styled from 'styled-components/macro';
import {Color} from '../../common/Color';

const Input = styled.input`
  padding: 5px 10px;
  background-color: ${Color.LIGHT_GRAY};
  color: ${Color.GRAY};
  border: none;
  border-bottom: 1px solid ${Color.GRAY};
  font-size: 16px;
  font-family: Equinor,serif;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const TextInput = styled(Input).attrs({
  type: 'text',
})`
    max-width: 300px;
`;

export const NumberInput = styled(Input).attrs({
  type: 'number',
})`
  max-width: 100px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${Color.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px;
`;