class httpForbidden extends httpError {
    constructor(message, stack = null) {
      super();
      this.code = 403;
      this.message = message
      this.stack = stack;
    }
  }