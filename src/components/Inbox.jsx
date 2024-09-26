import React, { useEffect, useState } from "react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { Conf } from "@/conf/Conf";
import { useUser } from "@clerk/clerk-react";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import { GroupChannel } from "@sendbird/uikit-react/GroupChannel";
const Inbox = () => {
  const { user } = useUser();
  const [userId, setUserId] = useState(null);
  const [channelUrl, setChannelUrl] = useState("");

  useEffect(() => {
    if (user) {
      const id = user.primaryEmailAddress.emailAddress.split("@")[0];
      setUserId(id);
    }
  }, [user]);
  return (
    <div>
      <div style={{ width: "100%", height: "70vh" }}>
        <SendBirdProvider
          appId={Conf.VITE_SENDBIRD_APPLICATION_ID}
          userId={userId}
          nickname={user?.fullName}
          profileUrl={user?.imageUrl}
          allowProfileEdit={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 h-[70vh] justify-center">
            <div>
              {/* Channel List  */}
              <GroupChannelList
                onChannelSelect={(channel) => setChannelUrl(channel.url)}
                channelListQueryParams={{
                  includeEmpty: true,
                }}
              />
            </div>
            <div className="md:col-span-2">
              {/* Channel Area  */}
              <GroupChannel channelUrl={channelUrl} />
            </div>
          </div>
        </SendBirdProvider>
      </div>
    </div>
  );
};

export default Inbox;
