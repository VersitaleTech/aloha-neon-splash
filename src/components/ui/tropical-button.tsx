import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tropicalButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-tropical hover-glow-pink",
        hero: "bg-gradient-tropical text-white shadow-tropical hover-glow-pink text-xl px-8 py-4",
        secondary: "bg-secondary text-secondary-foreground shadow-tropical hover-glow-green",
        accent: "bg-accent text-accent-foreground shadow-tropical hover-glow-blue",
        outline: "border-2 border-primary text-primary hover:bg-primary/10 hover-glow-pink",
        ghost: "hover:bg-primary/10 hover:text-primary hover-glow-pink",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TropicalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tropicalButtonVariants> {
  asChild?: boolean
}

const TropicalButton = React.forwardRef<HTMLButtonElement, TropicalButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(tropicalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
TropicalButton.displayName = "TropicalButton"

export { TropicalButton, tropicalButtonVariants }