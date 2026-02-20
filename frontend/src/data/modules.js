export const modules = [
  {
    id: 'osi',
    title: 'OSI Model',
    summary: 'Understand all seven layers and how data moves between them.',
    lesson: [
      'The OSI model is a 7-layer framework used to explain network communication.',
      'From bottom to top: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
      'As data travels down the layers, each layer adds headers. As it travels up, headers are removed.'
    ],
    quiz: [
      {
        question: 'Which OSI layer is responsible for routing packets?',
        options: ['Transport', 'Network', 'Application', 'Session'],
        answer: 'Network'
      },
      {
        question: 'How many layers are in the OSI model?',
        options: ['4', '5', '7', '8'],
        answer: '7'
      }
    ]
  },
  {
    id: 'ipv4',
    title: 'IPv4 Addressing',
    summary: 'Learn IPv4 format, classes, and private vs public addressing.',
    lesson: [
      'IPv4 addresses are 32 bits represented as four decimal octets.',
      'Example: 192.168.1.10 where each octet ranges from 0-255.',
      'Private ranges include 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.'
    ],
    quiz: [
      {
        question: 'Which is a private IPv4 range?',
        options: ['8.8.8.0/24', '172.20.0.0/16', '1.1.1.0/24', '203.0.113.0/24'],
        answer: '172.20.0.0/16'
      },
      {
        question: 'How many bits are in an IPv4 address?',
        options: ['16', '32', '64', '128'],
        answer: '32'
      }
    ]
  },
  {
    id: 'subnetting',
    title: 'Subnetting Basics',
    summary: 'Break networks into smaller pieces with CIDR and subnet masks.',
    lesson: [
      'Subnetting divides one network into multiple smaller logical networks.',
      'CIDR notation (e.g. /24) shows how many bits belong to the network portion.',
      'A /24 subnet has 256 addresses with 254 usable host addresses.'
    ],
    quiz: [
      {
        question: 'How many usable hosts are in a /26 subnet?',
        options: ['62', '64', '126', '30'],
        answer: '62'
      },
      {
        question: 'What does /24 mean?',
        options: [
          '24 host bits',
          '24 network bits',
          '24 subnets',
          '24 routers'
        ],
        answer: '24 network bits'
      }
    ]
  },
  {
    id: 'routing',
    title: 'Routing Basics',
    summary: 'Understand default gateways, static routes, and dynamic protocols.',
    lesson: [
      'Routers forward packets between networks based on routing tables.',
      'A default route is used when no specific route matches a destination.',
      'Dynamic routing protocols include OSPF and RIP.'
    ],
    quiz: [
      {
        question: 'What does a default gateway do?',
        options: [
          'Converts MAC addresses',
          'Routes unknown destination traffic to another router',
          'Encrypts packets',
          'Assigns IP addresses'
        ],
        answer: 'Routes unknown destination traffic to another router'
      },
      {
        question: 'Which is a dynamic routing protocol?',
        options: ['ARP', 'OSPF', 'DNS', 'NAT'],
        answer: 'OSPF'
      }
    ]
  },
  {
    id: 'ports',
    title: 'Common Ports & Protocols',
    summary: 'Know major TCP/UDP ports and what services run on them.',
    lesson: [
      'Ports identify specific services on a host.',
      'Examples: HTTP 80, HTTPS 443, DNS 53, SSH 22.',
      'Knowing common ports helps with troubleshooting and firewall rules.'
    ],
    quiz: [
      {
        question: 'Which port is typically used by HTTPS?',
        options: ['80', '22', '443', '3389'],
        answer: '443'
      },
      {
        question: 'Which protocol commonly uses port 53?',
        options: ['SSH', 'FTP', 'DNS', 'SMTP'],
        answer: 'DNS'
      }
    ]
  }
];
