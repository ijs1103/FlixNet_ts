import { useState } from "react";

const UseTabs = (initTab: number, allTabs: any[]) => {

    const [currentIndex, setCurrentIndex] = useState(initTab);

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

export default UseTabs;