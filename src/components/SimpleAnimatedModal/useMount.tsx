import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./Layout/const";
import { SimpleAnimatedModalLayout } from "./Layout/types";

export const useMount = ({ opened }: SimpleAnimatedModalLayout) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
		document.documentElement.classList.add('lock');
		document.body.style.marginRight = '17px';
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
		  document.documentElement.classList.remove('lock');
		  document.body.style.marginRight = '';
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    mounted,
  };
};
