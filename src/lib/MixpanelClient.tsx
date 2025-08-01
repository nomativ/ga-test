import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

interface MixpanelClientProps {
    debug?: boolean;
    trackPageview?: boolean;
    persistence?: "localStorage";
    children?: React.ReactNode;
}

export const MixpanelClient: React.FC<MixpanelClientProps> = ({
    debug = true,
    trackPageview = true,
    persistence = "localStorage",
    children
}) => {
    useEffect(() => {
        mixpanel.init("fb944f924950ed9b258d6b43c0d8f61b", {
            debug,
            track_pageview: trackPageview,
            persistence,
        });
    }, [debug, trackPageview, persistence]);

    return <>{children}</>;
};

export { mixpanel };