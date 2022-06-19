db.createCollection("mqtt", {
  timeseries: {
    timeField: "epoch",
    metaField: "topic",
    granularity: "minutes",
  },
});
