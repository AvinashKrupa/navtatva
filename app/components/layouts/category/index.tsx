import React, { useEffect } from "react";

interface iProps {
  onClick?: () => void;
  onMouseLeave?: () => void;
  title: string;
  image: string;
  isLoading?: boolean;
}

function NavMenuCategory(props: iProps) {
  return (
    <div className="thumb position-relative text-center category-thumb">
      <a
        onClick={() => {
          props.onClick && props.onClick();
        }}
        onMouseEnter={() => {
          props.onClick && props.onClick();
        }}
        onMouseLeave={() => {
          props.onMouseLeave && props.onMouseLeave();
        }}
      >
        <img
          style={{ maxHeight: 240, height: 220 }}
          className="img-fluid"
          src={props.image}
          alt={props.title}
        />
        <p className="fs-20">{props.title}</p>
        <div className="overlay" />
      </a>
    </div>
  );
}

export default NavMenuCategory;
