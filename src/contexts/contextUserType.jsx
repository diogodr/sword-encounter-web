import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth";
import { useCampaign } from "./campaignContext";

const UserTypeContext = createContext({});

export const UserTypeProvider = ({ children }) => {
  const [isMaster, setIsMaster] = useState(false);
  const contextAuth = useAuth();
  const contextCampaign = useCampaign();

  async function userTypeVerification() {
    const userMaster = contextCampaign.campaign.filter(
      (campaign) => campaign.masterId === contextAuth.user.id
    );

    if (userMaster) {
      setIsMaster(true);
      // localStorage.setItem("@App:userType", JSON.stringify(true));
    } else {
      setIsMaster(false);
      // localStorage.setItem("@App:userType", JSON.stringify(false));
    }
  }

  useEffect(() => {
    userTypeVerification();
  }, []);

  return (
    <UserTypeContext.Provider value={{ isMaster }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export function useUserType() {
  const context = useContext(UserTypeContext);

  return context;
}

export default UserTypeContext;
