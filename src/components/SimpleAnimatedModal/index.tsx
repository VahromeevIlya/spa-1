import Portal from "../portal/Portal";
import { Layout } from "./Layout";
import { SimpleAnimatedModalLayout } from "./Layout/types";

import { useMount } from "./useMount";

export const SimpleAnimatedModal = ({ opened, onClose, children }: SimpleAnimatedModalLayout) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};
