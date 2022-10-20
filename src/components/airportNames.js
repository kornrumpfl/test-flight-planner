import styled from "styled-components";

export default function AirportNames({ items }) {
  console.log(items);
  return (
    <Div>
      <UlSuggestions>
        {items.map((item) => {
          return (
            <div>
              <li>{item.airport_name}</li>
              <li>{item.icao_code}</li>
            </div>
          );
        })}
      </UlSuggestions>
    </Div>
  );
}

const UlSuggestions = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 800px;
  list-style: none;
  li {
    background-color: #d2daff;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
