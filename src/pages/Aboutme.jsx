import React from "react";

import aritsu_cover from "../img/aritsu_cover.png";

export default function Home(props) {
  // const classes = useStyles();
  let text = `I'm Lynn ー a diligent and dedicated student at the University with a keen interest in coding, anime, and games. Currently, I actively engage in playing League of Legends and Valorant. If you have any inquiries or wish to discuss anything further, please do not hesitate to get in touch with me.
  `;
  return (
    <div className="mt-8 container mx-auto grid lg:grid-cols-2 md:grid-cols-1 text-xl">
      <div className="flex lg:justify-end justify-center">
        <img src={aritsu_cover} alt="Aritsu Cover" className="max-h-96" />
      </div>
      <div className="grid content-center justify-center mx-3">
        <div className="lg:text-left text-center border rounded-md px-5 py-5">
          <p className="text-2xl font-bold">Hey. What's up? Hello! ╰(*°▽°*)╯</p>
          <p className="text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}
