import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsCta extends Struct.ComponentSchema {
  collectionName: 'components_buttons_ctas';
  info: {
    displayName: 'CTA';
    icon: 'rocket';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ServiceFeaturesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_service_features_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ServicesService extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Service';
    icon: 'shield';
  };
  attributes: {
    class: Schema.Attribute.String;
    description: Schema.Attribute.String;
    duration: Schema.Attribute.String;
    features: Schema.Attribute.Component<'service-features.features', true>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    requirements: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StatisticsStat extends Struct.ComponentSchema {
  collectionName: 'components_statistics_stats';
  info: {
    displayName: 'stat';
    icon: 'chartCircle';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.cta': ButtonsCta;
      'service-features.features': ServiceFeaturesFeatures;
      'services.service': ServicesService;
      'statistics.stat': StatisticsStat;
    }
  }
}
