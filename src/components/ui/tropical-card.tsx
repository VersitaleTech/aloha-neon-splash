import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tropicalCardVariants = cva(
  "rounded-3xl border bg-card text-card-foreground shadow-tropical transition-all",
  {
    variants: {
      variant: {
        default: "border-border hover:shadow-lg",
        neon: "border-primary/30 bg-card/80 backdrop-blur-sm hover-glow-pink",
        secondary: "border-secondary/30 bg-card/80 backdrop-blur-sm hover-glow-green", 
        accent: "border-accent/30 bg-card/80 backdrop-blur-sm hover-glow-blue",
        gradient: "bg-gradient-tropical border-0 text-white shadow-tropical",
      },
      padding: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface TropicalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tropicalCardVariants> {}

const TropicalCard = React.forwardRef<HTMLDivElement, TropicalCardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(tropicalCardVariants({ variant, padding, className }))}
      {...props}
    />
  )
)
TropicalCard.displayName = "TropicalCard"

const TropicalCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
TropicalCardHeader.displayName = "TropicalCardHeader"

const TropicalCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
))
TropicalCardTitle.displayName = "TropicalCardTitle"

const TropicalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
))
TropicalCardDescription.displayName = "TropicalCardDescription"

const TropicalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
TropicalCardContent.displayName = "TropicalCardContent"

const TropicalCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
TropicalCardFooter.displayName = "TropicalCardFooter"

export {
  TropicalCard,
  TropicalCardHeader,
  TropicalCardFooter,
  TropicalCardTitle,
  TropicalCardDescription,
  TropicalCardContent,
}