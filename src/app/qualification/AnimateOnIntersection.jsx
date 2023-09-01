import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const AnimateOnIntersectContext = createContext({
  isInView: false,
});

function AnimateOnIntersect({ options = defaultOptions, children }) {
  const containerRef = useRef();
  const [isInView, setIsInView] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      callbackFunction,
      options
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current)
        observer.unobserve(containerRef.current);
    };
  }, [options]);

  return (
    <AnimateOnIntersectContext.Provider value={{ isInView }}>
      <div ref={containerRef}>{children}</div>
    </AnimateOnIntersectContext.Provider>
  );
}

export function useAnimateOnIntersect() {
  return useContext(AnimateOnIntersectContext);
}

export default AnimateOnIntersect;
