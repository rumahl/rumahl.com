declare module '*.module.css' {
  const classes: {readonly [key: string]: string};
  export default classes;
}

interface RequestInit {
  next?: {revalidate?: number | false; tags?: string[]};
}
