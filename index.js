const server = require("./server");

import gameOfLife from './src';

gameOfLife(process.stdin, process.stdout);
