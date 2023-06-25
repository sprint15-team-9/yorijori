import ClockIcon from '../../assets/icons/ClockIcon';
import SlickSlider from './SlickSlider';
import { styled } from 'styled-components';

type Props = {
  data: {
    text: string;
    image: string;
    level: string;
    time: string;
  }[];
  setActiveIndex: (index: number) => void;
};

export default function CarouselContents({ data, setActiveIndex }: Props) {
  return (
    <SlickSlider setActiveIndex={setActiveIndex}>
      {data.map((item, index) => (
        <ImageContainer key={index}>
          <Image src={item.image} />
          <CaptionBox>
            <p>
              난이도 {item.level}
              <Divider>|</Divider>
              <ClockIcon />
              {item.time}
            </p>
          </CaptionBox>
        </ImageContainer>
      ))}
    </SlickSlider>
  );
}

const ImageContainer = styled.div`
  height: 160px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const CaptionBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  right: 10px;
  width: 114px;
  height: 28px;
  background-color: black;
  border-radius: 8px;
  opacity: 60%;
  padding: 5px;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 12px;
  }

  svg {
    margin-right: 5px;
  }
`;

const Divider = styled.span`
  margin: 0 5px;
`;
