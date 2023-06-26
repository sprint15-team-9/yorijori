import { Helmet } from 'react-helmet';
import ogImage from '../../assets/img/ogImage.png';

const MetaTag = () => {
  return (
    <Helmet>
      <title>요리조리</title>

      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="요리 초보자부터 고수까지 모두 사용할 수 있는 만능 레시피 서비스"
      />
      <meta property="og:title" content="요리조리" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="요리 초보자부터 고수까지 모두 사용할 수 있는 만능 레시피 서비스"
      />
      <meta
        property="og:image"
        content="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb57a9a05-3626-4e0f-8d94-77b423935f0f%2FopenGraph_image.png?id=a4fbd365-38ff-4fa6-8db3-b2014e0c5074&table=block&spaceId=718f5d07-6f0d-4fbc-97cc-2105e2330c5f&width=2000&userId=7c7aa3ff-8965-4bc4-a53b-0752665f013d&cache=v2"
      />
      <meta property="og:image:type" content="image/png" />
    </Helmet>
  );
};

export default MetaTag;
