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
      'statistics.stat': StatisticsStat;
    }
  }
}
