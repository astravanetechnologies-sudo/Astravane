/* Open roles shown in the Careers section. Hardcoded for now (concept) — edit this list to add or remove vacancies. */

export const vacancies = [
  {
    id: "full-stack-engineer",
    title: "Full Stack Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Lahore, Pakistan",
    summary:
      "Build and ship features across our web products and client platforms — from database and APIs to polished, responsive interfaces.",
    responsibilities: [
      "Design, build and maintain web applications end to end with React, Next.js and Node.js.",
      "Model data and write APIs on PostgreSQL, with care for performance and security.",
      "Work with designers and product leads to turn requirements into shipped features.",
      "Review code, write tests and help keep our delivery pipeline healthy.",
    ],
    requirements: [
      "3+ years building production web applications.",
      "Strong JavaScript / TypeScript, React and a Node.js back end.",
      "Solid SQL and experience with relational databases.",
      "Comfort with Git, code review and cloud deployment.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "blockchain-engineer",
    title: "Blockchain Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Lahore, Pakistan",
    summary:
      "Design and build secure smart contracts and the services around them, and help our teams bring decentralised features into real products.",
    responsibilities: [
      "Write, test and deploy smart contracts on EVM-compatible networks.",
      "Build the off-chain services, indexers and wallet integrations that connect contracts to applications.",
      "Lead security reviews, threat modelling and gas optimisation.",
      "Advise product teams on where blockchain fits — and where it does not.",
    ],
    requirements: [
      "2+ years of hands-on smart contract development in Solidity.",
      "Experience with Hardhat or Foundry, ethers.js or viem, and contract testing.",
      "Good grasp of cryptography basics, token standards and common attack patterns.",
      "Back-end experience in TypeScript, Go or Rust is a plus.",
    ],
    stack: ["Solidity", "EVM", "Hardhat", "ethers.js", "TypeScript"],
  },
];
