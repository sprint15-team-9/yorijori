import { styled } from 'styled-components';
import Carousel from './Carousel';

const CurationMock = [
  {
    text: '맛있어 보이는 샐러드',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgzJTkwJUVCJTlGJUFDJUVCJTkzJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    level: '상',
    time: '30분',
  },
  {
    text: '조금 더 맛있어 보이는 샐러드 2',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTgzJTkwJUVCJTlGJUFDJUVCJTkzJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    level: '중',
    time: '20분',
  },
  {
    text: '조금 덜 맛있어 보이는 샐러드fawefaweawefwefafweafewawfaewfaewfaefaweawefafwefawe',
    image:
      'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTgzJTkwJUVCJTlGJUFDJUVCJTkzJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    level: '하',
    time: '10분',
  },
];

export default function Curation() {
  return (
    <Styled.Wrapper>
      <Styled.heading>오늘, 이 요리 어때요?</Styled.heading>
      <Carousel data={CurationMock} />
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.article`
    width: 100%;
    padding: 20px;
  `,

  heading: styled.h2`
    color: gray;
    margin-bottom: 10px;
  `,
};
