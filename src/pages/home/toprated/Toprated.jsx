import React, { useState } from "react";
import Carousel from "../../../component/Carosel/Carousal";
import ContentWrapper from "../../../component/contentwrraper/contentwraper";
import SwitchTabs from "../../../component/switchtab/Switchtab";
import useFetch from "../../../hooks/Usefetch";

const Toprated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["movies", "tv shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default Toprated;