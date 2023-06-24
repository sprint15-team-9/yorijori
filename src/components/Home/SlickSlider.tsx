import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  children: React.ReactNode;
  setActiveIndex: (index: number) => void;
};

export default function SlickSlider({ children, setActiveIndex }: Props) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setActiveIndex,
  };
  return <Slider {...settings}>{children}</Slider>;
}
