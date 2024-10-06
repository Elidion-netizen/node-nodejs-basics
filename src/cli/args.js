const PREFIX = "--";

const parseArgs = () => {
  const parsedArgs = [];

  process.argv.forEach((arg, index) => {
    if (arg.startsWith(PREFIX)) {
      const propName = arg.slice(PREFIX.length);
      const propValue = process.argv[index + 1];
      parsedArgs.push(`${propName} is ${propValue}`);
    }
  });

  console.log(parsedArgs.join(", "));
};

parseArgs();
