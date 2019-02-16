interface TailWindCSS {
  container?: boolean;
  "clear-fix"?: boolean;
  "list-reset"?: boolean;
  italic?: boolean;
  roman?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  "normal-case"?: boolean;
  underline?: boolean;
  "line-through"?: boolean;
  "no-underline"?: boolean;
  antialiased?: string;
  "subpixel-antialiased"?: string;
  truncate?: boolean;
  display?:
    | "block"
    | "inline-block"
    | "inline"
    | "table"
    | "table-row"
    | "table-cell"
    | "none"
    | "flex"
    | "inline-flex"
    | string[];
  position?:
    | "static"
    | "fixed"
    | "absolute"
    | "relative"
    | "sticky"
    | string[];
  visibility?: "visible" | "invisible"  | string[];
  float?: "float-right" | "float-left" | "float-none"  | string[];
  overflow?:
    | "auto "
    | "hidden "
    | "visible "
    | "scroll "
    | "x-auto "
    | "y-auto "
    | "x-hidden "
    | "y-hidden "
    | "x-visible "
    | "y-visible "
    | "x-scroll "
    | "y-scroll "
    | string[];
  scrolling?: "touch" | "auto"  | string[];
  pin?:
    | boolean
    | "t"
    | "r"
    | "b"
    | "l"
    | "y"
    | "x"
    | "none"
    | string[];
  z?: string | string[];
  text?: string | string[];
  font?: string | string[];
  tracking?: string | string[];
  leading?: string | string[];
  align?: "start" | "center" | "end" | "between" | "around" |  string[];
  whitespace?: string | string[];
  break?: string | string[];
  bg?: string | string[];
  border?: string | string[];
  rounded?: string | string[];
  flex?:
    | "row"
    | "row-reserve"
    | "col"
    | "col-reserve"
    | "no-wrap"
    | "wrap"
    | "wrap-reverse"
    | "initial"
    | "1"
    | "auto"
    | "none"
    | "grow"
    | "shrink"
    | "no-grow"
    | "no-shrink"
    | string[];
  items?:
    | "stretch"
    | "start"
    | "center"
    | "end"
    | "baseline"
    | string[];
  content?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | string[];
  self?: "stretch" | "start" | "center" | "end" | "auto"  | string[];
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | string[];
  p?: string | string[];
  px?: string | string[];
  py?: string | string[];
  pt?: string | string[];
  pr?: string | string[];
  pb?: string | string[];
  pl?: string | string[];
  m?: string | string[];
  mx?: string | string[];
  my?: string | string[];
  mt?: string | string[];
  mr?: string | string[];
  mb?: string | string[];
  ml?: string | string[];
  nm?: string | string[];
  nmx?: string | string[];
  nmy?: string | string[];
  nmt?: string | string[];
  nmr?: string | string[];
  nmb?: string | string[];
  nml?: string | string[];
  w?: string | string[];
  "min-w"?: string | string[];
  "max-w"?: string | string[];
  h?: string | string[];
  "min-h"?: string | string[];
  "max-h"?: string | string[];
  table?: string | string[];
  cursor?: string | string[];
  "pointer-events"?: string | string[];
  resize?: string | string[];
  select?: string | string[];
  appearance?: string | string[];
  shadow?: string | string[];
  object?: string | string[];
  opacity?: string | string[];
  outline?: string | string[];
  fill?: string | string[];
  stroke?: string | string[];
}
