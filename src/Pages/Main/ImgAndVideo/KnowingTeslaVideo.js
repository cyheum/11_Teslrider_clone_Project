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
        alt="logo"
        src="https://tesla-cdn.thron.com/delivery/public/video/tesla/45b722a8-a70c-4601-af17-6d599266fb85/bvlatuR/WEBHD/experience-hero-desktop"
        autoPlay={true}
        data-loaded={true}
      />
    );
  }
}

export default KnowingTeslaVideo;
