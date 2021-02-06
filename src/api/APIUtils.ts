const baseURL: string = "https://method-toolkit-backend.herokuapp.com";

const throwError = (resource: string): void => {
  throw new Error(`Could not fetch resource: ${resource}`);
};

export const fetchJSON = async (resource: string) => {
  try {
    return await fetch(`${baseURL}${resource}`);
  } catch {
    throwError(resource);
  }
};
