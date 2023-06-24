import Carousel from './Carousel';

const images = [
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgzJTkwJUVCJTlGJUFDJUVCJTkzJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJTgzJTkwJUVCJTlGJUFDJUVCJTkzJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTgzJTkwJUVCJTlGJUFDJUVCJTkzJTlDfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
];

export default function Curation() {
  return (
    <article>
      <h2>오늘, 이 요리 어때요?</h2>
      <p>노릇노른 쫀득한 감자전</p>
      <Carousel images={images} />
    </article>
  );
}
