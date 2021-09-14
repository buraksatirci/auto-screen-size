/**
 * Returns correct value for given value according to window width.
 * @param data
 * @returns number
 */
export const GetScaledValue = (data) => {
  return data / (1920 / window.innerWidth);
};

/**
 * Returns window width
 * @returns number
 */
export const GetWindowWidth = () => {
  return window.innerWidth;
};

/**
 * Returns window height
 * @returns number
 */
export const GetWindowHeight = () => {
  return window.innerHeight;
};
