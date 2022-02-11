import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

export const StyledRadio = styled(RadioGroupPrimitive.Item, {
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

export const Flex = styled('div', { display: 'flex' });

export const Label = styled('label', {
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