const WandbIframe = (props) => {
  const { height } = props;

  const containerStyle = {
    border: "none",
    height: height,
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src="https://wandb.ai/phanthanhhuy1996/huggingface/reports/Experiment-1--Vmlldzo4MTY4NDM0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

WandbIframe.defaultProps = {
  height: "1500px"
};

export default WandbIframe;
