export const site = {
  name: "Physara",
  tagline: "Train the body before the world",
  description:
    "Physara is GPU-native simulation infrastructure for teaching humanoid robots physical skills.",
  email: "hello@physara.ai",
  location: "Lagos Island, Lagos, Nigeria",
  url: "https://physara.vercel.app",
};

export const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/live-sim", label: "Live sim" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const proofStats = [
  { value: 18.4, suffix: "×", label: "Illustrative simulation throughput" },
  { value: 2.48, suffix: "M", label: "Illustrative episodes generated" },
  { value: 93.7, suffix: "%", label: "Illustrative task success" },
  { value: 24, suffix: "/7", label: "Synthetic experience pipeline" },
];

export const problemCards = [
  {
    kicker: "Hardware hours",
    title: "Scarce",
    body: "Limited rigs mean fewer experiments, fewer failures observed and slower iteration.",
  },
  {
    kicker: "Edge cases",
    title: "Hidden",
    body: "Rare contact and recovery events are exactly the moments that are hardest to gather.",
  },
  {
    kicker: "Transfer",
    title: "Uncertain",
    body: "A policy that looks good in simulation still needs evidence that its behavior survives reality.",
  },
];

export const capabilities = [
  {
    index: "01 / Dynamics",
    title: "Physical contact",
    body: "Model the forces between feet, hands, objects and surfaces, with enough detail to understand what caused a movement to succeed or fail.",
    footer: "Inspect → Force / movement / slip",
  },
  {
    index: "02 / Manipulation",
    title: "Hand and object control",
    body: "Practise reaching, grasping, placing and reorienting objects across different shapes, surfaces and hand positions.",
    footer: "Train → Hand + object + surface",
  },
  {
    index: "03 / Recovery",
    title: "Recovery testing",
    body: "Add pushes, slips and terrain changes so the robot learns what to do when the original movement no longer works.",
    footer: "Stress → Disturbance / recovery",
  },
  {
    index: "04 / Evaluation",
    title: "New environments",
    body: "Keep test environments separate so teams can see whether a skill still works somewhere new.",
    footer: "Check performance → Generalization / stability",
  },
  {
    index: "05 / Compute",
    title: "Parallel practice",
    body: "Run many variations of a task at the same time, giving the robot more practice before a hardware trial.",
    footer: "Scale → Environments / trials",
  },
  {
    index: "06 / Transfer",
    title: "Ready for hardware",
    body: "Keep a clear record of what worked, what failed and what is ready for controlled hardware testing.",
    footer: "Prepare for hardware → Policy / benchmark / trace",
  },
];

export const useCases = [
  {
    num: "01",
    mark: "◎",
    title: "Manipulation",
    body: "Grasping, placing, opening, reorientation and dexterous contact across variable objects, surfaces and hand poses.",
    best: "Best for → contact-rich skills",
  },
  {
    num: "02",
    mark: "↯",
    title: "Recovery",
    body: "Slips, pushes, imbalance and collision events where the right behavior starts after the nominal plan has already failed.",
    best: "Best for → robustness",
  },
  {
    num: "03",
    mark: "⌁",
    title: "Locomotion",
    body: "Uneven terrain, stairs, gait transitions and stabilization with changing friction and body-state conditions.",
    best: "Best for → dynamic control",
  },
  {
    num: "04",
    mark: "∿",
    title: "Large-scale skill training",
    body: "Run many related tasks and environments when a team needs a wider base of physical experience.",
    best: "Best for → broader practice",
  },
];

export const architecture = [
  {
    num: "01 / Model",
    icon: "◒",
    title: "Body model",
    body: "Articulated structure, inertial properties, sensors and actuator behavior.",
    color: "var(--accent)",
  },
  {
    num: "02 / World",
    icon: "⌁",
    title: "Contact world",
    body: "Surfaces, friction, collisions, terrain and randomized physical conditions.",
    color: "var(--violet)",
  },
  {
    num: "03 / Learn",
    icon: "∿",
    title: "Skill training",
    body: "Train the same skill across many environments and conditions.",
    color: "var(--accent)",
  },
  {
    num: "04 / Stress",
    icon: "↯",
    title: "Stress testing",
    body: "Test slips, pushes, balance loss and recovery before hardware trials.",
    color: "var(--mag)",
  },
  {
    num: "05 / Transfer",
    icon: "↗",
    title: "Best behaviour",
    body: "Keep the best behaviours ready for controlled hardware testing.",
    color: "var(--lime)",
  },
];

export const pipelineSteps = [
  { no: "01", title: "Build task", sub: "Scene + body", status: "Ready" },
  {
    no: "02",
    title: "Change the conditions",
    sub: "Surface + objects",
    status: "Active",
  },
  {
    no: "03",
    title: "Practise the skill",
    sub: "Repeated trials",
    status: "2.48M eps",
  },
  {
    no: "04",
    title: "Test weak points",
    sub: "Slips + balance",
    status: "Found 18",
    risk: true,
  },
  {
    no: "05",
    title: "Check performance",
    sub: "New environments",
    status: "93.7%",
  },
  {
    no: "06",
    title: "Prepare for hardware",
    sub: "Best behaviour",
    status: "Ready",
  },
];

export const transferSteps = [
  {
    num: "01",
    title: "Experience",
    body: "Generate many physical variations around the same task, including failures that would be expensive to gather by hand.",
    tag: "Simulation",
  },
  {
    num: "02",
    title: "Policy",
    body: "Train, evaluate and compare candidate behaviors with the same telemetry and holdout scenarios.",
    tag: "Learning",
  },
  {
    num: "03",
    title: "Hardware",
    body: "Move the best-performing policy toward controlled physical trials and feed the evidence back into the next simulation cycle.",
    tag: "Validation",
  },
];

export const traceLines = [
  { no: "01", label: "Foot contact", time: "0.00 s" },
  { no: "02", label: "Disturbance injected", time: "0.42 s" },
  { no: "03", label: "Center of mass shifted", time: "0.58 s", active: true },
  { no: "04", label: "Recovery torque", time: "0.74 s" },
  { no: "05", label: "Stable stance", time: "1.06 s" },
];

export type Scenario = {
  id: string;
  label: string;
  name: string;
  speed: string;
  force: string;
  success: string;
  delta: string;
  balance: number;
  contact: number;
  torque: string;
  torquePct: number;
  slip: string;
  slipPct: number;
  note: string;
  gpu: string;
};

export const scenarios: Scenario[] = [
  {
    id: "recovery",
    label: "Recovery",
    name: "Uneven terrain recovery",
    speed: "18.4×",
    force: "2.18 kN",
    success: "93.7%",
    delta: "+7.2%",
    balance: 88,
    contact: 72,
    torque: "42.8 N·m",
    torquePct: 76,
    slip: "0.06 m/s",
    slipPct: 28,
    note: "Overall, the body is stable and in control.",
    gpu: "87%",
  },
  {
    id: "manipulation",
    label: "Manipulation",
    name: "Fragile object manipulation",
    speed: "22.7×",
    force: "1.76 kN",
    success: "91.4%",
    delta: "+5.4%",
    balance: 94,
    contact: 83,
    torque: "27.4 N·m",
    torquePct: 49,
    slip: "0.02 m/s",
    slipPct: 11,
    note: "Grip is steady; contact pressure stays within a safe band.",
    gpu: "79%",
  },
  {
    id: "locomotion",
    label: "Locomotion",
    name: "Stairs and turning recovery",
    speed: "16.2×",
    force: "2.46 kN",
    success: "95.1%",
    delta: "+9.1%",
    balance: 81,
    contact: 68,
    torque: "51.3 N·m",
    torquePct: 88,
    slip: "0.11 m/s",
    slipPct: 44,
    note: "Balance dips on the turn, but the robot recovers each time.",
    gpu: "92%",
  },
];

export const teamMembers = [
  {
    name: "Nnamdi Ameh",
    role: "Founder / CEO",
    country: "Nigeria",
    bio: "Building Physara around a simple idea: robots need better practice before they need more hardware time.",
    tags: ["Strategy", "Robotics", "Product"],
    initial: "N",
    photo: "/1.jpg",
  },
  {
    name: "Lerato Maseko",
    role: "Head of AI and Simulation",
    country: "South Africa",
    bio: "Leads the simulation stack, from articulated body models to contact dynamics, procedural worlds and the physics assumptions that make transfer meaningful.",
    tags: ["Simulation", "Physics", "Systems"],
    initial: "L",
    photo: "/2.jpg",
  },
  {
    name: "Mwende Wanjiku",
    role: "Robotics Lead",
    country: "Kenya",
    bio: "Owns the learning loop across reinforcement learning, imitation learning and evaluation, turning simulated experience into policies worth testing on hardware.",
    tags: ["Repeated trials", "Robotics", "Evaluation"],
    initial: "M",
    photo: "/6.jpg",
  },
  {
    name: "Kojo Mensah",
    role: "Research Engineer",
    country: "Ghana",
    bio: "Focuses on dexterous manipulation, contact-rich tasks and failure discovery, expanding the edge cases the simulator can expose before they cost a robot-hour.",
    tags: ["Manipulation", "Research", "Contact"],
    initial: "K",
    photo: "/3.jpg",
  },
  {
    name: "Eric Niyonzima",
    role: "Systems & Infrastructure",
    country: "Rwanda",
    bio: "Builds the distributed compute and experiment infrastructure that lets Physara run high-throughput simulation reliably across large training workloads.",
    tags: ["GPU Systems", "Infrastructure", "Scale"],
    initial: "E",
    photo: "/5.jpg",
  },
];
