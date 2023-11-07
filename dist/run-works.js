import n from "pg";
const { Pool: t } = n;
function e(o) {
  return new t({ connectionString: o });
}
e("postgres://...");
