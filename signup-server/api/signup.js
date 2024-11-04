// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         // Process signup logic
//         const data = req.body;

//         // Path to the JSON file where the data will be saved
//         const filePath = path.join(__dirname, 'signup-data.json');

//         // Read the existing data from the file
//         fs.readFile(filePath, 'utf8', (err, fileData) => {
//             if (err && err.code !== 'ENOENT') {
//                 return res.status(500).json({ message: 'Error reading file' });
//             }

//             const existingData = fileData ? JSON.parse(fileData) : [];

//             // Append the new sign-up data
//             existingData.push(data);

//             // Save the updated data back to the JSON file
//             fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
//                 if (writeErr) {
//                     return res.status(500).json({ message: 'Error saving data' });
//                 }
//                 res.status(200).json({ message: 'Sign-up data saved successfully!' });
//             });
//         });
//         // Save data to JSON file or database
//         res.status(200).json({ message: 'Signup successful' });
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }