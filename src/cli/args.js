const SLICE_NUMBER = 2;
const PREFIX = "--";

const parseArgs = () => {
  const parsedArgs = [];

  process.argv.slice(SLICE_NUMBER).forEach((arg, index) => {
    if (arg.startsWith(PREFIX)) {
      const propName = arg.slice(SLICE_NUMBER);
      const propValue = process.argv[index + PREFIX.length + 1];
      parsedArgs.push(`${propName} is ${propValue}`);
    }
  });

  console.log(parsedArgs.join(", "));
};

parseArgs();
