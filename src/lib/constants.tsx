import { SideNavItem } from "@/types";
import { Icons } from "./Icons";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <Icons.dashboard className="w-6 h-6" />
    },
    {
        title: "Posts",
        path: "/dashboard/posts",
        icon: <Icons.posts className="w-6 h-6" />
    },
    {
        title: "Products",
        path: "/dashboard/products",
        icon: <Icons.Package className="w-6 h-6" />
    },
    {
        title: "Categories",
        path: "/dashboard/categories",
        icon: <Icons.categories className="w-6 h-6" />,
        submenu: true,
        subMenuItems: [
            {title:"Product", path:"/dashboard/categories/product"},
            {title:"Blog", path:"/dashboard/categories/blog"},
        ],
    },
    {
        title: "Orders",
        path: "/dashboard/orders",
        icon: <Icons.orders className="w-6 h-6" />
    },
    {
        title: "Users",
        path: "/dashboard/users",
        icon: <Icons.users className="w-6 h-6" />
    },
]