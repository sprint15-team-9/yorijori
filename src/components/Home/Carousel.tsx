import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CarouselContents from './CarouselContents';
import NextIcon from '../../assets/icons/NextIcon';
import { OnlyRecipeList } from '../../types/types';
type Props = {
  onlyRecipes: OnlyRecipeList[];
};
const Carousel = ({ onlyRecipes }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <Wrapper>
        <h2 className="curation">{onlyRecipes[activeIndex].curation}</h2>
        <Link to={`/detail/${onlyRecipes[activeIndex].id}`}>
          <TextBox>
            <CurationText>{onlyRecipes[activeIndex].recipe_name}</CurationText>
            <NextIcon />
          </TextBox>
          <CarouselContents
            data={onlyRecipes}
            setActiveIndex={setActiveIndex}
          />
        </Link>
      </Wrapper>
    </>
  );
};

export default Carousel;

const Wrapper = styled.div`
  padding: 15px;
  position: relative;
  width: 100%;
  .curation {
    color: #4e535f;
    margin-bottom: 10px;
  }
  .slick-slider .slick-dots li {
    width: 6px;
    height: 6px;
    background: #d9d9d9;
    margin: 0 5px;
    border-radius: 50%;
    cursor: auto;
    button {
      display: none;
    }
  }

  .slick-slider .slick-dots li.slick-active {
    background: #ed7732;
    width: 19px;
    border-radius: 5px;
    cursor: auto;
    button {
      display: none;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const CurationText = styled.p`
  font-size: 20px;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
