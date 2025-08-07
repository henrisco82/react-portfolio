import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft hover:shadow-medium transform hover:scale-[1.02]",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft hover:shadow-medium",
                outline:
                    "border-2 border-primary/20 bg-background/80 backdrop-blur-sm text-primary hover:bg-primary/5 hover:border-primary/30 shadow-soft",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium",
                ghost: "hover:bg-accent/50 hover:text-accent-foreground transition-all duration-200",
                link: "text-primary underline-offset-4 hover:underline",
                hero: "bg-hero-gradient text-white hover:shadow-glow transform hover:scale-[1.02] shadow-medium font-bold",
                accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft hover:shadow-medium transform hover:scale-[1.02]",
                glass: "bg-white/10 backdrop-blur-glass border border-white/20 text-white hover:bg-white/20 shadow-soft",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }