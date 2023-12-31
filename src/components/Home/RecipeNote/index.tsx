import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useRecipe } from '../../../hooks/react-query/useRecipe';
import RecipeItem from './RecipeItem';
import IngridientsModal from '../../modal/IngredintsModal';
import { useNavigate } from 'react-router-dom';
import DescisionButton from '../../Button/DescisionButton';
import NoResultIcon from '../../../assets/icons/NoResultIcon';

const categoryList = [
  {
    index: 0,
    title: '전체',
  },
  {
    index: 1,
    title: '한식',
  },
  {
    index: 2,
    title: '중식',
  },
  {
    index: 3,
    title: '양식',
  },
  {
    index: 4,
    title: '패스트푸드',
  },
  {
    index: 5,
    title: '일식',
  },
  {
    index: 6,
    title: '분식',
  },
  {
    index: 7,
    title: '카페/디저트',
  },
];

const RecipeNote = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [targetModalOpen, setTargetModalOpen] = useState<number>();
  const [targetReceipeId, setTargetReceipeId] = useState<number>();

  const navigate = useNavigate();

  const categoryWrapper = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const { useGetOnlyRecipeList } = useRecipe();
  const { data: recipes } = useGetOnlyRecipeList();
  const startClientXPos = useRef(0);
  const endClientXPos = useRef(0);
  const filteredRecipes = recipes?.filter((recipe) => {
    return (
      selectedId === 0 || recipe.category === categoryList[selectedId].title
    );
  });
  const isNoRecipes = !filteredRecipes || filteredRecipes.length === 0;

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!categoryWrapper.current) return;

    startClientXPos.current = e.clientX;
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.clientX + categoryWrapper.current.scrollLeft);
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!categoryWrapper.current) return;

    endClientXPos.current = e.clientX;
    setIsDrag(false);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!categoryWrapper.current) return;

    categoryWrapper.current.scrollLeft = startX - e.clientX;
  };

  return (
    <>
      <RecipeWrapper>
        <Header>요리조리 레시피 노트</Header>
        <CategoryWrapper
          onMouseDown={handleDragStart}
          onMouseMove={isDrag ? handleDragMove : undefined}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          ref={categoryWrapper}
        >
          {categoryList.map((category) => (
            <Category
              key={category.index}
              $isSelected={selectedId === category.index}
              onClick={() => {
                if (startClientXPos.current === endClientXPos.current)
                  setSelectedId(category.index);
              }}
            >
              {category.title}
            </Category>
          ))}
        </CategoryWrapper>
        <NoteWrapper $isNoRecipes={isNoRecipes}>
          {isNoRecipes && (
            <NoRecipes>
              <NoResultIcon />
              <p>레시피가 없습니다.</p>
            </NoRecipes>
          )}
          {filteredRecipes?.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onClick={() => {
                setTargetReceipeId(recipe.id);
                recipe.ingredient_id &&
                  setTargetModalOpen(recipe.ingredient_id);
              }}
            />
          ))}
        </NoteWrapper>
      </RecipeWrapper>
      {!!targetModalOpen && targetReceipeId && (
        <IngridientsModal
          receipeId={targetModalOpen}
          onClose={() => setTargetModalOpen(undefined)}
          footerContents={[
            <DescisionButton
              buttontype="back"
              innerText="돌아가기!"
              onClick={() => setTargetModalOpen(undefined)}
            />,
            <DescisionButton
              buttontype="confirm"
              innerText="확인했어요!"
              onClick={() => navigate(`/detail/${targetReceipeId}`)}
            />,
          ]}
        />
      )}
    </>
  );
};

export default RecipeNote;

const RecipeWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;
  flex: 1 0;
`;

const Header = styled.h1`
  margin: 24px 20px 0 20px;
  font-size: 16px;
  font-weight: 700;
`;

const CategoryWrapper = styled.div`
  display: flex;
  margin: 16px 20px 0 20px;
  gap: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Category = styled.button<{ $isSelected: boolean }>`
  padding: 8px 12px;
  border: none;
  background-color: ${({ theme }) => theme.color.gray_1};
  border-radius: 16px;
  cursor: pointer;
  flex-shrink: 0;

  font-family: 'Pretendard-Regular';

  ${({ theme, $isSelected }) =>
    $isSelected &&
    css`
      background-color: ${theme.color.primary_1};
      color: #ffffff;
    `}
`;

const NoteWrapper = styled.div<{ $isNoRecipes: boolean }>`
  margin-top: 28px;

  ${({ $isNoRecipes }) =>
    $isNoRecipes &&
    css`
      display: flex;
      flex: 1 0 0;
      margin-top: 0;
      justify-content: center;
      align-items: center;
    `}
`;

const NoRecipes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 16px;
    color: ${({ theme }) => theme.color.gray_4};
  }
`;
