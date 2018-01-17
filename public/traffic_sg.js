// we need to load the css ourselves
//import 'plugins/traffic_sg/traffic_sg.less';
//import 'plugins/traffic_sg/traffic_sg_controller';
import { CATEGORY } from 'ui/vis/vis_category';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
//import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';
//import trafficVisTemplate from 'plugins/traffic_sg/traffic_sg.html';
//import trafficVisParamsTemplate from 'plugins/traffic_sg/traffic_sg_params.html';
import image from '../screenshot.png';

const MetricVisType = (Private) => {
  const VisFactory = Private(VisFactoryProvider);
  //const Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return VisFactory.createBaseVisualization({
    name: 'traffic',
    title: 'Traffic',
    image,
    description: 'Chart display lights of a standard color green/yellow/red',
    category: CATEGORY.OTHER,
    icon: 'fa-thumbs-up',
    //template: trafficVisTemplate,
    //params: {
    //  defaults: {
    //    titleTraffic: null,
    //    fontSize: 60,
    //    width: 50,
    //    redThreshold: 20,
    //    greenThreshold: 80,
    //    invertScale: null,
    //    handleNoResults: true
    //  },
    //  editor: trafficVisParamsTemplate
    //},
    //editorConfig: {
    //  collections: {},
    //	schemas: new Schemas([
    //  	{
    //    	group: 'metrics',
    //    	name: 'metric',
    //    	title: 'Metric',
    //    	min: 1,
    //    	max: 1,
    //    	defaults: [
    //      	{ type: 'count', schema: 'metric' }
    //    	]
    // 	},
    //  	{
    //    	group: 'buckets',
    //    	name: 'segment',
    //    	title: 'X-Axis',
    //    	min: 0,
    //    	max: 1,
    //    	aggFilter: ['terms']
    //  	}
   // 	])
   //  }
  });
}

// export the provider so that the visType can be required with Private()
//export default MetricVisProvider;
// register the provider with the visTypes registry
VisTypesRegistryProvider.register(MetricVisType);