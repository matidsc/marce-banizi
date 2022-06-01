import React from "react";
import AnimatedPage from "../Pages/AnimatedPage";
const PageWrapper = ({ children,xAnimation }) => {
  return (
<AnimatedPage xAnimation={xAnimation}>
    <main className="HomeWrapper" id="pageWrapper">
      {children}
    </main>
    </AnimatedPage>
  );
};

export default PageWrapper;
