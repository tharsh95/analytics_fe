const ProgressBar = ({
  negativeValue,
  neutralValue,
  positiveValue,
}: {
  negativeValue: number; // Negative value for the red section
  neutralValue: number; // Neutral value for the yellow section
  positiveValue: number; // Positive value for the green section
}) => {
  // Define the total width of the progress bar (100%)
  const totalValue = Math.abs(negativeValue) + neutralValue + positiveValue;
  // Calculate the widths of each section based on the values
  const redWidth = (negativeValue/totalValue)*100
  const yellowWidth = (neutralValue / totalValue) * 100;
  const greenWidth = (positiveValue / totalValue) * 100;

  return (
    <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden flex">
      {/* Red Section (Negative value) */}
      <div
        style={{ width: `${redWidth}%` }}
        className="h-full bg-red-500"
      ></div>

      {/* Yellow Section (Neutral value) */}
      <div
        style={{ width: `${yellowWidth}%` }}
        className="h-full bg-yellow-500"
      ></div>

      {/* Green Section (Positive value) */}
      <div
        style={{ width: `${greenWidth}%` }}
        className="h-full bg-green-500"
      ></div>
    </div>
  );
};

export default ProgressBar;
