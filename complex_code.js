/* complex_code.js */

// This code generates a barcode image using the Code 128 barcode standard
// It takes in a string of alphanumeric characters and converts them into barcode representation

function generateBarcode(data) {
  // Start code
  let barcode = "";
  
  // Convert the input data into a barcoded sequence
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
        case "0":
            barcode += "11011001100";
            break;
        case "1":
            barcode += "11001101100";
            break;
        case "2":
            barcode += "11001100110";
            break;
        case "3":
            barcode += "10010011000";
            break;
        case "4":
            barcode += "10010001100";
            break;
        case "5":
            barcode += "10001001100";
            break;
        case "6":
            barcode += "10011001000";
            break;
        case "7":
            barcode += "10011000100";
            break;
        case "8":
            barcode += "10001100100";
            break;
        case "9":
            barcode += "11001001000";
            break;
        // ... more cases for all alphanumeric characters
        default:
            barcode += "";
            break;
    }
  }

  // Add start and stop codes
  barcode = "11010010000" + barcode + "1100011101011";
  
  // Generate the barcode image
  let image = "";
  
  for (let i = 0; i < barcode.length; i++) {
    if (barcode[i] === "1") {
      image += "▮";
    } else {
      image += " ";
    }
  }
  
  return image;
}

// Test the function
let inputData = "Hello World!";
let barcodeImage = generateBarcode(inputData);
console.log(barcodeImage);