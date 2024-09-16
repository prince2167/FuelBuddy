// navigationData.js

import {
  FaHome,
  FaUsers,
  FaFolder,
  FaCalendar,
  FaChartPie,
} from "react-icons/fa";

export const navigation = [
  { name: "Dashboard", href: "#", icon: FaHome, current: true },
  { name: "Team", href: "#", icon: FaUsers, current: false },
  { name: "Projects", href: "#", icon: FaFolder, current: false },
  { name: "Calendar", href: "#", icon: FaCalendar, current: false },
  { name: "Reports", href: "#", icon: FaChartPie, current: false },
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
