# Git Workflow for Team Collaboration

## 🗫 Communication

Main communication channel is Discord.
To ease working with usernames, do provide your username in discord channel as <username> / <githubUsername>

### Reporting issues

Document your ideas, issues, bugs in Github Issues.

#### Naming

- `FE-bug: The main logo is 2pixels to the left`
- `Docs: Update the data-desgn doc to relect the current databse situation`

## Before You Start

### 1. **Clone the project** (first time only)

```bash
git clone https://github.com/freeCodeCamp-2025-Summer-Hackathon/lime-variable.git
```

or

```bash
git clone git@github.com:freeCodeCamp-2025-Summer-Hackathon/lime-variable.git
```

then

```bash
cd lime-variable
```

### 2. **Always start with the latest code**

```bash
git checkout main
git pull origin main
```

## Daily Workflow

### 1. Create a Feature Branch

```bash
# Always create from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**Branch naming conventions:**

- `when working with frontend or backend then provide your branch with fe- or be- prefix`
- `be-feature/add-user-model`
- `fe-feature/add-login-page`
- `bugfix/fix-navbar-issue`
- `hotfix/security-patch`

### 2. Work on Your Changes

- Make your code changes
- Test your work locally
- Keep commits small and focused

### 3. Commit Your Work

```bash
# Stage your changes
git add .

# Or stage specific files
git add src/components/Header.js

# Commit with clear semantic commit message
git commit -m "feat: Add user authentication to login page"

```

### More Examples of commit messages

```bash
# New features
git commit -m "feat: add shopping cart functionality"

# Bug fixes
git commit -m "fix: resolve navbar collapse on mobile"

# Documentation
git commit -m "docs: update installation instructions"

# Code improvements
git commit -m "refactor: extract validation logic to utils"
git commit -m "style: fix indentation in header component"

# Tests
git commit -m "test: add unit tests for user service"

# Maintenance
git commit -m "chore: update dependencies to latest versions"
```

**Good commit messages tell a story:**

- ❌ "fixed stuff"
- ❌ "update"
- ❌ "changes"
- ✅ "feat: add user profile editing"
- ✅ "fix: resolve memory leak in image carousel"
- ✅ "docs: add API usage examples"

### 4. Push Your Branch

```bash
git push origin feature/your-feature-name
```

### 5. Create a Pull Request (PR)

1. Go to project github repo
2. Click "New Pull Request"
3. Choose: `your-branch` → `main`
4. Add description of what you changed
5. Request reviewers (teammates)

#### 5.1. Naming Pull Requests

- `FE-feature: Modal Functionality`
- `Docs: Update git-workflow`

### 6. Handle Code Review

- Teammates will review your code
- Make requested changes on your branch
- Push updates (they'll appear in the same PR)

### 7. After PR is Merged

```bash
# Switch back to main
git checkout main

# Get the latest changes (including your merged work)
git pull origin main

# Delete your local branch (it's no longer needed)
git branch -d feature/your-feature-name

# Delete remote branch (optional)
git push origin --delete feature/your-feature-name
```

## Important Rules for The Project

### ⚠️ Never Do This

- Don't push directly to `main` branch
- Don't force push (`git push --force`) on shared branches
- Don't commit large files or sensitive data

### ✅ Always Do This

- Pull latest changes before starting new work
- Test your code before pushing
- Write clear commit messages
- Keep your branches focused on one feature/fix

## Common Commands You'll Use Daily

```bash
# Check what branch you're on and file status
git status

# See your recent commits
git log --oneline

# See what changed in files
git diff

# Switch branches
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Update your current branch with latest main
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

## When Things Go Wrong

### Accidentally committed to main

```bash
# Don't panic! Create a branch from your commit
git branch feature/my-work
git checkout main
git reset --hard HEAD~1  # Remove the commit from main
git checkout feature/my-work
```

### Need to update your branch with latest main

```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

### Merge conflicts

1. Git will mark conflicted files
2. Open files and look for `<<<<<<<`, `=======`, `>>>>>>>`
3. Choose which code to keep
4. Remove the conflict markers
5. `git add .` and `git commit`

Remember: It's okay to make mistakes - that's how you learn!
