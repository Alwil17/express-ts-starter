#!/usr/bin/env node
import { Command } from 'commander';
import { createProject } from './createProject';

const program = new Command();

console.log("Starting");

program
    .version('1.0.0')
    .command('create <projectName>')
    .description('Crée un nouveau projet basé sur le starter')
    .action(async (projectName: string) => {
        await createProject(projectName);
    });

console.log("ended");
program.parse(process.argv);
console.log("ended 1");
