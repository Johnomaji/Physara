"use client";

import { motion } from "motion/react";

const JOINTS: Record<string, [number, number]> = {
  head: [130, 42],
  neck: [130, 62],
  shoulderL: [96, 86],
  shoulderR: [164, 86],
  elbowL: [74, 140],
  elbowR: [186, 138],
  wristL: [62, 196],
  wristR: [198, 190],
  hipL: [108, 176],
  hipR: [152, 176],
  kneeL: [100, 258],
  kneeR: [160, 256],
  ankleL: [94, 330],
  ankleR: [166, 328],
};

function Bone({
  from,
  to,
  width = 3.4,
}: {
  from: [number, number];
  to: [number, number];
  width?: number;
}) {
  return (
    <line
      x1={from[0]}
      y1={from[1]}
      x2={to[0]}
      y2={to[1]}
      stroke="var(--accent)"
      strokeWidth={width}
      strokeLinecap="round"
      opacity={0.85}
    />
  );
}

function Joint({ at, r = 5.5 }: { at: [number, number]; r?: number }) {
  return (
    <circle
      cx={at[0]}
      cy={at[1]}
      r={r}
      fill="var(--panel)"
      stroke="var(--accent)"
      strokeWidth={2.4}
    />
  );
}

/** A limb segment group that pivots around its parent joint. */
function Limb({
  pivot,
  range,
  duration,
  delay = 0,
  children,
}: {
  pivot: [number, number];
  range: [number, number];
  duration: number;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.g
      style={{
        transformBox: "view-box",
        transformOrigin: `${pivot[0]}px ${pivot[1]}px`,
      }}
      animate={{ rotate: [range[0], range[1], range[0]] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.g>
  );
}

export function RobotRig({
  className = "",
  showForce = true,
}: {
  className?: string;
  showForce?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 260 380"
      className={className}
      role="img"
      aria-label="Simulated humanoid robot maintaining balance under an external contact force"
      style={{ filter: "drop-shadow(0 0 22px var(--accent-soft))" }}
    >
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="forceGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--mag)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--mag)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* orbit rings */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        style={{ transformBox: "view-box", transformOrigin: "130px 300px" }}
        opacity={0.5}
      >
        <ellipse
          cx={130}
          cy={300}
          rx={118}
          ry={34}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity={0.3}
        />
        <ellipse
          cx={130}
          cy={300}
          rx={88}
          ry={25}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity={0.22}
          strokeDasharray="5 7"
        />
      </motion.g>

      <circle cx={130} cy={46} r={52} fill="url(#halo)" />

      {/* whole-body sway: the balance correction */}
      <motion.g
        animate={{ rotate: [-1.6, 1.6, -1.6], y: [0, -3, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformBox: "view-box", transformOrigin: "130px 340px" }}
      >
        {/* torso */}
        <Bone from={JOINTS.neck} to={[130, 176]} width={4} />
        <Bone from={JOINTS.shoulderL} to={JOINTS.shoulderR} />
        <Bone from={JOINTS.hipL} to={JOINTS.hipR} />
        <path
          d="M104 88 L156 88 L150 174 L110 174 Z"
          fill="var(--accent)"
          fillOpacity={0.07}
          stroke="var(--accent)"
          strokeOpacity={0.35}
          strokeWidth={1.4}
        />

        {/* head */}
        <circle
          cx={JOINTS.head[0]}
          cy={JOINTS.head[1]}
          r={17}
          fill="var(--panel)"
          stroke="var(--accent)"
          strokeWidth={2.6}
        />
        <circle cx={124} cy={40} r={2.6} fill="var(--accent)" />
        <circle cx={136} cy={40} r={2.6} fill="var(--accent)" />

        {/* left arm */}
        <Limb pivot={JOINTS.shoulderL} range={[-7, 6]} duration={4.1}>
          <Bone from={JOINTS.shoulderL} to={JOINTS.elbowL} />
          <Limb pivot={JOINTS.elbowL} range={[4, -10]} duration={3.3} delay={0.3}>
            <Bone from={JOINTS.elbowL} to={JOINTS.wristL} />
            <Joint at={JOINTS.wristL} r={4.6} />
          </Limb>
          <Joint at={JOINTS.elbowL} />
        </Limb>

        {/* right arm */}
        <Limb pivot={JOINTS.shoulderR} range={[6, -8]} duration={4.6} delay={0.5}>
          <Bone from={JOINTS.shoulderR} to={JOINTS.elbowR} />
          <Limb pivot={JOINTS.elbowR} range={[-5, 9]} duration={3.7} delay={0.2}>
            <Bone from={JOINTS.elbowR} to={JOINTS.wristR} />
            <Joint at={JOINTS.wristR} r={4.6} />
          </Limb>
          <Joint at={JOINTS.elbowR} />
        </Limb>

        {/* left leg */}
        <Limb pivot={JOINTS.hipL} range={[-2.5, 2.5]} duration={5.8}>
          <Bone from={JOINTS.hipL} to={JOINTS.kneeL} />
          <Limb pivot={JOINTS.kneeL} range={[2, -3]} duration={4.9} delay={0.4}>
            <Bone from={JOINTS.kneeL} to={JOINTS.ankleL} />
            <Bone from={JOINTS.ankleL} to={[76, 342]} width={4.5} />
            <Joint at={JOINTS.ankleL} r={4.6} />
          </Limb>
          <Joint at={JOINTS.kneeL} />
        </Limb>

        {/* right leg */}
        <Limb pivot={JOINTS.hipR} range={[2.5, -2.5]} duration={5.4} delay={0.6}>
          <Bone from={JOINTS.hipR} to={JOINTS.kneeR} />
          <Limb pivot={JOINTS.kneeR} range={[-3, 2]} duration={4.5} delay={0.2}>
            <Bone from={JOINTS.kneeR} to={JOINTS.ankleR} />
            <Bone from={JOINTS.ankleR} to={[184, 340]} width={4.5} />
            <Joint at={JOINTS.ankleR} r={4.6} />
          </Limb>
          <Joint at={JOINTS.kneeR} />
        </Limb>

        <Joint at={JOINTS.shoulderL} />
        <Joint at={JOINTS.shoulderR} />
        <Joint at={JOINTS.hipL} />
        <Joint at={JOINTS.hipR} />
        <Joint at={JOINTS.neck} r={4.4} />

        {/* center of mass marker */}
        <motion.circle
          cx={130}
          cy={150}
          r={4}
          fill="var(--lime)"
          animate={{ cx: [126, 134, 126], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {showForce && (
        <>
          <motion.g
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          >
            <line
              x1={236}
              y1={96}
              x2={172}
              y2={134}
              stroke="url(#forceGrad)"
              strokeWidth={2.4}
            />
            <path d="M172 134 L184 130 L181 141 Z" fill="var(--mag)" />
          </motion.g>
          <motion.circle
            cx={168}
            cy={138}
            r={10}
            fill="none"
            stroke="var(--mag)"
            strokeWidth={1.2}
            animate={{ r: [8, 26], opacity: [0.7, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
          />
        </>
      )}
    </svg>
  );
}
