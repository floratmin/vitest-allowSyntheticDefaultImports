import { Pool as n } from "pg";
function r(o) {
  return new n({ connectionString: o });
}
r("postgres://...");
