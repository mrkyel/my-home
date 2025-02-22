import { ElementType, ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
} & ComponentPropsWithoutRef<T>;

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-border hover:bg-muted/10",
    ghost: "hover:bg-muted/10",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <Component
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
