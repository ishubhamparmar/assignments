## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

<!-- solution -->

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data)=>{
console.log("the data = ", data);

let newData = data.replace(/\s+/g, ' ');
fs.writeFile("a.txt", newData, (err)=>{
if(err) console.log(err);
})
})
