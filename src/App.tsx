import React from "react";
import "./App.css";
import TrackOrderTable, { TrackOrder } from "./components/TrackOrderTable";
import { shuffleArray } from "./utils/utils";
import { Container } from "@chakra-ui/react";
import InputForm from "./components/InputForm";
import { GrDocumentCsv } from "react-icons/gr";

const tracks: TrackOrder[] = [
  {
    title: "track01",
    artist: "artist01",
    note: "note01",
  },
  {
    title: "track02",
    artist: "artist02",
    note: "note02",
  },
];

function App() {
  const orderedTracks = shuffleArray(tracks);
  return (
    <div className="App">
      <Container maxW="container.lg">
        <InputForm
          icon={<GrDocumentCsv />}
          type="text"
          placeholder="CSVをあげてください"
        />
        <div className="e-track-order-title">曲順</div>
        <div className="e-table">
          <TrackOrderTable trackOrders={orderedTracks} />
        </div>
      </Container>
    </div>
  );
}

export default App;
