import React from "react";
import "./Tinysection.css";
import drimg from "../../img/drimg.webp";
import ProductList from "../ProductList/ProductList";
import skincareData from "../../Data/skincareData";
import TinyDiv from "../../Util/tinyDiv/TinyDiv";
import Badge from "../../Util/Badge/Badge";

const TinySection = ({ handleOpenDisplay }) => {
  const Heroproducts = skincareData.slice(0, 8);
  return (
    <section className="tinysection-wrapper">
      <div className="animals-section">
        <div className="svg-animal">
          <div className="svg-animal-img">
            <svg
              fill="#000000"
              height="34px"
              width="34px"
              version="1.1"
              id="Layer_1"
              viewBox="-35.84 -35.84 583.68 583.68"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M376.051,268.016c10.088-73.513,10.892-148.054,2.387-221.679c-0.011-0.094-0.024-0.19-0.037-0.284 C374.809,20.66,351.196,0,325.761,0c-25.434,0-49.049,20.659-52.642,46.053c-0.013,0.094-0.026,0.19-0.037,0.284 c-6.872,59.494-7.666,119.838-2.373,179.576c-9.786-0.722-19.631-0.722-29.417,0c5.293-59.737,4.5-120.08-2.373-179.576 c-0.011-0.094-0.024-0.19-0.037-0.284C235.288,20.659,211.674,0,186.24,0s-49.049,20.66-52.642,46.053 c-0.013,0.094-0.026,0.19-0.037,0.284c-8.504,73.622-7.701,148.163,2.387,221.679c-30.941,26.688-48.554,63.04-48.554,100.67 C87.395,447.71,163.031,512,256,512s168.605-64.29,168.605-143.314C424.605,331.057,406.993,294.705,376.051,268.016z M256,489.519c-80.573,0-146.125-54.205-146.125-120.834c0-33.195,16.004-64.167,45.064-87.209 c3.137-2.486,4.713-6.453,4.142-10.415c-10.631-73.57-11.709-148.253-3.205-221.99c2.082-14.18,16.236-26.59,30.364-26.59 c14.129,0,28.284,12.412,30.365,26.592c7.198,62.415,7.532,125.786,0.991,188.345c-0.361,3.452,0.892,6.877,3.397,9.279 c2.503,2.402,5.978,3.514,9.41,3.011c16.833-2.464,34.364-2.464,51.193,0c3.433,0.502,6.907-0.608,9.412-3.011 c2.504-2.403,3.758-5.828,3.397-9.279c-6.54-62.563-6.206-125.932,0.991-188.345c2.081-14.181,16.236-26.592,30.365-26.592 c14.128,0,28.282,12.41,30.364,26.59c8.505,73.739,7.426,148.423-3.205,221.991c-0.572,3.961,1.005,7.928,4.142,10.415 c29.06,23.043,45.064,54.014,45.064,87.209C402.125,435.314,336.573,489.519,256,489.519z"></path>{" "}
                      <path d="M327.756,122.339c-6.207,0.106-11.153,5.222-11.048,11.429c0.423,24.885-0.303,50.087-2.159,74.907 c-0.463,6.191,4.18,11.584,10.37,12.047c0.285,0.021,0.569,0.031,0.851,0.031c5.827,0,10.755-4.497,11.197-10.402 c1.907-25.502,2.654-51.398,2.219-76.966C339.08,127.179,333.953,122.253,327.756,122.339z"></path>{" "}
                      <path d="M314.577,87.09c0.433,5.912,5.363,10.421,11.199,10.421c0.275,0,0.553-0.01,0.832-0.03 c6.191-0.453,10.842-5.839,10.389-12.031l-0.025-0.337c-0.453-6.191-5.82-10.863-12.031-10.389 c-6.191,0.453-10.842,5.839-10.389,12.031L314.577,87.09z"></path>{" "}
                      <path d="M197.452,208.675c-3.027-40.467-3.028-81.482-0.004-121.904c0.463-6.19-4.18-11.584-10.37-12.047 c-6.192-0.473-11.584,4.179-12.047,10.37c-3.107,41.534-3.106,83.677,0.005,125.258c0.442,5.906,5.37,10.402,11.196,10.402 c0.281,0,0.565-0.01,0.85-0.031C193.272,220.26,197.916,214.866,197.452,208.675z"></path>{" "}
                      <path d="M269.998,391.931L256,401.262l-13.998-9.332c-5.165-3.443-12.143-2.048-15.587,3.117 c-3.443,5.165-2.048,12.144,3.117,15.587l15.227,10.151v7.473c0,6.208,5.032,11.24,11.24,11.24c6.208,0,11.24-5.032,11.24-11.24 v-7.473l15.227-10.151c5.165-3.443,6.561-10.422,3.117-15.587C282.143,389.883,275.164,388.487,269.998,391.931z"></path>{" "}
                      <circle cx="206.924" cy="340.965" r="11.24"></circle>{" "}
                      <circle cx="305.085" cy="340.965" r="11.24"></circle>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="width200">
          <p className="tinyp">
            we stand against animal testing all our ingridients are sorced
            products catalouges of ingredients that have a history of safe use
            and do not require any additional testing.
          </p>
        </div>
        <div className="svg-animal">
          <div className="svg-animal-img">
            <svg
              width="34px"
              height="34px"
              viewBox="-3.84 -3.84 55.68 55.68"
              fill="#054f31"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M0 0h48v48H0z" fill="none"></path>{" "}
                <g id="Shopicon">
                  {" "}
                  <path d="M28.783,23.536c1.846-0.252,3.498-1.38,4.431-3.068c0.93-1.681,1.02-3.717,0.299-5.468 c0.721-1.751,0.631-3.787-0.299-5.468V9.531c-0.937-1.691-2.589-2.806-4.423-3.057C27.672,4.939,25.902,4,24,4 s-3.672,0.939-4.792,2.475c-1.835,0.251-3.488,1.365-4.423,3.058c-0.929,1.681-1.019,3.717-0.298,5.468 c-0.72,1.751-0.63,3.787,0.299,5.468c0.934,1.688,2.586,2.816,4.431,3.068c0.711,0.97,1.683,1.699,2.783,2.104V44h4V25.64 C27.1,25.235,28.073,24.506,28.783,23.536z M24,11c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4s-4-1.791-4-4 C20,12.791,21.791,11,24,11z"></path>{" "}
                  <path d="M29.445,33.214c-2.054,2.054-2.054,5.383,0,7.437c2.054,2.054,5.383,2.054,7.437,0c3.719-3.719,3.187-10.624,3.187-10.624 S33.163,29.495,29.445,33.214z"></path>{" "}
                  <path d="M7.931,30.095c0,0-0.531,6.906,3.187,10.624c2.054,2.054,5.383,2.054,7.437,0c2.054-2.054,2.054-5.383,0-7.437 C14.837,29.564,7.931,30.095,7.931,30.095z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="tinysection" id="rotateFlower">
        <ProductList products={Heroproducts} />
        <div className="tinysection-content">
          <div className="ts-card">
            <p className="title-header">
              {" "}
              Quality Ingredients At Lumina
            </p>
            <p className="sub-text tal">
              we prioritize the quality and integrity of our ingredients. We
              meticulously source the best, sustainably harvested botanicals and
              natural extracts to ensure that our products are not only
              effective but also gentle on your skin and the environment.
            </p>
          </div>
          <div className="ts-card">
            <p className="title-header"> Personalized Care</p>
            <p className="sub-text tal">
              we understand that every skin type is unique! which is why, we
              offer personalized skincare solutions tailored to your specific
              needs.with a comprehensive skin assessment to identify your
              concerns and goals, we recommend a customized regimen that
              addresses your individual requirements.
            </p>
          </div>
          <div className="ts-card">
            <p className="title-header">
              {" "}
              Quality Ingredients At Lumina
            </p>
            <p className="sub-text tal">
              we prioritize the quality and integrity of our ingredients. We
              meticulously source the best, sustainably harvested botanicals and
              natural extracts to ensure that our products are not only
              effective but also gentle on your skin and the environment.
            </p>
          </div>
        </div>
        <div className="doublegrid">
          <div className="smallestp fStart">
            <Badge />
            <i> Dr.mzoe, Cosmetic Scientist :—</i>
          </div>
          <div className="org-section-outer">
            <div className="org-section">
              <p className="card-text fC flexDC">
                {" "}
                The formulation of Lumina's products is truly incredible. They
                utilize the latest advancements in skincare technology to ensure
                deep and lasting results.
              </p>
              <p className="card-text">
                {" "}
                We highly recommend Lumina for their commitment to using
                high-quality, sustainable ingredients and their dedication to
                comprehensive skin wellness.
              </p>
            </div>

            <div className="ts-tiny-div">
              <div className="smallestp fStart">consult a proffessional?</div>
              <button className="open-btn" onClick={handleOpenDisplay}>
                <TinyDiv
                  imgtext={"Dr. Ananya Sharma"}
                  imageUrl={drimg}
                  tinyText={" Dermatologist, iis."}
                />
              </button>

              <button className="open-btn" onClick={handleOpenDisplay}>
                <TinyDiv
                  imgtext={"Ashley Garnett"}
                  imageUrl={
                    "https://plus.unsplash.com/premium_photo-1705009607198-9664f0b4564c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  tinyText={"certified Esthetician"}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="marBs">
          <div className="border-top">
            <p className="small underline">Best Sellers</p>
            
          </div>

          <ProductList products={Heroproducts} />
        </div>
      </div>
    </section>
  );
};

export default TinySection;
