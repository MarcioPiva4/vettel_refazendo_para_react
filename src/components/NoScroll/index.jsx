import { useState } from "react";

export default function NoScroll({NoScroll}){
    const [scrollDisabled, setScrollDisabled] = useState(NoScroll);

    const disableScroll = () => {
        scrollDisabled ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll"
    }


    return disableScroll();
}