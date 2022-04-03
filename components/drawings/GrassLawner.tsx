import { useTheme } from 'styled-components';

import { TPaletteColors } from '../../styles/types';

interface IGrassLawnerProps {
    className?: string;
    color?: TPaletteColors;
}

const GrassLawner = ({ className, color }: IGrassLawnerProps) => {
    const theme = useTheme();
    const finalColor = color ? theme.palette[color][500] : 'white';

    return (
        <svg
            width="142"
            height="94"
            viewBox="0 0 142 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <line x1="0.5" y1="88" x2="0.5" y2="94" stroke={finalColor} />
            <line x1="0.5" y1="88" x2="0.5" y2="94" stroke={finalColor} />
            <line x1="3.5" y1="88" x2="3.5" y2="94" stroke={finalColor} />
            <line x1="3.5" y1="88" x2="3.5" y2="94" stroke={finalColor} />
            <line x1="7.5" y1="88" x2="7.5" y2="94" stroke={finalColor} />
            <line x1="7.5" y1="88" x2="7.5" y2="94" stroke={finalColor} />
            <line x1="10.5" y1="88" x2="10.5" y2="94" stroke={finalColor} />
            <line x1="10.5" y1="88" x2="10.5" y2="94" stroke={finalColor} />
            <line x1="14.5" y1="88" x2="14.5" y2="94" stroke={finalColor} />
            <line x1="14.5" y1="88" x2="14.5" y2="94" stroke={finalColor} />
            <line x1="17.5" y1="88" x2="17.5" y2="94" stroke={finalColor} />
            <line x1="17.5" y1="88" x2="17.5" y2="94" stroke={finalColor} />
            <line x1="21.5" y1="88" x2="21.5" y2="94" stroke={finalColor} />
            <line x1="21.5" y1="88" x2="21.5" y2="94" stroke={finalColor} />
            <line x1="24.5" y1="88" x2="24.5" y2="94" stroke={finalColor} />
            <line x1="24.5" y1="88" x2="24.5" y2="94" stroke={finalColor} />
            <line x1="28.5" y1="88" x2="28.5" y2="94" stroke={finalColor} />
            <line x1="28.5" y1="88" x2="28.5" y2="94" stroke={finalColor} />
            <line x1="31.5" y1="88" x2="31.5" y2="94" stroke={finalColor} />
            <line x1="31.5" y1="88" x2="31.5" y2="94" stroke={finalColor} />
            <line x1="35.5" y1="88" x2="35.5" y2="94" stroke={finalColor} />
            <line x1="35.5" y1="88" x2="35.5" y2="94" stroke={finalColor} />
            <line x1="39.5" y1="88" x2="39.5" y2="94" stroke={finalColor} />
            <line x1="39.5" y1="88" x2="39.5" y2="94" stroke={finalColor} />
            <line x1="42.5" y1="88" x2="42.5" y2="94" stroke={finalColor} />
            <line x1="42.5" y1="88" x2="42.5" y2="94" stroke={finalColor} />
            <line x1="46.5" y1="88" x2="46.5" y2="94" stroke={finalColor} />
            <line x1="46.5" y1="88" x2="46.5" y2="94" stroke={finalColor} />
            <line x1="49.5" y1="88" x2="49.5" y2="94" stroke={finalColor} />
            <line x1="49.5" y1="88" x2="49.5" y2="94" stroke={finalColor} />
            <line x1="53.5" y1="88" x2="53.5" y2="94" stroke={finalColor} />
            <line x1="53.5" y1="88" x2="53.5" y2="94" stroke={finalColor} />
            <line x1="56.5" y1="88" x2="56.5" y2="94" stroke={finalColor} />
            <line x1="56.5" y1="88" x2="56.5" y2="94" stroke={finalColor} />
            <line x1="60.5" y1="88" x2="60.5" y2="94" stroke={finalColor} />
            <line x1="60.5" y1="88" x2="60.5" y2="94" stroke={finalColor} />
            <line x1="63.5" y1="88" x2="63.5" y2="94" stroke={finalColor} />
            <line x1="63.5" y1="88" x2="63.5" y2="94" stroke={finalColor} />
            <line x1="67.5" y1="88" x2="67.5" y2="94" stroke={finalColor} />
            <line x1="67.5" y1="88" x2="67.5" y2="94" stroke={finalColor} />
            <line x1="70.5" y1="88" x2="70.5" y2="94" stroke={finalColor} />
            <line x1="70.5" y1="88" x2="70.5" y2="94" stroke={finalColor} />
            <line x1="74.5" y1="88" x2="74.5" y2="94" stroke={finalColor} />
            <line x1="74.5" y1="88" x2="74.5" y2="94" stroke={finalColor} />
            <line x1="77.5" y1="88" x2="77.5" y2="94" stroke={finalColor} />
            <line x1="77.5" y1="88" x2="77.5" y2="94" stroke={finalColor} />
            <line x1="81.5" y1="88" x2="81.5" y2="94" stroke={finalColor} />
            <line x1="81.5" y1="88" x2="81.5" y2="94" stroke={finalColor} />
            <line x1="85.5" y1="88" x2="85.5" y2="94" stroke={finalColor} />
            <line x1="85.5" y1="88" x2="85.5" y2="94" stroke={finalColor} />
            <line x1="88.5" y1="88" x2="88.5" y2="94" stroke={finalColor} />
            <line x1="88.5" y1="88" x2="88.5" y2="94" stroke={finalColor} />
            <line x1="92.5" y1="88" x2="92.5" y2="94" stroke={finalColor} />
            <line x1="92.5" y1="88" x2="92.5" y2="94" stroke={finalColor} />
            <line x1="95.5" y1="88" x2="95.5" y2="94" stroke={finalColor} />
            <line x1="95.5" y1="88" x2="95.5" y2="94" stroke={finalColor} />
            <line x1="99.5" y1="88" x2="99.5" y2="94" stroke={finalColor} />
            <line x1="99.5" y1="88" x2="99.5" y2="94" stroke={finalColor} />
            <line x1="102.5" y1="88" x2="102.5" y2="94" stroke={finalColor} />
            <line x1="102.5" y1="88" x2="102.5" y2="94" stroke={finalColor} />
            <line x1="106.5" y1="88" x2="106.5" y2="94" stroke={finalColor} />
            <line x1="106.5" y1="88" x2="106.5" y2="94" stroke={finalColor} />
            <line x1="110.5" y1="88" x2="110.5" y2="94" stroke={finalColor} />
            <line x1="110.5" y1="88" x2="110.5" y2="94" stroke={finalColor} />
            <line x1="113.5" y1="83" x2="113.5" y2="94" stroke={finalColor} />
            <line x1="113.5" y1="83" x2="113.5" y2="94" stroke={finalColor} />
            <line x1="116.5" y1="83" x2="116.5" y2="94" stroke={finalColor} />
            <line x1="116.5" y1="83" x2="116.5" y2="94" stroke={finalColor} />
            <line x1="120.5" y1="83" x2="120.5" y2="94" stroke={finalColor} />
            <line x1="120.5" y1="83" x2="120.5" y2="94" stroke={finalColor} />
            <line x1="123.5" y1="83" x2="123.5" y2="94" stroke={finalColor} />
            <line x1="123.5" y1="83" x2="123.5" y2="94" stroke={finalColor} />
            <line x1="127.5" y1="83" x2="127.5" y2="94" stroke={finalColor} />
            <line x1="127.5" y1="83" x2="127.5" y2="94" stroke={finalColor} />
            <line x1="130.5" y1="83" x2="130.5" y2="94" stroke={finalColor} />
            <line x1="130.5" y1="83" x2="130.5" y2="94" stroke={finalColor} />
            <line x1="134.5" y1="83" x2="134.5" y2="94" stroke={finalColor} />
            <line x1="134.5" y1="83" x2="134.5" y2="94" stroke={finalColor} />
            <line x1="137.5" y1="83" x2="137.5" y2="94" stroke={finalColor} />
            <line x1="137.5" y1="83" x2="137.5" y2="94" stroke={finalColor} />
            <line x1="141.5" y1="83" x2="141.5" y2="94" stroke={finalColor} />
            <line x1="141.5" y1="83" x2="141.5" y2="94" stroke={finalColor} />
            <path
                d="M14.5 81.8559V46C14.5 43.7909 16.2909 42 18.5 42H28.2929C28.7456 42 29.1799 42.1799 29.5 42.5L39.2028 54.1434C39.4003 54.3803 39.5697 54.6393 39.7076 54.9152L40.0777 55.6554C40.3554 56.2108 40.5 56.8233 40.5 57.4443V58.7747C40.5 59.2543 40.4137 59.73 40.2453 60.1792L31.8042 82.6887C31.6037 83.2234 31.2911 83.7089 30.8873 84.1127L30.5607 84.4393C29.8815 85.1185 28.9604 85.5 28 85.5H27.9142C27.0087 85.5 26.1403 85.1403 25.5 84.5C24.8597 83.8597 24.5 82.9913 24.5 82.0858V80.7253C24.5 80.2457 24.5863 79.77 24.7547 79.3208L31.7453 60.6792C31.9137 60.23 32 59.7543 32 59.2747V58.9882C32 58.0282 31.6548 57.1002 31.0273 56.3737L22.7052 46.7376C22.5749 46.5867 22.3854 46.5 22.186 46.5C21.8071 46.5 21.5 46.8071 21.5 47.186V81.8559C21.5 82.2825 21.4312 82.7063 21.2963 83.1111L21.2435 83.2694C21.0834 83.7499 20.8136 84.1864 20.4555 84.5445C19.8437 85.1563 19.0139 85.5 18.1488 85.5H18.063C17.6901 85.5 17.3197 85.4399 16.9659 85.322L16.6708 85.2236C16.2297 85.0766 15.8288 84.8288 15.5 84.5C15.1712 84.1712 14.9234 83.7703 14.7764 83.3292L14.7037 83.1111C14.5688 82.7063 14.5 82.2825 14.5 81.8559Z"
                fill={finalColor}
                stroke={finalColor}
            />
            <path
                d="M30.5 12.5L28.9908 11.2926C28.373 10.7984 27.5468 10.6511 26.7963 10.9012C26.5996 10.9668 26.4126 11.0583 26.2401 11.1732L25.4992 11.6672C25.1697 11.8869 24.8869 12.1697 24.6672 12.4992L24.2039 13.1942C24.0685 13.3973 23.9584 13.6162 23.876 13.8459L15.9384 35.9876C15.2378 37.9419 16.6863 40 18.7624 40H28.8872C29.5018 40 30 39.5018 30 38.8872C30 38.1753 30.6592 37.6465 31.3542 37.8009L47.6932 41.4318C47.8971 41.4771 48.1054 41.5 48.3142 41.5H48.683C49.2061 41.5 49.7078 41.2922 50.0777 40.9223C50.3531 40.6469 50.5408 40.2962 50.6171 39.9144L50.6823 39.5883C50.76 39.2 50.76 38.8 50.6823 38.4117L50.5685 37.8423C50.5238 37.6191 50.4141 37.4141 50.2532 37.2532C50.0883 37.0883 49.8772 36.9773 49.6479 36.9348L37.4162 34.6697C36.8195 34.5592 36.2703 34.2703 35.8411 33.8411L35.1508 33.1508C35.0504 33.0504 34.9573 32.943 34.8721 32.8294L34.1 31.8C33.7105 31.2807 33.5 30.6491 33.5 30V28.5777C33.5 28.1961 33.5728 27.8179 33.7146 27.4636L36.3796 20.8011C36.4596 20.6009 36.5179 20.3928 36.5533 20.1801L36.9223 17.9661C36.9737 17.6575 36.9737 17.3425 36.9223 17.0339L36.7471 15.9829C36.6069 15.1413 35.8513 14.5432 35 14.6L34.1022 14.5401C33.7047 14.5136 33.3165 14.4082 32.9601 14.2301L32.5 14L31.9354 13.7177C31.647 13.5735 31.3838 13.3838 31.1558 13.1558L30.5 12.5Z"
                fill={finalColor}
                stroke={finalColor}
            />
            <circle cx="35" cy="6" r="6" fill={finalColor} />
            <path
                d="M69 65.5H74.5L76.5 65L84 71.5H85.5V69.5H87.5L91.5 71L92.5 69L93.5 67.5L94.5 68.5L93.5 69.5L93 71L96 71.5L100.5 72.5L105 77H102.5L99 79.5L99.5 84H84V81L82 77.5H77L74 81H67.5L66.5 79.5H58.5V61.5L69 65.5Z"
                fill={finalColor}
                stroke={finalColor}
            />
            <path
                d="M47.5 40.5L48.9911 38.4667L48.9286 41.75L48.8571 45.5L50.2143 46.5L52 46V43L53.5 42L55 42.5L55.5 44.5L52.5 48L76 65.5L50.2143 46.5L48.8571 45.5L47.5 44.5V40.5Z"
                fill={finalColor}
            />
            <path
                d="M53 33L47.5 40.5V44.5L48.8571 45.5M50.2143 46.5L76 65.5L52.5 48L55.5 44.5L55 42.5L53.5 42L52 43V46L50.2143 46.5ZM50.2143 46.5L48.8571 45.5M48.8571 45.5L48.9286 41.75M49 38L48.9286 41.75M48.9286 41.75L54.5 38"
                stroke={finalColor}
                stroke-width="2"
            />
            <path
                d="M84 81.5C84 83.9853 81.9853 86 79.5 86C77.0147 86 75 83.9853 75 81.5C75 79.0147 77.0147 77 79.5 77C81.9853 77 84 79.0147 84 81.5Z"
                fill={finalColor}
                stroke={finalColor}
                stroke-width="2"
            />
            <path
                d="M108 81.5C108 83.9853 105.985 86 103.5 86C101.015 86 99 83.9853 99 81.5C99 79.0147 101.015 77 103.5 77C105.985 77 108 79.0147 108 81.5Z"
                fill={finalColor}
                stroke={finalColor}
                stroke-width="2"
            />
        </svg>
    );
};

export default GrassLawner;
