
export default function Loader({
  size = 96,
  speed = 4,
  from = "whitesmoke",
  to = "#18181b",
}) {
  return (
    <>
      {/* keyframes */}
      <style>
        {`
          @keyframes orbit {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-50%",
            background: `radial-gradient(circle at top center, ${from}, ${to} 70%)`,
            animation: `orbit ${speed}s linear infinite`,
          }}
        />
      </div>
    </>
  );
}
