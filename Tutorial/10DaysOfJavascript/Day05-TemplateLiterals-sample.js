function escapeHTML(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((result, string, i) => {
    console.log('i:',i);
    console.log('result:', result);
    console.log('string:', string);
    return `${result}${string}${values[i] ? String(values[i]).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : ''}`
    },
    '');
}

const userInput = '<script>alert("XSS")</script>';
console.log('userInput:',userInput);
const safeString = escapeHTML`${userInput}`;
// const safeString = escapeHTML`User input: ${userInput}`;
console.log('safeString:',safeString);  // User input: &lt;script&gt;alert("XSS")&lt;/script&gt;
