import React from "react";
import StyleSearchContent from "./style";
import img from "../../../assets/images/temp.png";

const SearchContent = () => {
  return (
    <StyleSearchContent>
      <header>
        <h2>Son axtarışlar</h2>
        <p>Təmizlə</p>
      </header>
      <ul className="history">
        <li>laman</li>
        <li>laman</li>
        <li>laman</li>
      </ul>

      {/* <div className="suggestions">
        <ul>
          <li>
            <img src={img} alt="product" />
            <p>Apple iPhone 12, 64 GB, Bənövşəyi</p>
            <span>
              2089
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.59864 1.72768L9.56064 0L8.36507 0.617775L8.33058 1.73493C3.67287 2.19517 0 7.41186 0 13.7837C0 14.1942 0.0151377 14.5996 0.0454132 15H1.67649C1.66119 14.7072 1.65112 14.412 1.65112 14.1134C1.65112 8.33388 4.56783 3.59029 8.28925 3.08269L7.95597 13.9382L9.84851 13.0116L9.62847 3.08482C13.342 3.60411 16.2504 8.34248 16.2504 14.1136C16.2504 14.4122 16.2405 14.7073 16.2251 15.0002H17.9549C17.9848 14.6002 17.9998 14.1948 18.0001 13.7839C17.9999 7.37958 14.2902 2.14163 9.59864 1.72768Z"
                  fill="#333333"
                />
              </svg>
            </span>
          </li>
          <li>
            <img src={img} alt="product" />
            <p>Apple iPhone 12, 64 GB, Bənövşəyi</p>
            <span>
              2089
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.59864 1.72768L9.56064 0L8.36507 0.617775L8.33058 1.73493C3.67287 2.19517 0 7.41186 0 13.7837C0 14.1942 0.0151377 14.5996 0.0454132 15H1.67649C1.66119 14.7072 1.65112 14.412 1.65112 14.1134C1.65112 8.33388 4.56783 3.59029 8.28925 3.08269L7.95597 13.9382L9.84851 13.0116L9.62847 3.08482C13.342 3.60411 16.2504 8.34248 16.2504 14.1136C16.2504 14.4122 16.2405 14.7073 16.2251 15.0002H17.9549C17.9848 14.6002 17.9998 14.1948 18.0001 13.7839C17.9999 7.37958 14.2902 2.14163 9.59864 1.72768Z"
                  fill="#333333"
                />
              </svg>
            </span>
          </li>
        </ul>
        <button>Hamısını göstər</button>
      </div> */}
    </StyleSearchContent>
  );
};

export default SearchContent;