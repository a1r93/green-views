import { IBreakpoints } from '../types';

const breakpoints: IBreakpoints = {
    forPhoneOnly: '@media (max-width: 599px)',
    forTabletPortraitUp: '@media (min-width: 600px)',
    forTabletLandscapeUp: '@media (min-width: 900px)',
    forDesktopUp: '@media (min-width: 1200px)',
    forBigDesktopUp: '@media (min-width: 1200px)',
};

export default breakpoints;
