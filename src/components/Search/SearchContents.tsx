import { styled } from 'styled-components';
import { useState } from 'react';
import IngridientsModal from '../modal/IngredintsModal';
import { useNavigate } from 'react-router-dom';
import DescisionButton from '../Button/DescisionButton';

export default function SearchContents() {
  const [targetModalOpen, setTargetModalOpen] = useState<number>();
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        {/* {recipes?.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onClick={() => setTargetModalOpen(recipe.id)}
          />
        ))} */}
      </Wrapper>
      {!!targetModalOpen && (
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
              onClick={() => navigate(`/detail/${targetModalOpen}`)}
            />,
          ]}
        />
      )}
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const NotContentsBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 100px;
//   h3 {
//     margin-top: 20px;
//     font-size: 16px;
//     color: #95989f;
//   }
// `;

// const NoteWrapper = styled.div`
//   margin-top: 28px;
// `;
