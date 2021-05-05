let i = 0;
let index = 0;
let s = ['\r|','\r/','\r—','\r\\','\r|'];
while (i < 50000000){
    setTimeout(() => {
        index === s.length ? index = 0: '';
        process.stdout.write(`${s[index]}   `);
        index++;
      }, (i+=200));
}