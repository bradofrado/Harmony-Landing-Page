export const getClass = (...strings: (string | undefined)[]) => {
    return strings.filter((x) => !!x).join(" ");
  };