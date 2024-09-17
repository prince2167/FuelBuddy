import { FaHome } from "react-icons/fa";

export const navigation = [
  { name: "Home", href: "#", icon: FaHome, current: true },
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
