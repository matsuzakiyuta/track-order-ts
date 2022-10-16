import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

interface TrackOrderTableProps {
  trackOrders: TrackOrder[];
}

export interface TrackOrder {
  title: string;
  artist: string;
  note: string;
}

class TrackOrderTable extends React.Component<TrackOrderTableProps> {
  render() {
    const trackOrders: TrackOrder[] = this.props.trackOrders;
    return (
      <TableContainer>
        <Table variant={"striped"} colorScheme={"blue"} size={"lg"}>
          <Thead>
            <Tr>
              <Th>曲順</Th>
              <Th>タイトル</Th>
              <Th>アーティスト</Th>
              <Th>備考</Th>
            </Tr>
          </Thead>
          <Tbody>
            {trackOrders.map((trackOrder, index) => (
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{trackOrder.title}</Td>
                <Td>{trackOrder.artist}</Td>
                <Td>{trackOrder.note}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
}

export default TrackOrderTable;
