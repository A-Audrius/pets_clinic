const { sql } = require("../dbConnection");

exports.createUser = async (newUser) => {
    const users = await sql`
        INSERT INTO users ${sql(newUser, "fullname", "email", "password")}
        RETURNING *
        `;
    return users[0];
}

// exports.createUser = async (newUser) => {
//     const users = await sql`
//       INSERT INTO users ${sql(newUser, 'username', 'email', 'password')}
//       RETURNING *
//     `;
//     return users[0];
//   };