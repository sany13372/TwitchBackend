import type { Schema, Attribute } from '@strapi/strapi';

export interface SffGsg extends Schema.Component {
  collectionName: 'components_sff_gsgs';
  info: {
    displayName: 'gsg';
    icon: 'attachment';
  };
  attributes: {
    ffs: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sff.gsg': SffGsg;
    }
  }
}
