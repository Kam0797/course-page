import { useState } from "react";
import { createContext } from "react";
import { sideBarItems } from "./constVars";
import { LucideEarth, LucideGitGraph, LucideRotate3d, LucideRotateCcw, LucideSatelliteDish, LucideSmartphone, LucideStars } from "lucide-react";
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
      startDate: "15 Nov",
      endDate: "20 Jan",
      price: 458,
      rating: "4.2",
      category: "design",
      tags: ["Web", "Design", "Others"],
    },
    {
      id: 102,
      name: "UI/UX Mobile Interfaces",
      description: "A cool course by hotSchool",
      icon: LucideSmartphone,
      startDate: "14 Aug",
      endDate: "30 Sep",
      price: 4158,
      rating: "3.2",
      category: "design",
      tags: ["Web", "Design", "Others"],
    },
    {
      id: 103,
      name: "UI/UX Desktop Interfaces",
      description: "A cool course by wildSchool",
      icon: LucideRotate3d,
      startDate: "20 Apr",
      endDate: "17 May",
      price: 4580,
      rating: "4.0",
      category: "design",
      tags: ["Web", "Design", "Others"],
    },
    {
      id: 104,
      name: "Artistic painting",
      description: "A cool course by artSchool",
      icon: LucideStars,
      startDate: "11 Mar",
      endDate: "14 Jul",
      price: 4580,
      rating: "4.0",
      category: "illustration",
      tags: ["Web", "Design", "Others"],
    },
    {
      id: 105,
      name: "Customer retention ideas",
      description: "A cool course by bizSchool",
      icon: LucideRotateCcw,
      startDate: "27 Feb",
      endDate: "13 Apr",
      price: 4510,
      rating: "3.0",
      category: "marketing",
      tags: ["Sales", "Marketing", "Others"],
    },
    {
      id: 106,
      name: "The Cognition",
      description: "A cool course by adSchool",
      icon: LucideSatelliteDish,
      startDate: "22 Dec",
      endDate: "11 Jan",
      price: 1580,
      rating: "4.1",
      category: "advertising",
      tags: ["Ads", "Platforms"],
    },
    {
      id: 107,
      name: "Brand awareness - Overview",
      description: "A cool course by higSchool",
      icon: LucideRotate3d,
      startDate: "4 Nov",
      endDate: "19 Jan",
      price: 580,
      rating: "3.4",
      category: "brand",
      tags: ["Branding", "Marketing", "Outreach"],
    },
    {
      id: 108,
      name: "Color theory",
      description: "A cool course by artSchool",
      icon: LucideRotate3d,
      startDate: "11 Feb",
      endDate: "15 Feb",
      price: 80,
      rating: "4.4",
      category: "illustration",
      tags: ["Art", "Color", "Paint"],
    },
    {
      id: 109,
      name: "Demand analysis",
      description: "A cool course by demSocSchool",
      icon: LucideGitGraph,
      startDate: "14 Oct",
      endDate: "2 Jan",
      price: 2440,
      rating: "4.4",
      category: "marketing",
      tags: ["Market", "Survey"],
    },
    {
      id: 110,
      name: "Market expansion",
      description: "Navigating through geo-politics",
      icon: LucideEarth,
      startDate: "15 Jan",
      endDate: "24 Oct",
      price: 9280,
      rating: "4.0",
      category: "marketing",
      tags: ["Market", "Politics", "International"],
    }
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
