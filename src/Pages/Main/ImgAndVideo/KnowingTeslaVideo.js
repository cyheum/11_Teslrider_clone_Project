import React, { Component } from "react";

class KnowingTeslaVideo extends Component {
  render() {
    return (
      <video
        className="KnowingTeslaVideo"
        preload="auto"
        playsInline=""
        data-autoplay-desktop={true}
        data-autoplay-portrait={true}
        data-autoplay-mobile={true}
        muted=""
        loop={true}
        data-poster-portrait="https://www.tesla.com/sites/default/files/images/homepage/experience-desktop.jpg"
        data-poster-mobile="https://www.tesla.com/sites/default/files/images/homepage/experience-mobile.jpg"
        data-src-desktop="https://tesla-cdn.thron.com/delivery/public/video/tesla/45b722a8-a70c-4601-af17-6d599266fb85/bvlatuR/WEBHD/experience-hero-desktop"
        data-src-mobile="https://tesla-cdn.thron.com/delivery/public/video/tesla/37facf78-9bdf-4fba-af45-2a834ae6b436/bvlatuR/WEBHD/experience-hero-mobile"
        data-src-portrait="https://tesla-cdn.thron.com/delivery/public/video/tesla/45b722a8-a70c-4601-af17-6d599266fb85/bvlatuR/WEBHD/experience-hero-desktop"
        data-object-fit="true"
        src="https://tesla-cdn.thron.com/delivery/public/video/tesla/45b722a8-a70c-4601-af17-6d599266fb85/bvlatuR/WEBHD/experience-hero-desktop"
        autoPlay={true}
        data-loaded={true}
      />
    );
  }
}

export default KnowingTeslaVideo;
