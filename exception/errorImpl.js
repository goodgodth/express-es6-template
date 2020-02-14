import { ExtendableError } from "./extendableError";

export class AuthenticationNotFoundError extends ExtendableError {
  constructor() {
    super("Authentication Not Found", 401);
  }
}
export class AuthenticationTokenInvalidError extends ExtendableError {
  constructor() {
    super("Authentication Token Invalid", 403);
  }
}
export class TIDNotFoundError extends ExtendableError {
  constructor() {
    super("TID Not Found", 401);
  }
}

module.exports = {
  AuthenticationNotFoundError,
  AuthenticationTokenInvalidError,
  TIDNotFoundError
};
