import { useCallback, useState } from "react";

export const useTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectElement = useCallback(
    (index: number) => {
      selectElement(index);
    },
    [setSelectedIndex]
  );
  return {
    selectedIndex,
    selectElement,
  };
};
