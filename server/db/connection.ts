import monk from "monk";

const connection = "localhost/tremokr";
const db = monk(connection);
export default db;
