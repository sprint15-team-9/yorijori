import { Helmet } from 'react-helmet';

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
        content="https://sprint-9.s3.ap-northeast-2.amazonaws.com/assets/ogImage.png"
      />
      <meta property="og:image:type" content="image/png" />
    </Helmet>
  );
};

export default MetaTag;
