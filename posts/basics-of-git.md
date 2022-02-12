---
title: Basics of Git and Github
excerpt: Some basics of git and github commands used in day to day life
image: basics-of-git.jpeg
isFeatured: true
date: '2022-01-18'
---

- **git add <file name>** - To add the named profile into staging area
- **git add .** - To add all the files into staging area
- **git commit -m "commit message"** - To commit the files in the staging area to the branch
- **git checkout <branchName/commitID>`** - To move the pointer to the commid id or branch name provided
- **git branch** - To list all the branches
- **git branch <name>** - To create a new branch
- **git checkout -b <branch name>** - To create and move to the new branch whoose name is provided
- **git merge <branch name>** - To merge the current branch to the branch name provided
- **git remote -v** - List the details of fetch and pull origin
- **git remote add origin <repo link>** - To add code in cwd to the origin(url of the repository)
- **git branch -M <name>** - To change the name of the current branch to the name provided
- **git push -u origin <branch name>** - To push all the changes in the current working directory to the origin's branch name
- **git clone <repo url>** - To clone a remote repository

.gitignore - A file created to not let git track the mentioned files in this file
