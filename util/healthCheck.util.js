import moment from "moment";

module.exports.healthCheckModel = {
  serviceOnAtTimeStamp: 0,
  serviceOnAt: "",
  recentyRequestAtTimeStamp: 0,
  recentyRequestAt: "",
  minuteOfServiceOn: 0
};

module.exports.setServiceOn = function(_on) {
  this.healthCheckModel.serviceOnAtTimeStamp = _on;
  this.healthCheckModel.recentyRequestAtTimeStamp = _on;
  this.healthCheckModel.serviceOnAt = moment
    .unix(_on / 1000)
    .format("YYYY-MM-DD HH:mm:ss");
  this.healthCheckModel.recentyRequestAt = moment
    .unix(_on / 1000)
    .format("YYYY-MM-DD HH:mm:ss");
};
module.exports.setRecentRequest = function(_on) {
  this.healthCheckModel.recentyRequestAtTimeStamp = _on;
  this.healthCheckModel.recentyRequestAt = moment
    .unix(_on / 1000)
    .format("YYYY-MM-DD HH:mm:ss");
  this.healthCheckModel.minuteOfServiceOn =
    (this.healthCheckModel.recentyRequestAtTimeStamp -
      this.healthCheckModel.serviceOnAtTimeStamp) /
    60000;
  this.healthCheckModel.minuteOfServiceOn = Math.round(
    this.healthCheckModel.minuteOfServiceOn
  );
};
