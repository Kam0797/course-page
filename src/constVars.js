import { LucideBookMarked, LucideCalendarDays, LucideDotSquare, LucideFolderKanban, LucideLayoutDashboard, LucideMails } from "lucide-react"

const successIcon = LucideDotSquare 
const sideBarItems = [
  {
   icon: LucideLayoutDashboard ,
    id: "Dashboard",
  },
  {
    icon: LucideFolderKanban  ,
    id: "Courses",
  },
  {
    icon: LucideCalendarDays,
    id: "Schedule",
  },
  {
    icon: LucideMails ,
    id: "Messages",
  },
  {
    icon: LucideBookMarked,
    id: "Resources",
  },
];

const profileName = "Alan Walker"

export { successIcon, sideBarItems, profileName };
