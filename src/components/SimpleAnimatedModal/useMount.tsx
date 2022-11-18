import { useEffect, useState } from "react";
import { addPaddingRight } from "../../utils/addPaddingRight";
import { ANIMATION_TIME } from "./Layout/const";
import { SimpleAnimatedModalLayout } from "./Layout/types";

export const useMount = ({ opened }: SimpleAnimatedModalLayout) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (opened && !mounted) {
		addPaddingRight(true);
		document.documentElement.classList.add('lock');
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
		  document.documentElement.classList.remove('lock');
		  addPaddingRight(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    mounted,
  };
};
