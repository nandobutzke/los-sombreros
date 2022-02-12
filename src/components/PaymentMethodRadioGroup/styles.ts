import styled from 'styled-components';
import { styled as styledStitches } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export const StyledRadio = styledStitches(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;

export const Flex = styledStitches('div', { display: 'flex' });

export const Label = styledStitches('label', {
  display: 'flex',
  alignItens: 'center',
  justifyContent: 'center',
  gap: 15,
  color: 'var(--color-default)',
  fontSize: 20,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15,
});

export const PaymentFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PaymentMethodRadioGroupContainer = styled.div`
  width: 100%;
  margin: auto 4.5rem;

  .total-footer-details {
    display: block;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
        color: black;
    }
  }

`;

