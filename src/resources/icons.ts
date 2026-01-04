import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineLanguage,
  HiOutlineUser,
  HiOutlineArrowDown,
  HiOutlinePaintBrush,
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlinePhoto,
  HiOutlineFilm,
  HiOutlineDocument,
  HiOutlineChevronRight,
} from "react-icons/hi2";

import {
  SiBehance,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiFigma,
  SiAdobeindesign,
  SiAdobexd,
} from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  envelope: HiOutlineEnvelope,
  phone: HiOutlinePhone,
  mapPin: HiOutlineMapPin,
  briefcase: HiOutlineBriefcase,
  academic: HiOutlineAcademicCap,
  sparkles: HiOutlineSparkles,
  language: HiOutlineLanguage,
  user: HiOutlineUser,
  arrowDown: HiOutlineArrowDown,
  paintBrush: HiOutlinePaintBrush,
  computer: HiOutlineComputerDesktop,
  mobile: HiOutlineDevicePhoneMobile,
  photo: HiOutlinePhoto,
  film: HiOutlineFilm,
  document: HiOutlineDocument,
  chevronRight: HiOutlineChevronRight,
  behance: SiBehance,
  photoshop: SiAdobephotoshop,
  illustrator: SiAdobeillustrator,
  canva: SiCanva,
  figma: SiFigma,
  indesign: SiAdobeindesign,
  xd: SiAdobexd,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;