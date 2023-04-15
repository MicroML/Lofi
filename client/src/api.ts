import { OutputParams } from './params';

const server = 'http://127.0.0.1:5000';

export const generate = (): Promise<OutputParams> =>
  fetch(`${server}/generate`)
    .then((response) => response.json())
    .then((response) => JSON.parse(response) as OutputParams);

export const decode = (inputList: number[]): Promise<OutputParams> =>
  fetch(`${server}/decode?input=${JSON.stringify(inputList)}`)
    .then((response) => response.json())
    .then((response) => JSON.parse(response) as OutputParams);
