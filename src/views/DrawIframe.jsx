const DrawIframe = (props) => {
  const { height, drawio } = props;

  const containerStyle = {
    border: "none",
    height: height,
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={drawio}
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

DrawIframe.defaultProps = {
  height: "500px"
};

export default DrawIframe;
