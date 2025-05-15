import { register } from "esbuild-register/dist/node";

register({
  format: "cjs",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
    ".scss": "js",
    ".css": "js",
  },
});
