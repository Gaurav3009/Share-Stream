import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";

const LivePeerClient = createReactClient({
    provider: studioProvider({apiKey: "20e16a7d-0661-47e8-b406-e283f4ef81d4"}),
});

export default LivePeerClient;