import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-gradient hover:shadow-primary hover:text-shadow transition-[shadow,text-shadow] ",
      secondary:
        "text-off-white bg-white bg-opacity-10 border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <span className="">{children}</span>;
};

const Button = ({ children, href, variant, size, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={buttonClasses({ variant, size, className: className })}
    >
      {children}
    </Link>
  );
};
export default Button;
