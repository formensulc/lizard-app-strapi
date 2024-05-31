import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomelementsUndefindTeleramComponent
  extends Schema.Component {
  collectionName: 'components_customelements_undefind_teleram_components';
  info: {
    displayName: 'TeleramComponent';
    description: '';
  };
  attributes: {
    TokenTelegram: Attribute.String;
    ChatIdTelegram: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'customelements-undefind.teleram-component': CustomelementsUndefindTeleramComponent;
    }
  }
}
