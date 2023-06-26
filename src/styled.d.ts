import 'styled-components';

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass;
  export interface DefaultTheme {
    color: {
      primary_1: string;
      primary_2: string;
      gray_1: string;
      gray_2: string;
      gray_3: string;
      gray_4: string;
      gray_5: string;
      gray_6: string;
    };
  }
}
