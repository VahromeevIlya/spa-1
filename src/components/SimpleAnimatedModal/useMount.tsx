import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./Layout/const";
import { SimpleAnimatedModalLayout } from "./Layout/types";

export const useMount = ({ opened }: SimpleAnimatedModalLayout) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    mounted,
  };
};
