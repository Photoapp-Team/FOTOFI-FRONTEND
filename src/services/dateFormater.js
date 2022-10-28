var moment = require("moment");

export const dateFormater = (values) => {
  return moment(values).format("LL");
};
