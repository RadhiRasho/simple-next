import type { ReactNode } from "react";
import SideNav from "@/app/ui/dashboard/sidenav";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {

    return (
        <div className="flex h-screeen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}
