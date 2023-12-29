import React from "react";
import { InView } from "react-intersection-observer";

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}) {
  return (
    <InView triggerOnce threshold={0.5}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}
        >
          {children}
        </div>
      )}
    </InView>
  );
}
