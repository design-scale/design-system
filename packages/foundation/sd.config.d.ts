export let source: string[];
export let platforms: {
  scss: {
    transformGroup: string;
    buildPath: string;
    files: {
      destination: string;
      format: string;
    }[];
  };
  css: {
    transformGroup: string;
    buildPath: string;
    files: {
      destination: string;
      format: string;
    }[];
  };
  'js-src': {
    transformGroup: string;
    buildPath: string;
    files: {
      name: string;
      destination: string;
      format: string;
    }[];
  };
  js: {
    transformGroup: string;
    buildPath: string;
    files: {
      name: string;
      destination: string;
      format: string;
    }[];
  };
};
