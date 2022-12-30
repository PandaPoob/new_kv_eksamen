import StepTemplate from "./StepTemplate";

function Step3Test({ onCallback, onResultCallback }) {
  const onCallback_1 = () => {
    onResultCallback(3);
  };

  return (
    <StepTemplate
      heading={"Er katten tilskadekommen eller alvorligt syg?"}
      btnText_1="Ja"
      btnText_2={"Nej"}
      onCallback_1={onCallback_1}
      onCallback_2={onCallback}
    />
  );
}

export default Step3Test;
