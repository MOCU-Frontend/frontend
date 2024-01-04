declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
<<<<<<< HEAD
    import React = require('react');
  
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

  
=======
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
>>>>>>> dev
