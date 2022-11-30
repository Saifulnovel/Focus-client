import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Focus-${title}`;
  }, [title]);
};

export default useTitle;
