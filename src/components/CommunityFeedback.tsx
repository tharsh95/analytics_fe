import useFetchData from "@/hooks/useFetchData";

import ProgressBar from "./ui/progress";

interface FeedbackData {
  negative: number;
  neutral: number;
  positive: number;
}

const CommunityFeedback = () => {
  const { data } = useFetchData<FeedbackData>(
    "http://3.111.196.92:8020/api/v1/sample_assignment_api_5/"
  );

  return (
    <>
      <h4 className="p-4 text-lg">CommunityFeedback</h4>
      <div className="">
        <h1 className="p-4 mb-4 font-bold text-xl">Mostly Negative</h1>
        <div className="p-6">
          <ProgressBar
            negativeValue={data?.negative ?? 0}
            neutralValue={data?.neutral ?? 0}
            positiveValue={data?.positive ?? 0}
          />
        </div>
        <div className="flex justify-around">
          <h4>Negative</h4>
          <h4>Neutral</h4>
          <h4>Positive</h4>
        </div>
        <div className="flex justify-around mt-6">
          <h4>{data?.negative}</h4>
          <h4>{data?.neutral}</h4>
          <h4>{data?.positive}</h4>
        </div>
      </div>
    </>
  );
};

export default CommunityFeedback;
