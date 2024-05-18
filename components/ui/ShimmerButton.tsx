import React from "react";

type ShimmerButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
};

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: ShimmerButtonProps) => {
  return (
    <button
      className={` inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md:mt-10 gap-2 ${otherClasses}`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default ShimmerButton;
