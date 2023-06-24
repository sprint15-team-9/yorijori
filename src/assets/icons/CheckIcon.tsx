const BUTTON_CONFIRM_BACKGROUND = '#4066E6';
const BUTTON_CLOSE_BACKGROUND = '#7F8A94';

type IconProps = {
  isActive: boolean;
};
const CheckIcon = ({ isActive }: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_11_342)">
      <path
        d="M9.00016 16.1701L4.83016 12.0001L3.41016 13.4101L9.00016 19.0001L21.0002 7.00009L19.5902 5.59009L9.00016 16.1701Z"
        fill={isActive ? BUTTON_CONFIRM_BACKGROUND : BUTTON_CLOSE_BACKGROUND}
      />
    </g>
    <defs>
      <clipPath id="clip0_11_342">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CheckIcon;
