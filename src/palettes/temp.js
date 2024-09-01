// const fs = require('node:fs');



// async function generatePaintColors() {
//   const data = fs.readFileSync('./sherwinWilliams.txt', { encoding: 'utf8' });

//   let lines = data.split('\n');
//   let objectLines = lines.map(line => {
//     let strings = line.split(' ');
//     let len = strings.length;

//     if (len === 8) {
//       return {
//         name: `${strings[1]} ${strings[2]}`,
//         hex: `#${strings[len - 1]}`,
//       };
//     } else if (len === 7) {
//       return {
//         name: strings[1],
//         hex: `#${strings[len - 1]}`,
//       };
//     } else if (len === 9) {
//       return {
//         name: `${strings[1]} ${strings[2]} ${strings[3]}`,
//         hex: `#${strings[len - 1]}`,
//       };
//     } else if (len === 10) {
//       return {
//         name: `${strings[1]} ${strings[2]} ${strings[3]} ${strings[4]}`,
//         hex: `#${strings[len - 1]}`,
//       };
//     }

//     return null;
//   });


//   fs.writeFileSync('./temp.txt', JSON.stringify(objectLines));




// }

// generatePaintColors();