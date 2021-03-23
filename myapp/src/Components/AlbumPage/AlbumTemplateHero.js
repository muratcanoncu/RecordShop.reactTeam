import React from "react";
import { Row, Col } from "react-bootstrap";
const AlbumTemplateHero = (props) => {
  const {
    artist,
    title,
    releaseYear,
    genre,
    price,
    image,
    // trackList,
  } = props.albumData;
  return (
    <Row className="m-3 pb-4" style={{ lineHeight: "1" }}>
      <Col className="d-flex flex-align-items-center justify-content-center">
        <div className="mt-3 w-100 text-center">
          <h1>{title}</h1>
          <p>
            {artist}, {releaseYear} {genre}
          </p>

          <p>Price: {price} €</p>
          <table className="w-100 mt-4">
            <thead style={{ borderBottom: "1px solid #ff7700" }}>
              <tr className="text-left ">
                <th>#</th>
                <th>Name</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {props.albumData.trackList.map((track, index) => {
                return (
                  <>
                    <tr key={track.id} className="text-left">
                      <td className="py-1">{track.no}</td>
                      <td>{track.title}</td>
                      <td>{track.length}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </Col>
      <Col>
        <img style={{ height: "60vh", width: "90%" }} src={image} alt="album" />
      </Col>
    </Row>
  );
};

export default AlbumTemplateHero;
