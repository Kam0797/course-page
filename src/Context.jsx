import { useState } from "react";
import { createContext } from "react";
import { sideBarItems } from "./constVars";
import { LucideRotate3d, LucideSmartphone, LucideStars } from "lucide-react";
import dev1 from './assets/profileImg/dev1.jpg'
import dev2 from './assets/profileImg/dev2.avif'

const Context = new createContext();

const ContextProvider = ({ children }) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Courses"); // sidebarItems[2].id / label
  const [unreadNotifications, setUnreadNotifications] = useState([1, 3]);

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
      tags: ["Web", "Design", "Others"],
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
      tags: ["Web", "Design", "Others"],
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
      tags: ["Web", "Design", "Others"],
    },
  ];

  const mentorsDetail = [
    {
      id: 1001,
      name: "Kees Cook",
      desg: "UI / UX Designer",
      experience: 6,
      profilePic: dev1
    },
    {
      id: 1002,
      name: "Konstantin",
      desg: "Graphic Designer",
      experience: 5,
      profilePic: dev2
    },
    {
      id: 1003,
      name: "Curie Marie",
      desg: "Creative Director",
      experience: 7,
      profilePic: dev1
    },
    {
      id: 1004,
      name: "Durov Paul",
      desg: "Developer",
      experience: 10,
      profilePic: dev2
    },
  ];

  const progressingCourses = [
    {
      id: 110,
      name: "Website Design Principles",
      unit: 5,
      progress: 75
    },
    {
      id: 110,
      name: "Financial Analysis",
      unit: 2,
      progress: 52,
    },
    {
      id: 110,
      name: "DSA in C",
      unit: 3,
      progress: 64
    },
  ]

  return (
    <Context.Provider
      value={{
        activeSidebarItem,
        setActiveSidebarItem,
        unreadNotifications,
        setUnreadNotifications,
        courseDetails,
        mentorsDetail,
        progressingCourses
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
