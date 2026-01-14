import { useEffect, useState } from "react";

type AnimatedWrapperProps = {
  className?: string;
  animationClass?: string;
  noAnimationClass?: string;
  children: React.ReactNode;
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  className = "",
  animationClass = "animate",
  noAnimationClass = "no-animation",
  children,
}) => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(() => {
    return sessionStorage.getItem("hasAnimated") === "true";
  });

  useEffect(() => {
    if (!hasAnimated) {
      sessionStorage.setItem("hasAnimated", "true");
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <div
      className={`${className} ${
        hasAnimated ? noAnimationClass : animationClass
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
