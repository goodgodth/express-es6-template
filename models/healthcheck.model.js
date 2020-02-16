const moment = require("moment");

export default class healthCheck {
  constructor(
    _serviceOnAtDateTime,
    _serviceOninMinute,
    _recentyRequestAtDateTime
  ) {
    this.serviceOnAtDateTime = _serviceOnAtDateTime;
    this.serviceOninMinute = _serviceOninMinute;
    this.recentyRequestAtDateTime = _recentyRequestAtDateTime;
  }
}
