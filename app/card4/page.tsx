"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var md:mx-0 mx-4 mt-0 md:mt-14">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black bg-opacity-85  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="60" className="w-full rounded-md mt-4">
            <div className="banner">
                <Image
                src={'https://i.pinimg.com/originals/6f/7a/18/6f7a18abd5dcbf34f9758a41324c6ee4.jpg'}
                width={960}
                height={240}
                alt="Banner"
                className="object-cover rounded-lg  w-full h-[168px]"
                />
            </div>
            <div className="avatar">
          <Image
            src="https://i.pinimg.com/736x/a7/f0/13/a7f013c4d0331a75fa630977f1055e87.jpg"
            height="108"
            width="108"
            className=" object-cover ml-4 absolute top-24 w-[108px] h-[108px] sm:top-20 rounded-full group-hover/card:shadow-xl mx-auto"
            alt="Avatar"
          />
          </div>
        </CardItem>
       <CardItem translateZ="80">
        <div className="w-[20rem] sm:w[24rem] md:w-[27rem] px-1">
       <div className="profile px-2 w-full mt-8 flex justify-between items-center">
    <div className="flex items-center">
        <a className="font-semibold text-2xl">decal.</a>
    </div>
    <div className="badges ml-auto p-1 flex items-center bg-neutral-950 bg-opacity-40 rounded-md">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="#3e70dd" d="M21.58 11.4L17.3 4.01l-.35-.6H7.04l-.35.6-4.27 7.39-.35.6.35.6 4.27 7.39.35.6h9.92l.35-.6 4.28-7.39.35-.6-.36-.6zM8.51 10.37L6.88 12l1.63 1.63v2.73L4.15 12l4.37-4.37v2.74zm3.12 6.93l-2.04-.63 3.1-9.98 2.04.64-3.1 9.97zm3.86-.93v-2.73L17.12 12l-1.63-1.63V7.63L19.85 12l-4.36 4.37z"/>
  <path fill="none" d="M0 0h24v24H0z"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L2 20H22L12 4ZM12 9.66L16.59 17H7.41L12 9.66Z" fill="#FF6BFA"/>
<path d="M7.40991 17L11.9999 9.65997L16.5899 17H7.40991Z" fill="#FFDEF9"/>
<path d="M12 4V9.66L16.59 17L22 20L12 4Z" fill="#FFB0FF"/>
</svg>
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17.2719 3h-9.54383c-.14912 1.9386-1.78947 3.42982-3.72807 3.42982v.89474c0 4.39914 2.08772 8.50004 5.74123 11.40794l2.75877 2.1622 2.7588-2.1622c3.6535-2.8334 5.7412-7.0088 5.7412-11.40794v-.89474c-1.9386 0-3.5044-1.49122-3.7281-3.42982zm-6.4868 12.8991c-2.23685-1.7895-3.57896-4.3245-3.57896-7.08331v-.52193c1.19298 0 2.23684-.89474 2.3114-2.08772h2.98246v11.10966z" fill="#5865f2"/></svg>
    </div>
</div>
</div>
       </CardItem>
       <CardItem translateZ="60" className="px-2 mt-5">
        <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">About me</h3>
        <div className="aboutme mt-2 text-white text-opacity-90">
            <p>reactjs ∼ tailwind ∼ typescript
                <br></br>
usa / 18</p>
        </div>
       </CardItem>
       <CardItem translateZ="80" className="px-2 mt-8">
       <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">Connections</h3>
       <div className="gap-2 md:flex flex-wrap ">
    <a href="https://github.com/sye0001" target="blank">
        <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-full">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
  image-rendering="optimizeQuality"
  fill-rule="evenodd"
  clip-rule="evenodd"
  viewBox="0 0 449.45 515.38"
  width="24"
  height="24"
  fill="currentColor"
  className="bi bi-tiktok"
>
  <path
    fill-rule="nonzero"
    d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"
  />
</svg>

            Tiktok
            <div className="arrow ml-[4rem] sm:ml-14 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </div>
        </div>
    </a>

     
    <a href="https://discordapp.com/users/208168562286788610" target="blank">
        <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
</svg>
            Discord
            <div className="arrow ml-[4rem] sm:ml-14 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </div>
        </div>
    </a>


       </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo
