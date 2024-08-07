const byteSize = (str) => {
    // Create a Blob object with the string
    const blob = new Blob([str]);
    // Return the size of the Blob in bytes
    return blob.size;
};

const showByteSize = () => {
    const str = document.getElementById('inputString').value;
    alert(`Byte size: ${byteSize(str)}`);
};
