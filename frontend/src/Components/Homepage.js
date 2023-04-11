import React from 'react';
import mountain from '../assets/images/mountain.webp';
import visual from '../assets/images/visual.webp';
import { Link } from 'react-router-dom';

export default function Homepage({setPathName}) {

 return(

  <React.Fragment>

  <div className="picture">
     <img src={mountain} alt="mountains" />
     </div>
 
  <h2>Information about climate change</h2>

  <div className="card-wrapper">
    <div className="card" id="about">
  <p className="about">
    On our page various charts are available that tells data about the
    different research results of global climate change. Below you can see
    the available visualization views. You can also register and custom your
    own visualization views to share with your friends!
  </p></div>
  </div>

  <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>Visualization 1</p>
            </div>
            <img
              className="visual"
              src={visual}
              alt="visualization1"
            />
          </div>
          <hr />
          <p>Short information text about the visualization here</p>
          <Link onClick={() => setPathName("/v1")} to="/v1">Open Visualization</Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>Visualization 2</p>
            </div>
            <img
              className="visual"
              src={visual}
              alt="visualization2"
            />
          </div>
          <hr />
          <p>Short information text about the visualization here</p>
          <Link onClick={() => setPathName("/v2")} to="/v2">Open Visualization</Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>Visualization 3</p>
            </div>
            <img
              className="visual"
              src={visual}
              alt="visualization3"
            />
          </div>
          <hr />
          <p>Short information text about the visualization here</p>
          <Link onClick={() => setPathName("/v3")} to="/v3">Open Visualization</Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>Visualization 4</p>
            </div>
            <img
              className="visual"
              src={visual}
              alt="visualization4"
            />
          </div>
          <hr />
          <p>Short information text about the visualization here</p>
          <Link onClick={() => setPathName("/v4")} to="v4">Open Visualization</Link>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div>
            <div className="title">
              <p>Visualization 5</p>
            </div>
            <img
              className="visual"
              src={visual}
              alt="visualization5"
            />
          </div>
          <hr />
          <p>Short information text about the visualization here</p>
          <Link onClick={() => setPathName("/v5")} to="v5">Open Visualization</Link>
        </div>
      </div>

  </React.Fragment>

 );

};