export default kibana => new kibana.Plugin({
  require: ['kibana', 'elasticsearch'],
  uiExports: {
    visTypes: [
      'plugins/traffic_sg/traffic_sg'
    ]
  }
});