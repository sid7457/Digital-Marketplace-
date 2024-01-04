import { cn } from "@/lib/utils";
import { ReactNode } from "react";


const MaxWidhthWrapper = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
    return(
        <div
        className={cn(
            'mx-auto w-full max-w-screen-xl tailwind.config.tsscroll-px-2.5 md:tailwind.config.tsscroll-px-2',
            className
        )}>
        {children}
        </div>
    )
}

export default  MaxWidhthWrapper