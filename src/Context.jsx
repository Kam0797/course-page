import { useState } from "react";
import { createContext } from "react";
import { sideBarItems } from "./constVars";
import { LucideRotate3d, LucideSmartphone, LucideStars } from "lucide-react";


const Context = new createContext()

const ContextProvider = ({children}) => {

  const [activeSidebarItem, setActiveSidebarItem] = useState("Courses") // sidebarItems[2].id / label
  const [unreadNotifications, setUnreadNotifications] = useState([1,3])

  // from API
  const courseDetails = [
    {
      id: 101,
      name: "UI/UX Web Interfaces",
      description: "A cool course by coolSchool",
      icon: LucideStars,
      startDate: "",
      endDate: "",
      price: 458,
      rating: 4.2,
      category: "design",
      tags: ["Web", "Design", "Others"]
    },
    {
      id: 102,
      name: "UI/UX Mobile Interfaces",
      description: "A cool course by hotSchool",
      icon: LucideSmartphone,
      startDate: "",
      endDate: "",
      price: 4158,
      rating: 3.2,
      category: "design",
      tags: ["Web", "Design", "Others"]
    },
    {
      id: 103,
      name: "UI/UX Desktop Interfaces",
      description: "A cool course by wildSchool",
      icon: LucideRotate3d,
      startDate: "",
      endDate: "",
      price: 4580,
      rating: 4.0,
      category: "design",
      tags: ["Web", "Design", "Others"]
    }
  ]

  return <Context.Provider value={{activeSidebarItem, setActiveSidebarItem, unreadNotifications, setUnreadNotifications, courseDetails}}>
    {children}
  </Context.Provider>
}

export {Context, ContextProvider}