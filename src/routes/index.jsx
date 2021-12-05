import React, { useContext, useEffect } from "react";
import AuthContext from "../contexts/auth";

import SignRoutes from "./SignRoutes";
import OtherRoutes from "./OtherRoutes";

const Routes = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <OtherRoutes /> : <SignRoutes />;
};

export default Routes;
