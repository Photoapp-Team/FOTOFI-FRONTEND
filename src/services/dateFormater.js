import moment from "moment";
import "moment/locale/es";
moment.locale("es");

export const dateFormater = (values) => {
  var localLocale = moment(values);
  return localLocale.format("LL");
};
