import useFetchData from "@/hooks/useFetchData";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { Separator } from "@/components/ui/separator";
import Skeleton from "@/components/ui/skeleton";

interface PerformanceData {
  score: number;
  title: string;
  message: string;
}

// const PerformanceScore = () => {
//   const { data, loading } = useFetchData<PerformanceData>(
//     "http://3.111.196.92:8020/api/v1/sample_assignment_api_3/"
//   );

//   if (loading) {
//     return (
//       <>
//         {/* Loading State - Skeleton for Score */}
//         <div className="flex justify-center">
//           <SemiCircleProgress
//             percentage={data?.score ?? 0}
//             size={{
//               width: 200,
//               height: 200,
//             }}
//             strokeWidth={10}
//             strokeColor="blue"
//           />
//         </div>
//         <Separator />

//         {/* Loading State - Skeleton for Title and Message */}
//         <div className="flex flex-col items-center mt-4 space-y-3">
//           <Skeleton width="150px" height="20px" />
//           <Skeleton width="120px" height="16px" />
//         </div>

//         {/* Loading State - Skeleton for "Improve your score" */}
//         <div className="flex justify-center mt-4">
//           <Skeleton width="120px" height="40px" className="rounded-3xl mt-4" />
//         </div>
//       </>
//     );
//   }

//   // When data is loaded
//   return (
//     <>
//       <div className="flex justify-center">
//         <SemiCircleProgress
//           percentage={data?.score ?? 0}
//           size={{
//             width: 200,
//             height: 200,
//           }}
//           strokeWidth={10}
//           strokeColor="blue"
//         />
//       </div>
//       <Separator />
//       <div className="mt-4"></div>
//       <h2 className="font-extrabold text-lg text-center">{data?.title}</h2>
//       <p className="font-bold text-sm text-center">{data?.message}</p>

//       {/* "Improve your score" Button */}
//       <div className="flex justify-center mt-4">
//         <p className="border-2 border-gray-400 rounded-3xl mt-4 ml-8 w-fit p-2 text-center">
//           Improve your score
//         </p>
//       </div>
//     </>
//   );
// };

// export default PerformanceScore;
const PerformanceScore = () => {
  const { data, loading } = useFetchData<PerformanceData>(
    "http://3.111.196.92:8020/api/v1/sample_assignment_api_3/"
  );

  if (loading) {
    return (
      <>
        {/* Loading State - Skeleton for Score */}
        <div className="flex justify-center">
          <SemiCircleProgress
            percentage={data?.score ?? 0}
            size={{
              width: 200,
              height: 200,
            }}
            strokeWidth={10}
            strokeColor="blue"
          />
        </div>
        <Separator />

        {/* Loading State - Skeleton for Title and Message */}
        <div className="flex flex-col items-center mt-4 space-y-3">
          <Skeleton width="150px" height="20px" />
          <Skeleton width="120px" height="16px" />
        </div>

        {/* Ensure consistent margin below "Improve your score" */}
        <div className="flex justify-center mt-6">
          <Skeleton width="120px" height="40px" className="rounded-3xl" />
        </div>
      </>
    );
  }

  // When data is loaded
  return (
    <>
      <div className="flex justify-center">
        <SemiCircleProgress
          percentage={data?.score ?? 0}
          size={{
            width: 200,
            height: 200,
          }}
          strokeWidth={10}
          strokeColor="blue"
        />
      </div>
      <Separator />
      <div className="mt-4"></div>
      <h2 className="font-extrabold text-lg text-center">{data?.title}</h2>
      <p className="font-bold text-sm text-center">{data?.message}</p>

      {/* Ensure consistent margin below "Improve your score" */}
      <div className="flex justify-center mt-6">
        <p className="border-2 border-gray-400 rounded-3xl w-fit p-2 text-center">
          Improve your score
        </p>
      </div>
    </>
  );

};
export default PerformanceScore
