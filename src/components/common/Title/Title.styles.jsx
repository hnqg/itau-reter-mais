import styled, { css } from 'styled-components';

const sizeModifiers = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
};

const marginModifiers = {
  small: () => css`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  `,
  medium: () => css`
    margin-top: 0.8rem;
    margin-bottom: 3rem;
  `,
  large: () => css`
    margin-top: 1rem;
    margin-bottom: 5rem;
  `,
};

export const Heading = styled.h1`
  ${({ theme, size, weight, align }) => css`
    ${size && sizeModifiers[size](theme)}

    font-weight: ${theme.font.weights[weight]};
    text-align: ${align || 'left'};

    margin-top: 1rem;
    margin-bottom: 3rem;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme, size, weight, align }) => css`
    ${size && sizeModifiers[size](theme)}

    font-weight: ${theme.font.weights[weight]};
    text-align: ${align || 'left'};

    margin-top: 0.5rem;
    margin-bottom: 1rem;

    ${size && marginModifiers[size](theme)}
  `}
`;