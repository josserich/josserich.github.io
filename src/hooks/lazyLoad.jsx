import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";

export default function LazySection({ loader, fallback = <div /> }) {
  const ref = useRef(null);
  const [Comp, setComp] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          // dynamic import baru dijalankan saat terlihat
          const module = await loader();
          setComp(() => module.default);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [loader]);

  return (
    <div ref={ref} style={{ minHeight: "400px" }}>
      {Comp ? (
        <Suspense fallback={fallback}>
          <Comp />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
