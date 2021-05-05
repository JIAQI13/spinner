let i = 0;
while (i < 50000000){
    setTimeout(() => {
        process.stdout.write('\r|   ');
      }, (i+=200));
      
      setTimeout(() => {
        process.stdout.write('\r/   ');
      }, (i+=200));
      
      setTimeout(() => {
        process.stdout.write('\r—   ');
      }, (i+=200));
      
      setTimeout(() => {
        // Need to escape the backslash since it's a special character.
        process.stdout.write('\r\\   '); 
      }, (i+=200));

      setTimeout(() => {
        process.stdout.write('\r|   ');
      }, (i+=200));
}