import React from "react";
import styled from "styled-components";
import img from "../../source/assets/carousel/landingpage.225705d8dfdeb5a0f2eb.png"
import img2 from "../../source/assets/carousel/yandex.c291d089ff08c19d2941.png"
import img3 from "../../source/assets/carousel/meta.2f97fc7e21a9e31633e4.png"


const Image = styled.img `
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  width: 100%;
  height: 100%;
`;

const Images = ({ activeTab }) => {
    return (
        <div>
            <Image src={img2} alt="Image 1" isActive={activeTab === 1} />
            <Image  src={img3} alt="Image 2" isActive={activeTab === 2} />
            <Image  src={img} alt="Image 3" isActive={activeTab === 3} />
        </div>
    );
};

export default Images;