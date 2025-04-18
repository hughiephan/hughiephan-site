const WandbIframe = (props) => {
  const { height, wandb} = props;

  const containerStyle = {
    border: "none",
    height: height,
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={wandb}
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
