/* eslint-disable react/no-unescaped-entities */
import "./sidebars.css";

function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="container trends">
        <h3>What's happening</h3>
        <div className="my-2">
          <p className="m-0 desc-text-color">Programming - Trending</p>
          <p className="fw-bolder m-0">#MongoVsSequelize</p>
          <p className="m-0 desc-text-color">97.5K tweets</p>
        </div>
        <div className="my-2">
          <p className="m-0 desc-text-color">Entertainment - Trending</p>
          <p className="fw-bolder m-0">#StarWars</p>
          <p className="m-0 desc-text-color">97.5K tweets</p>
        </div>
        <div className="my-2">
          <p className="m-0 desc-text-color">News - Trending</p>
          <p className="fw-bolder m-0">#LifeInMars</p>
          <p className="m-0 desc-text-color">97.5K tweets</p>
        </div>
      </div>
      <div className="container to-follow mt-3">
        <h3>Who to follow</h3>
        <div className="d-flex align-items-center justify-content-between">
          <img
            src="/src/assets/twitter-icons/icons/default_profile_400x400.png"
            alt=""
            // className="mx-2"
          />
          <div className="p-3 name-tag">
            <p className="fw-bolder m-0">Hack Academy</p>
            <p className="m-0 desc-text-color">@HackAcademyDev</p>
          </div>

          <a className="nav-btn btn-follow">Follow</a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <img
            src="/src/assets/twitter-icons/icons/default_profile_400x400.png"
            alt="Imagen de perfil por defecto en twitter, silueta de persona sin rasgos espeficifos"
            // className="mx-2"
          />
          <div className="p-3 name-tag">
            <p className="fw-bolder m-0">JavaScript</p>
            <p className="m-0 desc-text-color">@JavaScript</p>
          </div>

          <a className="nav-btn btn-follow">Follow</a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <img
            src="/src/assets/twitter-icons/icons/default_profile_400x400.png"
            alt="Imagen de perfil por defecto en twitter, silueta de persona sin rasgos espeficifos"
            // className="mx-2"
          />
          <div className="p-3 name-tag">
            <p className="text-start fw-bolder m-0">MongoDB</p>
            <p className="m-0 desc-text-color">@MongoDB</p>
          </div>

          <a className="nav-btn btn-follow">Follow</a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <img
            src="/src/assets/twitter-icons/icons/default_profile_400x400.png"
            alt="Imagen de perfil por defecto en twitter, silueta de persona sin rasgos espeficifos"
            // className="mx-2"
          />
          <div className="p-3 name-tag">
            <p className="fw-bolder m-0">Node.js</p>
            <p className="m-0 desc-text-color">@Nodejs</p>
          </div>

          <a className="nav-btn btn-follow">Follow</a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <img
            src="/src/assets/twitter-icons/icons/default_profile_400x400.png"
            alt="Imagen de perfil por defecto en twitter, silueta de persona sin rasgos espeficifos"
            // className="mx-2"
          />
          <div className="p-3 name-tag">
            <p className="fw-bolder m-0">MDN Web Docs</p>
            <p className="m-0 desc-text-color">@MozDevNet</p>
          </div>

          <a className="nav-btn btn-follow">Follow</a>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
