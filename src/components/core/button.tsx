import React, { useEffect, useRef, useState } from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

export type ButtonType = "primary" | "secondary" | "other" | "none" | "dark";
type ButtonProps = {
  loading?: boolean
}
  & ({
      mode?: Exclude<ButtonType, "other">;
      className?: string;
      backgroundColor?: string;
    }
  | {
      mode: "other";
      backgroundColor: string;
      className?: string;
    })
export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  ButtonProps
>;
export function Button <T extends React.ElementType>({
  children,
  as,
  mode = "primary",
  backgroundColor,
  className,
  loading,
  ...rest
}: TextProps<T>): JSX.Element {
  
  const Component = as || "button";
  const buttonClasses: { [key in ButtonType]: string } = {
    primary: "bg-[#0B4F6C] border-none text-white hover:bg-[#0B4F6C]/80 fill-white",
    secondary: "hover:bg-gray-50",
    other: `text-secondary hover:opacity-80`,
    dark: `bg-[#11283B] text-white border-none hover:bg-[#11283B]/80 fill-white`,
		none: `text-sm font-semibold leading-6 text-gray-900`
  };
  const style = mode === "other" ? { backgroundColor } : undefined;
  const _class = mode !== 'none' ? `${
    buttonClasses[mode]
  } inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-sm border border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${className}`
	: `${buttonClasses[mode]} ${className}`;
  return (
    <Component className={_class} type="button" data-primary="true" {...rest} style={style}>
        {children}
    </Component>
  );
};