import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: {
        
      };
      white: {
      }
    };
    font: {
      size: {
        "sm": string;
        "bs": string;
        "md": string;
        "lg": string;
        "xl": string;
        "2xl": string;
      },
      weight: {
        "normal": number;
        "medium": number;
        "bold": number;
      }
    }
  }
}
