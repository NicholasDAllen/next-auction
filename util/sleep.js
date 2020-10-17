export const sleep = async (s) => {
    if (!s) return;
    return new Promise((resolve) => {
      setTimeout(resolve, s * 1000);
    });
  } 