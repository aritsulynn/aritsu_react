import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faDiscord,
  faGithub,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer(props) {
  const feet = [
    {
      name: "Github",
      icon: faGithub,
      url: "https://github.com/Aritsulynn",
    },
    {
      name: "Discord",
      icon: faDiscord,
      url: "https://discordapp.com/users/291900215785685014",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com/imdouzo/",
    },
    {
      name: "Twitter",
      icon: faTwitch,
      url: "https://www.twitch.tv/imdouzo",
    },
    {
      name: "Youtube",
      icon: faYoutube,
      url: "https://www.youtube.com/@imdouzo",
    },
  ];

  return (
    <div className="container mx-auto mt-6 justify-center flex space-x-4 text-3xl pb-6">
      {feet.map((foot) => (
        <div className="hover:text-amber-400 text-center">
          <a href={foot.url}>
            <FontAwesomeIcon icon={foot.icon} />
            {/* <p className="md:hidden text-base">{foot.name}</p> */}
          </a>
        </div>
      ))}
    </div>
  );
}
