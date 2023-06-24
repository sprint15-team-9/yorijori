const BUTTON_CONFIRM_BACKGROUND = '#ED7732';
const BUTTON_CLOSE_BACKGROUND = '#B1B8C0';

type IconProps = {
  isActive: boolean;
};
const CheckIcon = ({ isActive }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_2105)">
      <path
        d="M4.5 9L8.5 13L15.5 6"
        stroke={isActive ? BUTTON_CONFIRM_BACKGROUND : BUTTON_CLOSE_BACKGROUND}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2105">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CheckIcon;
