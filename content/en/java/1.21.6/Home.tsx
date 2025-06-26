import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <p>
      The Minecraft server accepts connections from TCP clients and communicates
      with them using packets. A packet is a sequence of bytes sent over the TCP
      connection. The meaning of a packet depends both on its packet ID and the
      current state of the connection. The initial state of each connection is
      Handshaking, and state is switched using the packets Handshake and Login
      Success.
    </p>
  );
}
