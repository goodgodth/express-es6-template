import moment from "moment";
import healthCheckUtil from "../util/healthCheck.util";

class healthCheckController {
  static healthCheck(req, res) {
    return res.json(healthCheckUtil.healthCheckModel);
  }
}
export default healthCheckController;
