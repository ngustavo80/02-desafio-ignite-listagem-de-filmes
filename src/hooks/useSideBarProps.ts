import { useContext } from "react";
import { sidebarContext } from "../components/SideBar";

export function useSideBarProps() {
  const value = useContext(sidebarContext)

  return value
}