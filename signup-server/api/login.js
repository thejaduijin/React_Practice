// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email, password } = req.body;  // Get email and password from request body
//         const filePath = path.join(__dirname, 'signup-data.json');

//         // Read the signup data from the JSON file
//         fs.readFile(filePath, 'utf8', (err, fileData) => {
//             if (err) {
//                 return res.status(500).json({ message: 'Error reading user data' });
//             }

//             const users = JSON.parse(fileData || '[]'); // Parse the existing signup data
//             const user = users.find(u => u.email === email); // Find the user by email

//             if (!user) {
//                 // If user not found, respond with error
//                 return res.status(404).json({ message: 'User not found' });
//             }

//             if (user.password !== password) {
//                 // If password doesn't match, respond with error
//                 return res.status(401).json({ message: 'Invalid password' });
//             }

//             // If everything is okay, respond with success
//             res.status(200).json({ message: 'Login successful!' });
//         });
//         // Save data to JSON file or database
//         res.status(200).json({ message: 'Signup successful' });
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }