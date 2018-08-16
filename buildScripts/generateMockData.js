/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';

const json = JSON.stringify(jsf(schema));
jsf.extend("faker", function() {
  return faker;
});
fs.writeFile("./src/api/db.json", json, (err) => {
  if(err){
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
