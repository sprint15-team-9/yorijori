import { Dispatch, SetStateAction } from 'react';
import ClockIcon from '../../assets/icons/ClockIcon';
import { OnlyRecipeList } from '../../types/types';
import SlickSlider from './SlickSlider';
import { styled } from 'styled-components';
import { formatTime } from '../../utils/formatTime';

type Props = {
  data: OnlyRecipeList[];
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export default function CarouselContents({ data, setActiveIndex }: Props) {
  return (
    <SlickSlider setActiveIndex={setActiveIndex}>
      {data.map((item) => (
        <ImageContainer key={item.id}>
          <Image src={item.youtube_video_thumbnail} />
          <CaptionBox>
            <p>
              난이도 {item.level}
              <Divider>|</Divider>
              <ClockIcon />
              {formatTime(item.cooking_time)}
            </p>
          </CaptionBox>
        </ImageContainer>
      ))}
    </SlickSlider>
  );
}

const ImageContainer = styled.div`
  height: 190px;
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
