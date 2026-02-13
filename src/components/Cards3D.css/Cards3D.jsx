import "./Cards3D.css";

export default function Cards3D() {
  return (
    <>
      <div className="spacer"></div>

      <div className="wrapper">
        <div className="cards">
          <div className="card-wrapper">
            <div className="card one"></div>
          </div>

          <div className="card-wrapper">
            <div className="card two"></div>
          </div>

          <div className="card-wrapper">
            <div className="card three"></div>
          </div>

          <div className="card-wrapper">
            <div className="card four"></div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
    </>
  );
}
