import styled from 'styled-components';
import TimeIcon from '../../../../assets/icons/TimeIcon';
import { formatTime } from '../../../../utils/formatTime';
import type { OnlyRecipeList } from '../../../../types/types';

type RecipeItemProps = {
  recipe: OnlyRecipeList;
};

const getColor = (level: string) => {
  if (level === '상')
    return {
      background: '#FFDBDB',
      color: '#EB4E4E',
    };
  if (level === '중')
    return {
      background: '#FDEBDC',
      color: '#ED7732',
    };
  if (level === '하')
    return {
      background: '#DFFBDA',
      color: '#4DB13D',
    };

  return {
    background: '#fff',
    color: '#000',
  };
};

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  return (
    <Note key={recipe.id}>
      <NoteImg src={recipe.youtube_video_thumbnail ?? undefined} />
      <Content>
        {recipe.level && (
          <Difficulty color={getColor(recipe.level)}>
            난이도 {recipe.level}
          </Difficulty>
        )}
        <Title>{recipe.recipe_name}</Title>
        <Time>
          <TimeIcon />
          {formatTime(recipe.cooking_time)}
        </Time>
      </Content>
    </Note>
  );
};

export default RecipeItem;

const Note = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  gap: 16px;

  & + & {
    margin-top: 24px;
  }
`;

const NoteImg = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 12px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const Title = styled.p`
  color: #4e535f;
  font-size: 16px;
  font-weight: 500;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const Difficulty = styled.span<{
  color: { background: string; color: string };
}>`
  display: block;
  padding: 4px 8px;
  border-radius: 12px;

  background: ${({ color }) => color.background};
  color: ${({ color }) => color.color};
  font-size: 12px;
  font-weight: 600;
`;

const Time = styled.p`
  display: flex;
  color: #383f4c;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.6000000238418579;

  svg {
    margin-right: 4px;
  }
`;
