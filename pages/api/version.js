export default (req, res) => {
  res.statusCode = 200;
  res.json({
    applicationName: "Sample NextJS with Material-UI",
    descripttion: "App created from a tutorial",
    version: "0.0.1",
  });
};
