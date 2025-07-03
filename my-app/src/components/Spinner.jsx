import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "20vh auto",
};

const Spinner = ({ loading }) => {
  return (
    <>
      <BeatLoader
        color={"white"}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Spinner;
