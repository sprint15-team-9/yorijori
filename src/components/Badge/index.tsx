import { styled } from 'styled-components';

type ColorType = 'red' | 'yellow' | 'green';
type BadgeProps = {
  color: ColorType;
  text: string;
};

const colorMap = {
  red: {
    background: '#FFDBDB',
    color: '#EB4E4E',
  },
  yellow: {
    background: '#FDEBDC',
    color: '#ED7732',
  },
  green: {
    background: '#DFFBDA',
    color: '#4DB13D',
  },
};

export default function Badge({ color, text }: BadgeProps) {
  return (
    <Wrapper color={color}>
      <InnerText color={color}>{text}</InnerText>
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<BadgeProps, 'color'>>`
  display: flex;
  justify-content: center;
  background-color: ${({ color }) => colorMap[color].background};
  border-radius: 10px;
  padding: 4px 8px;
  width: fit-content;
`;

const InnerText = styled.p<Pick<BadgeProps, 'color'>>`
  color: ${({ color }) => colorMap[color].color};
`;
