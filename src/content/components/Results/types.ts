export interface SearchDataType {
  package: {
    name: string;
    description: string;
    links: {
      bugs?: string;
      homepage?: string;
      npm?: string;
      repository?: string;
    };
  };
}
