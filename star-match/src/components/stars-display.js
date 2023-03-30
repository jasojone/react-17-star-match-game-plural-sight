import utils from "../utils/math-utils";

const StarsDisplay = ({ count }) => {
  const skullCount = count > 0 ? count : 0;
  const skullArray = Array.from({ length: skullCount }, (_, i) => i);
  return (
    <>
      {skullArray.map(skullId => (
        <div key={skullId} className="skull">
          &#x1F480;
        </div>
      ))}
    </>
  );
};




  export default StarsDisplay;