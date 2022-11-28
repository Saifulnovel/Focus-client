import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Focus`;
  }, [title]);
};

export default useTitle;
