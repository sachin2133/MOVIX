import React, { useState } from "react";

import Carousel from "../../../component/Carosel/Carousal";
import ContentWrapper from "../../../component/contentwrraper/contentwraper";
import SwitchTabs from "../../../component/switchtab/Switchtab";

import useFetch from "../../../hooks/Usefetch";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;