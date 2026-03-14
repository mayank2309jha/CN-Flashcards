// Computer Networks — Flashcard Dictionary
// Each entry: { id, question, answer }

const CN_QNA = [
  {
    id: 1,
    question: "What is the OSI model?",
    answer:
      "A 7-layer conceptual model for network communication: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
  },
  {
    id: 2,
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP is connection-oriented and reliable with ordered delivery. UDP is connectionless, faster, and does not guarantee delivery.",
  },
  {
    id: 3,
    question: "What is a subnet mask?",
    answer:
      "A 32-bit number used with an IP address to determine the network portion and host portion of the address.",
  },
  {
    id: 4,
    question: "What is the TCP three-way handshake?",
    answer: "Connection establishment: SYN → SYN-ACK → ACK.",
  },
  {
    id: 5,
    question: "What is DNS?",
    answer: "Domain Name System translates domain names to IP addresses.",
  },
  {
    id: 6,
    question: "What is a hub, switch, and router?",
    answer:
      "Hub broadcasts to all ports, switch forwards using MAC addresses, router forwards packets between networks using IP.",
  },
  {
    id: 7,
    question: "What is DHCP?",
    answer:
      "Protocol that automatically assigns IP addresses and network configuration to hosts.",
  },
  {
    id: 8,
    question: "What is the difference between IPv4 and IPv6?",
    answer:
      "IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses and solves address exhaustion.",
  },

  {
    id: 9,
    question: "What is packet switching?",
    answer:
      "A method where data is divided into packets that travel independently through the network.",
  },
  {
    id: 10,
    question: "What is circuit switching?",
    answer:
      "A communication method where a dedicated path is established before data transfer (e.g., traditional telephone networks).",
  },
  {
    id: 11,
    question: "What is latency?",
    answer: "The time taken for a packet to travel from source to destination.",
  },
  {
    id: 12,
    question: "What is throughput?",
    answer:
      "The amount of data successfully transmitted over a network per unit time.",
  },
  {
    id: 13,
    question: "What is bandwidth?",
    answer: "The maximum data transfer capacity of a network link.",
  },
  {
    id: 14,
    question: "What is jitter?",
    answer: "Variation in packet delay across a network.",
  },
  {
    id: 15,
    question: "What is encapsulation?",
    answer:
      "The process of adding headers/trailers as data moves down the OSI layers.",
  },
  {
    id: 16,
    question: "What is decapsulation?",
    answer: "Removing protocol headers as data moves up the network stack.",
  },
  {
    id: 17,
    question: "What is ARP?",
    answer: "Address Resolution Protocol maps IP addresses to MAC addresses.",
  },
  {
    id: 18,
    question: "What is RARP?",
    answer:
      "Reverse Address Resolution Protocol maps MAC addresses to IP addresses.",
  },

  {
    id: 19,
    question: "What is MAC address?",
    answer: "A unique 48-bit hardware address assigned to network interfaces.",
  },
  {
    id: 20,
    question: "What is a broadcast address?",
    answer: "An address used to send a packet to all devices on a network.",
  },
  {
    id: 21,
    question: "What is a unicast transmission?",
    answer: "Communication between one sender and one receiver.",
  },
  {
    id: 22,
    question: "What is multicast?",
    answer: "Sending packets to multiple specific receivers.",
  },
  {
    id: 23,
    question: "What is a collision domain?",
    answer: "A network segment where packet collisions can occur.",
  },
  {
    id: 24,
    question: "What is CSMA/CD?",
    answer:
      "Carrier Sense Multiple Access with Collision Detection — used in Ethernet.",
  },
  {
    id: 25,
    question: "What is CSMA/CA?",
    answer:
      "Carrier Sense Multiple Access with Collision Avoidance — used in WiFi.",
  },
  {
    id: 26,
    question: "What is a frame?",
    answer: "A data unit at the Data Link layer.",
  },
  {
    id: 27,
    question: "What is a packet?",
    answer: "A data unit at the Network layer.",
  },
  {
    id: 28,
    question: "What is a segment?",
    answer: "A data unit at the Transport layer.",
  },

  {
    id: 29,
    question: "What is the purpose of TCP?",
    answer:
      "Reliable data transfer with flow control, congestion control, and ordered delivery.",
  },
  {
    id: 30,
    question: "What is flow control?",
    answer: "Mechanism to prevent sender from overwhelming receiver.",
  },
  {
    id: 31,
    question: "What is congestion control?",
    answer: "Mechanism to prevent overloading the network.",
  },
  {
    id: 32,
    question: "What is sliding window protocol?",
    answer: "Flow control technique allowing multiple frames before ACK.",
  },
  {
    id: 33,
    question: "What is stop-and-wait protocol?",
    answer: "Sender waits for acknowledgment before sending next packet.",
  },
  {
    id: 34,
    question: "What is Go-Back-N protocol?",
    answer:
      "If an error occurs, sender retransmits the erroneous packet and all following packets.",
  },
  {
    id: 35,
    question: "What is Selective Repeat ARQ?",
    answer: "Only erroneous packets are retransmitted.",
  },
  {
    id: 36,
    question: "What is TCP congestion window?",
    answer:
      "A limit on the amount of unacknowledged data that can be in transit.",
  },
  {
    id: 37,
    question: "What is Slow Start in TCP?",
    answer: "Congestion control phase where cwnd grows exponentially.",
  },
  {
    id: 38,
    question: "What is congestion avoidance?",
    answer: "Phase where cwnd grows linearly to avoid congestion.",
  },

  {
    id: 39,
    question: "What is Fast Retransmit?",
    answer: "TCP retransmits lost packet after 3 duplicate ACKs.",
  },
  {
    id: 40,
    question: "What is Fast Recovery?",
    answer:
      "TCP algorithm to recover from packet loss without returning to slow start.",
  },
  {
    id: 41,
    question: "What is routing?",
    answer: "Process of selecting paths for packets across networks.",
  },
  {
    id: 42,
    question: "What is a routing table?",
    answer: "A table storing paths to different network destinations.",
  },
  {
    id: 43,
    question: "What is Distance Vector routing?",
    answer: "Routing algorithm based on distance to destination via neighbors.",
  },
  {
    id: 44,
    question: "What is Link State routing?",
    answer:
      "Routing algorithm where each router builds a map of the entire network.",
  },
  {
    id: 45,
    question: "What is the Bellman-Ford algorithm?",
    answer: "Used in distance vector routing protocols.",
  },
  {
    id: 46,
    question: "What is Dijkstra's algorithm used for in networking?",
    answer: "Used in link state routing to compute shortest paths.",
  },
  {
    id: 47,
    question: "What is RIP?",
    answer: "Routing Information Protocol using distance vector routing.",
  },
  {
    id: 48,
    question: "What is OSPF?",
    answer: "Open Shortest Path First — link state routing protocol.",
  },

  {
    id: 49,
    question: "What is BGP?",
    answer:
      "Border Gateway Protocol used for routing between autonomous systems on the Internet.",
  },
  {
    id: 50,
    question: "What is an autonomous system?",
    answer: "A network under a single administrative control.",
  },
  {
    id: 51,
    question: "What is NAT?",
    answer:
      "Network Address Translation maps private IP addresses to a public IP.",
  },
  {
    id: 52,
    question: "What is a private IP address?",
    answer: "IP addresses reserved for internal networks (e.g., 192.168.x.x).",
  },
  {
    id: 53,
    question: "What is a public IP address?",
    answer: "A globally unique IP address used on the Internet.",
  },
  {
    id: 54,
    question: "What is CIDR?",
    answer: "Classless Inter-Domain Routing — flexible IP address allocation.",
  },
  {
    id: 55,
    question: "What is fragmentation?",
    answer: "Breaking packets into smaller pieces to fit network MTU.",
  },
  {
    id: 56,
    question: "What is MTU?",
    answer:
      "Maximum Transmission Unit — largest packet size a network can transmit.",
  },
  {
    id: 57,
    question: "What is ICMP?",
    answer:
      "Internet Control Message Protocol used for diagnostics (e.g., ping).",
  },
  {
    id: 58,
    question: "What is ping?",
    answer: "Utility that uses ICMP to test connectivity.",
  },

  {
    id: 59,
    question: "What is traceroute?",
    answer: "Tool that shows path packets take across networks.",
  },
  {
    id: 60,
    question: "What is HTTP?",
    answer: "Hypertext Transfer Protocol used for web communication.",
  },
  {
    id: 61,
    question: "What is HTTPS?",
    answer: "Secure HTTP using TLS encryption.",
  },
  {
    id: 62,
    question: "What is FTP?",
    answer: "File Transfer Protocol used for file transfer.",
  },
  {
    id: 63,
    question: "What is SMTP?",
    answer: "Simple Mail Transfer Protocol used to send email.",
  },
  {
    id: 64,
    question: "What is POP3?",
    answer: "Protocol used to retrieve emails from a server.",
  },
  {
    id: 65,
    question: "What is IMAP?",
    answer: "Protocol allowing remote email access and synchronization.",
  },
  {
    id: 66,
    question: "What is TLS?",
    answer: "Transport Layer Security used for encrypted communication.",
  },
  {
    id: 67,
    question: "What is SSL?",
    answer: "Older encryption protocol replaced by TLS.",
  },
  {
    id: 68,
    question: "What is socket programming?",
    answer: "Method for communication between processes over networks.",
  },

  {
    id: 69,
    question: "What is port number?",
    answer: "Identifier for a specific process/service on a host.",
  },
  {
    id: 70,
    question: "What is well-known port?",
    answer: "Ports 0-1023 reserved for common services.",
  },
  {
    id: 71,
    question: "What port does HTTP use?",
    answer: "Port 80.",
  },
  {
    id: 72,
    question: "What port does HTTPS use?",
    answer: "Port 443.",
  },
  {
    id: 73,
    question: "What port does DNS use?",
    answer: "Port 53.",
  },
  {
    id: 74,
    question: "What port does FTP use?",
    answer: "Ports 20 and 21.",
  },
  {
    id: 75,
    question: "What port does SMTP use?",
    answer: "Port 25.",
  },
  {
    id: 76,
    question: "What is load balancing?",
    answer: "Distributing network traffic across multiple servers.",
  },
  {
    id: 77,
    question: "What is CDN?",
    answer:
      "Content Delivery Network — distributed servers for faster content delivery.",
  },
  {
    id: 78,
    question: "What is QoS?",
    answer: "Quality of Service — mechanisms to prioritize network traffic.",
  },

  {
    id: 79,
    question: "What is traffic shaping?",
    answer: "Controlling the rate of network traffic.",
  },
  {
    id: 80,
    question: "What is token bucket algorithm?",
    answer:
      "Traffic control mechanism allowing bursts but limiting average rate.",
  },
  {
    id: 81,
    question: "What is leaky bucket algorithm?",
    answer: "Traffic shaping method sending packets at a constant rate.",
  },
  {
    id: 82,
    question: "What is firewall?",
    answer: "Network security system that filters incoming/outgoing traffic.",
  },
  {
    id: 83,
    question: "What is IDS?",
    answer: "Intrusion Detection System that monitors suspicious activity.",
  },
  {
    id: 84,
    question: "What is IPS?",
    answer: "Intrusion Prevention System that blocks malicious traffic.",
  },
  {
    id: 85,
    question: "What is VPN?",
    answer:
      "Virtual Private Network providing encrypted communication over public networks.",
  },
  {
    id: 86,
    question: "What is tunneling?",
    answer: "Encapsulating packets inside another protocol.",
  },
  {
    id: 87,
    question: "What is MPLS?",
    answer: "Multiprotocol Label Switching used for high-performance routing.",
  },
  {
    id: 88,
    question: "What is SDN?",
    answer:
      "Software Defined Networking separating control plane from data plane.",
  },

  {
    id: 89,
    question: "What is a control plane?",
    answer: "Part of network that makes routing decisions.",
  },
  {
    id: 90,
    question: "What is a data plane?",
    answer: "Part of network that forwards packets.",
  },
  {
    id: 91,
    question: "What is 5G?",
    answer:
      "Fifth generation mobile network offering high bandwidth and low latency.",
  },
  {
    id: 92,
    question: "What is edge computing?",
    answer:
      "Processing data near the data source instead of centralized servers.",
  },
  {
    id: 93,
    question: "What is IoT?",
    answer: "Internet of Things — network of connected devices.",
  },
  {
    id: 94,
    question: "What is network virtualization?",
    answer: "Creating virtual networks over physical infrastructure.",
  },
  {
    id: 95,
    question: "What is packet loss?",
    answer: "Packets failing to reach destination.",
  },
  {
    id: 96,
    question: "What is retransmission?",
    answer: "Resending lost packets.",
  },
  {
    id: 97,
    question: "What is RTT?",
    answer:
      "Round Trip Time — time for packet to travel to destination and back.",
  },
  {
    id: 98,
    question: "What is a gateway?",
    answer:
      "A device that connects different networks using different protocols.",
  },
  {
    id: 99,
    question: "What is a proxy server?",
    answer:
      "An intermediary server that forwards requests between client and server.",
  },
  {
    id: 100,
    question: "What is caching in networking?",
    answer:
      "Storing frequently accessed data closer to users to reduce latency.",
  },
];

export default CN_QNA;
