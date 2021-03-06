#!/usr/bin/env node

import { program } from 'commander';
import { description, version } from '../../package.json';
import genDiff from '..';

program
  .arguments('<firstConfig> <secondConfig>')
  .description(description)
  .version(version)
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((path1, path2) => {
    try {
      console.log(genDiff(path1, path2, program.format));
    } catch (err) {
      console.log(err.message);
    }
  })
  .parse(process.argv);
