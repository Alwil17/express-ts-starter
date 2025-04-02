#!/usr/bin/env node
import { Command } from 'commander';
import { createProject } from './createProject';

const program = new Command();

program
    .version('1.0.0')
    .command('create <projectName>')
    .description('Crée un nouveau projet basé sur le starter')
    .action((projectName: string) => {
        createProject(projectName);
    });

program.parse(process.argv);
