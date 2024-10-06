const PREFIX = "--";
const SLICE = 2;

const parseArgs = () => {
  const parsedArgs = [];

  process.argv.slice(SLICE).forEach((arg, index) => {
    if (arg.startsWith(PREFIX)) {
      const propName = arg.slice(PREFIX.length);
      const propValue = process.argv[index + SLICE + 1];
      parsedArgs.push(`${propName} is ${propValue}`);
    }
  });

  console.log(parsedArgs.join(", "));
};

parseArgs();
