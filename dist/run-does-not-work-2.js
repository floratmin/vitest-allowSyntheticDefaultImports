import * as n from "pg";
const { Pool: t } = n;
function r(o) {
  return new t({ connectionString: o });
}
r("postgres://...");
