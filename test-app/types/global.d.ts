// Types for compiled templates
declare module 'test-app/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';
  const tmpl: TemplateFactory;
  export default tmpl;
}

// To make TS understand our image imports, we have to tag them using a `responsive` query parameter, that has to come *last*!
// We cannot use something like `*.jpg*` that works with queries, as TS only supports a single wildcard.
// See https://github.com/microsoft/TypeScript/issues/38638
declare module '*responsive' {
  import { ProviderResult } from 'ember-responsive-image/types';
  const value: ProviderResult;
  export default value;
}

declare module '*.jpg' {
  import { ProviderResult } from 'ember-responsive-image/types';
  const value: ProviderResult;
  export default value;
}

declare module '*.jpeg' {
  import { ProviderResult } from 'ember-responsive-image/types';
  const value: ProviderResult;
  export default value;
}
