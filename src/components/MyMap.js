import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function MyMap() {
  const position = [53.633354, 9.999303];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={10}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
