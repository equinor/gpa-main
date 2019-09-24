import styled from 'styled-components/macro';
import {Color} from '../../common/Color';

const S_Input = styled.input`
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

export const S_Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${Color.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px 6px 10px;
`;

export const TextInput = styled(S_Input).attrs({
  type: 'text',
})`
    max-width: 300px;
`;

export const NumberInput = styled(S_Input).attrs({
  type: 'number',
})`
  max-width: 125px;
  min-width: 125px;
`;