

const Skeleton = ({ width = "100%", height = "20px", circle = false, className = "" }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${className} ${
        circle ? "rounded-full" : "rounded-md"
      }`}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
